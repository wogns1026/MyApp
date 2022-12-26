import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/MainPage')
    },
    {
        path: '/todolist',
        name: 'TO DO LIST',
        component: () => import('../views/ToDoList')
    },
    {
        path: '/financial-ledger',
        name: 'Financial Ledger',
        component: () => import('../views/FinancialLedger')
    },
    {
        path: '/lotto',
        name: 'Lotto',
        component: () => import('../views/Lotto')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router