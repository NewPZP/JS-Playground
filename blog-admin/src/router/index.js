import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: '登录',
        path: '/login',
        component: () => import('../views/Login.vue')

    },
    {
        name: '主页',
        path: '/home',
        component: () => import('../views/Framework.vue')

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

 