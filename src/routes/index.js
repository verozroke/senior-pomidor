import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    { path: '/senior-pomidor/', name: 'Home', component: () => import('../views/HomePage.vue')},
    { path: '/senior-pomidor/fgewjr123dfhje', name: 'Pomodoro', component: () => import('../views/PomodoroTimer.vue') },
]
// sfgsdf

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
