import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 配置服务器的代理设置
  server: {
    open: true, //启动后是否自动打开浏览器
    port: 8080,
    // 代理配置，用于重定向请求到其他服务器
    proxy: {
      // 定义一个代理规则，将/hello-world路径下的请求代理到指定的目标服务器
      '/Bew': {
        // 目标服务器的地址
        target: 'https://api.bilibili.com',
        // 更改请求的origin为代理服务器的origin，以便与目标服务器交互
        changeOrigin: true,
        // 重写请求路径，移除/hello-world前缀
        rewrite: path => path.replace('/Bew', ''),
      },
      '/search': {
        // 目标服务器的地址
        target: 'https://s.search.bilibili.com',
        // 更改请求的origin为代理服务器的origin，以便与目标服务器交互
        changeOrigin: true,
        // 重写请求路径，移除/hello-world前缀
        rewrite: path => path.replace('/search', ''),
      },
    },
  },
})
