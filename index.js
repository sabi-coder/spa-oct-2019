// Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

const state = {
  Home: {
    heading: "Home"
  },
  Form: {
    heading: "Form"
  },
  Blog: {
    heading: "Blog"
  },
  Gallery: {
    heading: "Gallery"
  }
  Links: ["Home", "Blog", "Gallery", "Contact"]
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
}

render();
// TODO: Listen for clicks on our menu and log what was clicked on.
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function() {
    event.preventDefault();
    console.log(event.target.textContent);

    // TODO: Use this information and log out the correct piece of state.
    let navText = event.target.textContent;
    render(state[capitalize(navText)]);
  });
});
