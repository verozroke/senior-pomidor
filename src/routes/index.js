import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    { path: '/pomodoro-timer-vue/', name: 'Home', component: () => import('../views/HomePage.vue')},
    { path: '/pomodoro-timer-vue/fgewjr123dfhje', name: 'Pomodoro', component: () => import('../views/PomodoroTimer.vue') },
]
// sfgsdf

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
