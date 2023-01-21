import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
  routes
})

export default router
