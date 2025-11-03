<template>
  <!-- Call To Action -->
  <main class="content">
    <section class="cta">
      <div class="cta-text">
        <h2>Living on a low income doesn’t have to be so difficult</h2>
        <p>Apply for support today, our friendly staff are just a moment away!</p>
        <button>Apply Now!</button>
      </div>
      <div class="cta-img">
        <img src="../images/wallet.png" />
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
        <h3>Want to organize an event?</h3>
        <router-link to="/charity-news">
          <button>Events</button>
        </router-link>
      </div>
      <div class="card">
        <h3>Need to contact someone?</h3>
        <router-link to="/contact">
          <button>Contact</button>
        </router-link>
      </div>
    </section>
  </main>
</template>
