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
    path: '/product',
    name: 'product',
    component: () => import('../pages/product/ProductAdd.vue')
  },
  {
    path: '/product-info/:id',
    name: 'product-info',
    component: () => import('../pages/product/ProductInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
