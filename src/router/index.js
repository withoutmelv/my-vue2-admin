import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

Vue.use(VueRouter)

export const routes = [
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
        meta: { title: '首页', icon: 'el-icon-s-home', needCache: true, fixed: true},
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'Error',
    hidden: true,
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export function resetRouter() {
  const newRouter = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes: routes
  })
  router.matcher = newRouter.matcher
}

router.beforeEach((to, from, next) => {
  const whiteList = ['Login', 'NotFund']

  if (!store.getters.userInfo.userId && whiteList.indexOf(to.name) === -1) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
