// style
require("!style!css!sass!./scss/style.scss");
// modules
import {WakandaClient} from 'wakanda-client';
import App from './app/index.jsx';
// variables
const client = new WakandaClient();
var app = window.app = {};

document.addEventListener("DOMContentLoaded", event => {
  client.getCatalog().then(ds => {
    app = new App({
      containerId: "content",
      catalog: ds 
    });
    app.init();
  }).catch(err => {
    console.warn(err);
  });
});