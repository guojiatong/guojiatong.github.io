const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

test("footer updates initially and batches resizes without a recurring timer", () => {
  const source = fs.readFileSync(path.join(__dirname, "../assets/js/_main.js"), "utf8");
  const start = source.indexOf("  const $body =");
  const end = source.indexOf("  // FitVids init", start);
  assert.ok(start >= 0 && end > start);
  const frames = [];
  const margins = [];
  let height = 80;
  let resize;
  const footerElement = {};
  const footer = { 0: footerElement, length: 1, outerHeight: () => height };
  const body = { css: (property, value) => {
    assert.equal(property, "margin-bottom");
    margins.push(value);
  } };
  const window = {
    setTimeout(callback, delay) {
      assert.equal(delay, 250);
      frames.push(callback);
      return frames.length;
    },
  };
  const $ = (target) => {
    if (target === "body") return body;
    if (target === ".page__footer") return footer;
    assert.equal(target, window);
    return { on(event, callback) {
      assert.equal(event, "resize");
      resize = callback;
    } };
  };
  vm.runInNewContext(source.slice(start, end), { $, window });
  assert.deepEqual(margins, [80]);
  resize(); resize(); resize();
  assert.equal(frames.length, 1);
  height = 120;
  frames.shift()();
  assert.deepEqual(margins, [80, 120]);
  height = 160;
  resize();
  frames.shift()();
  assert.deepEqual(margins, [80, 120, 160]);
});

test("navigation preserves immediate resize updates without screen.orientation", () => {
  const source = fs.readFileSync(path.join(__dirname, "../assets/js/plugins/jquery.greedy-navigation.js"), "utf8");
  const start = source.indexOf("$(window).on('resize'");
  const end = source.indexOf("$btn.on", start);
  assert.ok(start >= 0 && end > start);
  let resize;
  let updates = 0;
  const window = {};
  const $ = () => ({ on(event, callback) {
    assert.equal(event, "resize");
    resize = callback;
  } });
  vm.runInNewContext(source.slice(start, end), { $, window, screen: {}, updateNav: () => updates++ });
  resize(); resize(); resize();
  assert.equal(updates, 3);
  resize();
  assert.equal(updates, 4);
});
