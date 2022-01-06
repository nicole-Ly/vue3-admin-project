import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '',
  component: RouterView,
  children: [
    {
      path: 'topic',
      name: 'topic',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/index.vue')
    },
    {
      path: 'topic/add',
      name: 'add',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/add.vue')
    },
    {
      path: 'topic/detail',
      name: 'detail',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/detail.vue')
    },
    {
      path: 'interactive',
      name: 'interactive',
      component: import(/* webpackChunkName: "interactive" */ '@/views/topic/interactiveManage/index.vue')
    }
  ]
}
export default routes
