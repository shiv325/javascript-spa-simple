import view from "../view/home.html";
import { wireHomeButton } from "./home-button.mjs";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  wireHomeButton(divElement, alert);

  return divElement;
};
