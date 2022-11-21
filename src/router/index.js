import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home';
import Search from '@/views/Search';
import Detail from '@/views/Detail';
import Cart from '@/views/Cart';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search
  },
  {
    path: '/detail/:productId?',
    name: 'detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
