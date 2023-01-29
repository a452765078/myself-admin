import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */'@/views/login/index')
  },
  {
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */'@/views/profile/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
