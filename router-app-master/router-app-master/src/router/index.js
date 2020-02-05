import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Coins from '@/components/Coins.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About')
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
