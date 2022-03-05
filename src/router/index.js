import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

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
    },
    {
        path: '/library',
        name: 'Library',
        component: () => import('@/views/Library'),
        meta: {
            layout: 'AppLayoutIndex',
            isAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.isAuth && !store.getters["user/isAuth"]) {
        store.dispatch('notification/createNotification', {
            text: 'You need to log in',
            error: true
        })
        return {name: 'Index'}
    }
})

export default router
