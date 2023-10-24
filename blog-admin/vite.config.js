import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   hmr: true,
  //   port: 3001,
  //   open: true
  // },
  mockServer: ({
    logLevel: 'info',
    middlewares: [
      cookieParser(),
      bodyParser.json(),
      bodyParser.urlencoded(),
      bodyParser.text(),
      bodyParser.raw()
    ]
  }),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
