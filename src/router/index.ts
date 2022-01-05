import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import topicRouter from './modules/topic'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      topicRouter
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: import(/* webpackChunkName: "home" */ '@/views/login/LoginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
