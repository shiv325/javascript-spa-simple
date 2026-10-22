import assert from "node:assert/strict";
import { test } from "node:test";

test("intentional CI failure", () => {
  assert.fail("Intentional failure for CI testing");
});
