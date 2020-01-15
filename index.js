// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

// This is a node_module so we don't include './'
import capitalize from "lodash.capitalize";

// Function Constructor
import Navigo from "navigo";

import axios from "axios";

const router = new Navigo(location.origin);

/**
 * @param {Object} st - A piece of state
 */
function render(st = state.Home) {
  // Query the document using a CSS selector
  document.querySelector("#root").innerHTML =
    // INVOKE each FUNCTIONAL COMPONENT passing in a piece of state each time.
    `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer(st)}
    `;

  router.updatePageLinks();
}

router
  // 'on' is navigo's way of handling a specific type of event
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  // Resolve is required for all navigo methods.
  .resolve();

// Axios simplifies the 'fetch' process
axios
  // We GET from a RESTful
  .get("https://jsonplaceholder.typicode.com/posts")
  // then grab the results and convert to JSON
  .then(results => {
    state.Blog.posts = results.data;

    // Slice off the slash from 'url'
    // Capitalize the result
    // If it is 'Blog', then render the new posts
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Blog") {
      render(state.Blog);
    }
  }) // Include a catch for basic error handling when working with
  .catch(error => console.error(error));

  db.collection("pics")
  .get()
  .then(querySnapshot =>
    querySnapshot.forEach(function(pic => state.Gallery.pics.push(pic.data()))
    ));
