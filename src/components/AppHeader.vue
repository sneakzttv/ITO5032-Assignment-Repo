<!-- Reusable header code for organization -->
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
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
