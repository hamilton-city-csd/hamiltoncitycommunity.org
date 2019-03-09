import { Store } from "svelte/store";
import App from "App.html";
import firebase from "helpers/firebase";
import env from "env.js"

console.log("using", env.path, "environment.");

const store = new Store({
  siteTitle: "Hamilton City Community Service District",
  ready: false,
  areas: {},
});



const db = firebase.database();
const ref = db.ref(env.path);

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  const ready = true;

  // if firebase has data, update our store
  if (data) {
    let { siteTitle, areas } = data;
    store.set({siteTitle, areas, ready});
  }
  else {
    store.set({ ready });
  }
});


const app = new App({
  target: document.querySelector("main"),
  store, //store: store
});
window.store = store; // useful for debugging