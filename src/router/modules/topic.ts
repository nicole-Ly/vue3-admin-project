import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '',
  component: RouterView,
  children: [
    {
      path: 'topic',
      name: 'topic',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/TopicIndex.vue')
    },
    {
      path: 'topic/add',
      name: 'add',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/TopicAdd.vue')
    },
    {
      path: 'topic/detail',
      name: 'detail',
      component: import(/* webpackChunkName: "topic" */ '@/views/topic/topicManage/TopicDetail.vue')
    },
    {
      path: 'interactive',
      name: 'interactive',
      component: import(/* webpackChunkName: "interactive" */ '@/views/topic/interactiveManage/InteractiveIndex.vue')
    }
  ]
}
export default routes
