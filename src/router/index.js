import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import GetSupportPage from '../components/GetSupportPage.vue'
import GiveSupportPage from '../components/GiveSupportPage.vue'
import CharityNewsPage from '../components/CharityNewsPage.vue'
import ContactUsPage from '../components/ContactUsPage.vue'
import LoginPage from '../components/LoginPage.vue'
import LoginSuccessPage from '@/components/LoginSuccessPage.vue'
import MessageSuccessPage from '@/components/MessageSuccessPage.vue'
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage.vue'
import TermsAndConditionsPage from '@/components/TermsAndConditionsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/get-support', component: GetSupportPage },
  { path: '/give-support', component: GiveSupportPage },
  { path: '/charity-news', component: CharityNewsPage },
  { path: '/contact', component: ContactUsPage },
  { path: '/login', component: LoginPage },
  { path: '/login-success', component: LoginSuccessPage },
  { path: '/message-success', component: MessageSuccessPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/terms-and-conditions', component: TermsAndConditionsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
