import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import GetSupportPage from '../components/GetSupportPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/get-support', component: GetSupportPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
