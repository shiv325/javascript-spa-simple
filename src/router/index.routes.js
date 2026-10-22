import { pages } from "../controllers/index";
import { resolveRoute } from "./resolve-route.mjs";

const router = async (route) => {
  const content = document.getElementById("root");
  content.innerHTML = "";

  const page = resolveRoute(route);
  const pageContent =
    page === "posts" ? await pages[page]() : pages[page]();

  return content.appendChild(pageContent);
};

export { router };
