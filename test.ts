import assert from "node:assert";

import test from "node:test";

test("lib", () => {
  const x: number = 3;
  assert.strictEqual(1 + 1, 2);
});

test("not equal", () => {
  assert.notStrictEqual(1 + 2, 3);
});
