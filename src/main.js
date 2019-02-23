import Store from "svelte/store";
import App from "App.html"

const store = new Store({
  name: "main app"
});

const app = new App({
  target: document.querySelector("main"),
  store, //store: store
});
