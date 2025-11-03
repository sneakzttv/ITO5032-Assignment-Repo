import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import GetSupportPage from '../components/GetSupportPage.vue'
import GiveSupportPage from '../components/GiveSupportPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/get-support', component: GetSupportPage },
  { path: '/give-support', component: GiveSupportPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
