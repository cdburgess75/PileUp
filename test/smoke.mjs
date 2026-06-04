// Smoke test — run: node test/smoke.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM, VirtualConsole } from "jsdom";

const root = path.resolve(fileURLToPath(import.meta.url), "../..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const js = html.split("<script>")[1]?.split("</script>")[0];
if (!js) throw new Error("Could not extract <script> block from index.html");

// ── Test 1: syntax ────────────────────────────────────────────────────────
try {
  new Function(js);
  console.log("PASS  1/3  syntax check");
} catch (e) {
  throw new Error(`FAIL  1/3  syntax error: ${e.message}`);
}

// ── Test 2: getElementById coverage ──────────────────────────────────────
const ids = [...js.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map(m => m[1]);
const present = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const missing = [...new Set(ids)].filter(id => !present.has(id));
if (missing.length) {
  throw new Error(`FAIL  2/3  getElementById calls with no matching id="": ${missing.join(", ")}`);
}
console.log(`PASS  2/3  getElementById coverage (${new Set(ids).size} IDs checked)`);

// ── Test 3: boot in jsdom ────────────────────────────────────────────────
const vc = new VirtualConsole();
const errors = [];
vc.on("error", msg => errors.push(msg));
vc.on("jsdomError", e => errors.push(e.message));

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(w) {
    const store = (() => {
      let s = {};
      return {
        getItem:    k      => k in s ? s[k] : null,
        setItem:    (k, v) => { s[k] = String(v); },
        removeItem: k      => { delete s[k]; },
        clear:      ()     => { s = {}; },
        get length() { return Object.keys(s).length; },
        key:        i      => Object.keys(s)[i] ?? null,
      };
    })();
    Object.defineProperty(w, "localStorage", { value: store, configurable: true });
    Object.defineProperty(w.navigator, "onLine", { value: true, configurable: true });
    w.fetch = () => Promise.resolve({
      ok: true,
      text: () => Promise.resolve("[]"),
      json: () => Promise.resolve([]),
    });
    w.print = () => {};
    w.URL.createObjectURL = () => "blob:stub";
    w.URL.revokeObjectURL = () => {};
  },
});

await new Promise(r => setTimeout(r, 100));

const doc = dom.window.document;
for (const id of ["tab-spots", "tab-log", "tab-tools", "toast", "logModal"]) {
  if (!doc.getElementById(id)) {
    errors.push(`Expected element #${id} not found after boot`);
  }
}

if (errors.length) {
  throw new Error(`FAIL  3/3  jsdom boot:\n  ${errors.join("\n  ")}`);
}
console.log("PASS  3/3  jsdom boot (all expected elements present)");
console.log("\nAll smoke tests passed.");
