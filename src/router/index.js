import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home/Home.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../pages/checkout/Checkout.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../pages/products/CreateProduct.vue')
  },
  {
    path: '/crudProduct',
    name: 'crudProduct',
    component: () => import("../pages/products/CRUDProduct")
  },
  {
    path: '/products/:id',
    name: 'productsDetails',
    component: () => import('../pages/products/ListProductById.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
