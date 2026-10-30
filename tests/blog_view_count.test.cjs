const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const layout = fs.readFileSync(path.join(__dirname, "../_layouts/blog-standalone.html"), "utf8");
const source = layout.match(/<script data-blog-view-count>([\s\S]*?)<\/script>/)[1];
const flush = () => new Promise(setImmediate);

async function runCounter(reply) {
  const counter = { textContent: "加载中...", dataset: { unavailable: "暂时无法获取浏览量，请稍后再试" } };
  const timers = new Map();
  const requests = [];
  const location = { href: "https://jiatongguo.top/posts/2026/06/d4rt/" };
  const document = {
    referrer: "https://jiatongguo.top/blog/",
    getElementById: (id) => id === "busuanzi_page_pv" ? counter : null,
  };
  vm.runInNewContext(source, {
    document, location, window: { location }, URL, AbortController,
    console: { error() {} },
    setTimeout(callback, delay) { assert.equal(delay, 8000); timers.set(1, callback); return 1; },
    clearTimeout(id) { timers.delete(id); },
    fetch(url, options) { requests.push({ url, options }); return reply(options); },
  });
  await flush();
  return { counter, timers, requests };
}

test("blog counter retains the original provider and displays valid counts", async () => {
  for (const count of [0, 128, "256"]) {
    const state = await runCounter(() => Promise.resolve({ ok: true, json: async () => ({ busuanzi_page_pv: count }) }));
    assert.equal(state.counter.textContent, String(count));
    assert.equal(state.requests.length, 1);
    assert.equal(state.requests[0].url, "https://cdn.busuanzi.cc/api.php");
    assert.equal(state.requests[0].options.method, "POST");
    assert.deepEqual(JSON.parse(state.requests[0].options.body), {
      url: "https://jiatongguo.top/posts/2026/06/d4rt/",
      referrer: "https://jiatongguo.top/blog/",
    });
    assert.equal(state.timers.size, 0);
  }
});

test("failed or invalid counter responses replace the loading placeholder", async () => {
  const failures = [
    () => Promise.reject(new TypeError("Failed to fetch")),
    () => Promise.resolve({ ok: false, status: 554, json: async () => { throw new SyntaxError("Empty response"); } }),
    () => Promise.resolve({ ok: true, json: async () => { throw new SyntaxError("Invalid JSON"); } }),
    () => Promise.resolve({ ok: true, json: async () => ({ busuanzi_page_pv: "error" }) }),
    () => Promise.resolve({ ok: true, json: async () => ({}) }),
  ];
  for (const reply of failures) {
    const state = await runCounter(reply);
    assert.equal(state.counter.textContent, "—");
    assert.equal(state.counter.title, state.counter.dataset.unavailable);
    assert.equal(state.timers.size, 0);
  }
});

test("a stalled request times out without retries or permanent loading", async () => {
  const state = await runCounter((options) => new Promise((resolve, reject) => {
    options.signal.addEventListener("abort", () => reject(new Error("Aborted")), { once: true });
  }));
  assert.equal(state.counter.textContent, "加载中...");
  assert.equal(state.timers.size, 1);
  state.timers.get(1)();
  await flush();
  assert.equal(state.counter.textContent, "—");
  assert.equal(state.requests.length, 1);
  assert.equal(state.timers.size, 0);
});
