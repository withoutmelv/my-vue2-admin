import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/404',
    name: 'NotFund',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/views/Error/404.vue'),
  }
]

export const permissionRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const whiteList = ['Login', 'NotFund']

  if (!store.getters.userInfo.userId && whiteList.indexOf(to.name) === -1) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
