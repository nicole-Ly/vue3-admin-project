import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import elementPlus from './plugins/element-plus'

import './styles/index.scss'
createApp(App)
  .use(router)
  .use(elementPlus)
  .mount('#app')
