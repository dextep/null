import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

const routes = [
    {path:'/', component: Home},
    {path:'/collections/new', component: Shop},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;