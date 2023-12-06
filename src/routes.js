import { createRouter, createWebHistory } from "vue-router";
import TechAccount from "./views/TechAccount.vue"
import Login from "./views/Login.vue"
import TechHome from "./views/TechHome.vue"
const routes = [
    {
        path: "/",
        component: TechHome
    },
    {
        path: "/login",
        component: Login,
        props:true
    },
    {
        path: "/account",
        component: TechAccount,
        props:true
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };