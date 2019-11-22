import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/Home.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/checkout/Checkout.vue")
  },
  {
    path: "/product",
    name: "productform",
    component: () => import("../pages/productForm/ProductForm.vue")
  },
  {
    path: "/product/:id",
    name: "productinfo",
    component: () => import("../pages/productInfo/ProductInfo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
