import assert from "node:assert/strict";
import { test } from "node:test";
import { wireHomeButton } from "../src/controllers/home-button.mjs";

const createHomeButton = () => {
  const state = { selector: null, eventName: null, clickHandler: null };
  const button = {
    addEventListener(eventName, handler) {
      state.eventName = eventName;
      state.clickHandler = handler;
    },
  };
  const container = {
    querySelector(selector) {
      state.selector = selector;
      return button;
    },
  };

  return { container, state };
};

test("wires the home button click event", () => {
  const { container, state } = createHomeButton();

  wireHomeButton(container, () => {});

  assert.equal(state.selector, "#btnClick");
  assert.equal(state.eventName, "click");
  assert.equal(typeof state.clickHandler, "function");
});

test("clicking the home button displays the clicked alert", () => {
  const { container, state } = createHomeButton();
  const alerts = [];

  wireHomeButton(container, (message) => alerts.push(message));
  state.clickHandler();

  assert.deepEqual(alerts, ["clicked"]);
});
