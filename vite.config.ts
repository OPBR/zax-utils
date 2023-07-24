/*
 * @Author: zhangy
 * @Date: 2023-07-24 10:34:18
 */
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  build: {
    outDir: 'dist', // 自定义构建输出目录
    target: 'es2020',
    lib: {
      entry: 'src/main.ts', // 入口文件路径
      formats: ['es', 'cjs']
    }
  },
  server: {
    port: 8080 // 自定义开发服务器端口
  }
})
