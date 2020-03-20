import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import ShopCart from '@/pages/shopcart/shopcart'
import Index from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    }
  ],
  scrollBehavior (to, from, savedposition) {
    return { x: 0, y: 0 }
  }
})
