import App from "./App.js";
import { handleSubmit } from "./postRenderJs.js";

const render = (AppElement) => {
  const headElement = document.getElementById("head");
  const rootElement = document.getElementById("root");

  const workers = document.createElement("script");
  workers.innerHTML = handleSubmit.toString();

  headElement.appendChild(workers);

  rootElement.innerHTML = AppElement;
};

render(App);
