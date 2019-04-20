import "helpers/firebase-init";

import { Store } from "svelte/store";
import App from "App.html";
import firebase from "helpers/firebase";
import { name } from ".env.json"

console.log(`using ${name} environment.`);

const store = new Store({
  siteTitle: "Hamilton City Community Service District",
  ready: false,
  areas: {},
  defaultAreaName: null,
  navigation: [],
});



const db = firebase.database();
const ref = db.ref("/");

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log("data updated:", data);
  const ready = true;

  // if firebase has data, update our store
  if (data) {
    let { siteTitle, areas, defaultAreaName, navigation } = data;
    store.set({siteTitle, areas, defaultAreaName, ready, navigation});
  }
  else {
    store.set({ ready });
  }
}, err => console.error(err));


const app = new App({
  target: document.querySelector("main"),
  store, //store: store
});

window.store = store; // useful for debugging