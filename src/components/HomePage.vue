<script setup>
// Loading CSS.
import '../style/home.css'
</script>

<template>
  <!-- Call To Action -->
  <main class="content">
    <section class="cta">
      <div class="cta-text">
        <h2>Living on a low income doesn’t have to be so difficult</h2>
        <p>Apply for support today, our friendly staff are just a moment away!</p>
        <router-link to="/get-support">
          <button>Apply Now!</button>
        </router-link>
      </div>
      <div class="cta-img">
        <img src="/images/wallet.png" />
      </div>
    </section>

    <!-- Info Cards -->
    <section class="cards">
      <div class="card">
        <h3>Interested in becoming a donor?</h3>
        <router-link to="/give-support">
          <button>Donate</button>
        </router-link>
      </div>
      <div class="card">
        <h3>Would you like to organize an event?</h3>
        <router-link to="/charity-news">
          <button>Events</button>
        </router-link>
      </div>
      <div class="card">
        <h3>Need to contact someone at the charity?</h3>
        <router-link to="/contact">
          <button>Contact</button>
        </router-link>
      </div>
    </section>
  </main>
</template>
