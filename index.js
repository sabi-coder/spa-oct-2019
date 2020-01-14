// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `${Header(st)} ${Nav(
    state.Links
  )} ${Main(st)} ${Footer(st)}`;
  render();
}
//TODO: Listen for clicks on our menu and log what was clicked on.
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function() {
    event.preventDefault();
    render(state[capitalize(event.target.textContent)]);
  });
});
