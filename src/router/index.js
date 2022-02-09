import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/auth',
        redirect: '/',
    },
    {
        path: '/auth/github',
        component: () => import('@/views/Auth')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
