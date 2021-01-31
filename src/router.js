import { createRouter, createWebHistory } from "vue-router";
import Admin from "./pages/Admin.vue";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sandbox from "./pages/Sandbox.vue";
import NotFound from "./pages/NotFound.vue";
import sandboxRouters from "@/sandbox";

const mainRoutes = [
  { path: "/", component: Home, title: "Home" },
  { path: "/collections/new", component: Shop, title: "Shop" },
  { path: "/archive", component: Shop, title: "Archive" },
  { path: "/info", component: Shop, title: "Information" },
  { path: "/good", component: Shop, title: "Good Life" },
  { path: "/mood", component: Shop, title: "Mood" },
];
const subRoutes = [
  { path: "/news", component: Home, title: "Newsletter" },
  { path: "/login", component: Shop, title: "Login" },
  { path: "/card", component: Shop, title: "Card" },
];

const routes = [];

routes.push({
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound,
});

if (process.env.NODE_ENV == "development") {
  routes.push({
    path: "/sandbox",
    title: "sandbox",
    component: Sandbox,
    children: sandboxRouters,
  });
  routes.push({
    path: "/admin",
    title: "admin",
    component: Admin,
  });
}

mainRoutes.forEach((e) => {
  routes.push(e);
});
subRoutes.forEach((e) => {
  routes.push(e);
});
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default { router, routes: { mainRoutes, subRoutes } };
