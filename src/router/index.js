import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/profile/index')
      },
      {
        path: '/chart',
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/chart/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
