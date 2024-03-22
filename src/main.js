import App from "./App.js";

console.log("hello world!");

const render = (AppElement) => {
  const rootElement = document.getElementById("root");

  rootElement.innerHTML = AppElement;
};

render(App);
