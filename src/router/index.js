import { createRouter, createWebHistory } from 'vue-router'
import WeatherAppVue from '@/components/WeatherApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeatherAppVue
    },
  ]
})

export default router
