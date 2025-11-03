import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import GetSupportPage from '../components/GetSupportPage.vue'
import GiveSupportPage from '../components/GiveSupportPage.vue'
import CharityNewsPage from '../components/CharityNewsPage.vue'
import ContactUsPage from '../components/ContactUsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/get-support', component: GetSupportPage },
  { path: '/give-support', component: GiveSupportPage },
  { path: '/charity-news', component: CharityNewsPage },
  { path: '/contact', component: ContactUsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
