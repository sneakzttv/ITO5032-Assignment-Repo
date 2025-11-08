<!-- Reusable header code for organization -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Checks if a user is logged in.
const router = useRouter()
const username = ref(null)

// Initialize username from localStorage.
onMounted(() => {
  username.value = localStorage.getItem('username')
})

// Logout function.
function logout() {
  // Removes username and role from local storage to prevent clashes.
  localStorage.removeItem('username')
  localStorage.removeItem('role')
  username.value = null
  // Goes to homepage.
  router.push('/')
}
</script>

<template>
  <header class="header">
    <div class="top-bar">
      <h1>💸MaxPower💸</h1>
      <p>🏠691 Collins Street Melbourne 📞(03) 6271 3348</p>
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/get-support">Get Support</router-link>
      <router-link to="/give-support">Give Support</router-link>
      <router-link to="/charity-news">Charity News</router-link>
      <router-link to="/rate">Rate Staff</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <!-- Show Login or Log Out based on isLoggedIn -->
      <router-link v-if="!username" to="/login">Login</router-link>
      <span v-else @click="logout" style="cursor: pointer; font-weight: bold"> Log Out </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
