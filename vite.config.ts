import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin()// 在开发和构建中进行代码规范校验，控制台和界面提示语法错误等
  ]
})
