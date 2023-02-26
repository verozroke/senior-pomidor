import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    { path: '/', name: 'Home', component: () => import('../views/HomePage.vue')},
    { path: '/fgewjr123dfhje', name: 'Pomodoro', component: () => import('../views/PomodoroTimer.vue') },
]
// sfgsdf

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
