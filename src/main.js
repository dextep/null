import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.scss";

const app = createApp(App);
app.use(router.router);
app.components = {
  ...require("./components.js").default,
};
app.mount("#app");
