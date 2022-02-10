import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index'),
        meta: {
            layout: 'AppLayoutIndex'
        }
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
