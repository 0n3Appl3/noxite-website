import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/RulesView.vue')
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesView.vue')
    },
  ]
})

export default router
