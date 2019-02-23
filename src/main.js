import { Store } from "svelte/store";
import App from "App.html"

const store = new Store({
  name: "Hamilton City Community Service District"
});

const app = new App({
  target: document.querySelector("main"),
  store, //store: store
});
window.store = store; // useful for debugging