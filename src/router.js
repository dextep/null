import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sandbox from "./Sandbox.vue";
import sandboxRouters from "@/sandbox";

const routes = [
  { path: "/", component: Home, title: 'Home' },
  { path: "/collections/new", component: Shop, title: 'Shop'  },
];

if (process.env.NODE_ENV == "development") {
  routes.push({
    path: "/sandbox",
    title: 'sandbox',
    component: Sandbox,
    children: sandboxRouters,
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {router, routes};
