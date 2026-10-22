import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveRoute } from "../src/router/resolve-route.mjs";

test("resolves the home hash route", () => {
  assert.equal(resolveRoute("#/"), "home");
});

test("resolves the posts hash route", () => {
  assert.equal(resolveRoute("#/posts"), "posts");
});

test("resolves unknown routes to the not-found page", () => {
  assert.equal(resolveRoute("#/missing"), "notFound");
});
