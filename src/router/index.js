import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Products",
        component: () => import(/* webpackChunkName: "Products" */ "../pages/Products.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "About" */ "../pages/About.vue"),
    },
    {
        path: "/internship",
        name: "Internship",
        component: () =>
            import(/* webpackChunkName: "Internship" */ "../pages/Internship.vue"),
    },
    {
        path: "/policy",
        name: "Policy",
        component: () => import(/* webpackChunkName: "Policy" */ "../pages/Policy.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
