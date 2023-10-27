import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({ 
      mockPath: 'src/api/mock',
      localEnabled: true,
      watchFiles: true,
      logger: true
    })
  ],
  // server: {
  //   hmr: true,
  //viteMockServe
  //   open: true
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
