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
    path: '/register',
    name: 'product',
    component: () => import('../pages/productRegister/Register.vue')
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../pages/productFind/ProductFind.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
