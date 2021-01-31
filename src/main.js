import { createApp } from "vue";
import App from "./App.vue";
import Router from "@/router";
import "./assets/style.scss";
import "./base";

const app = createApp(App);
app.use(Router.router);
app.components = {
  ...require("./components.js").default,
};
app.mount("#app");
