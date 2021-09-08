import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Store from "@/pages/Store.vue";
import Contact from "@/pages/Contact.vue";
import Product from "@/pages/Product.vue";
import CartPage from "@/pages/Cart.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/store",
        name: "Store",
        component: Store,
    },
    {
        path: "/product/:productId",
        name: "Product",
        component: Product,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/cart",
        name: "CartPage",
        component: CartPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
});

export default router;

