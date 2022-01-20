import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/Dashboard.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../components/Vuemodal.vue')
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('../components/Layout.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/Testdata.vue')
  },
  {
    path: '/loader',
    name: 'loader',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../components/Table.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
