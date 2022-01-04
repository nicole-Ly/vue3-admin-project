import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons-vue'

export default {
  install (app: App) {
    // element-plus 图标
    let k: keyof typeof icons
    for (k in icons) {
      app.component(k, icons[k])
    }

    // element-plus 组件
    app.use(ElementPlus, { size: 'small', zIndex: 2000 })
  }
}
