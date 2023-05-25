import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import Deposit from "./views/Deposit.vue"
import TrasferAccount from "./views/TransferAccount.vue"
import Login from "./views/Login.vue"
const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/home/:loginId",
        component: Home,
        props:true
    },
    {
        path: "/about/:id/deposit",
        component: Deposit,
        props:true
    },
    {
        path: "/accounts/:id/transfer",
        component: TrasferAccount,
        props: true
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };