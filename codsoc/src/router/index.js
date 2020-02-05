import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/Main.vue')
  },
  {
    path: '/input-output/:id',
    name: 'inputoutput',
	component: () => import('@/components/InputOutput.vue')
  },
  {
	path: '/arrays',
	name: 'arrays',
	component: () => import('@/components/Arrays.vue')
  },
  /*{
	path: '/',
	name: '',
	component: () => import('@/components/')
  }*/

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
