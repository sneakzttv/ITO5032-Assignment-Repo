<script setup>
// Loading CSS.
import '../style/charity-news.css'
</script>

<template>
  <main class="content">
    <!-- Charity News Section -->
    <section class="charity-news-box">
      <h2>Charity News</h2>
      <div class="charity-news-cards">
        <div class="news-card">
          <h3>Food Drive Success!</h3>
          <p>
            Last weekend, MaxPower hosted its annual food drive, collecting over 2,000 kg of food
            for local families in need. A huge thank you to all volunteers and donors who made this
            possible. Together, we’re helping our community stay nourished and supported.
          </p>
        </div>

        <div class="news-card">
          <h3>Sport Kick Fundraiser</h3>
          <p>
            Our recent “Sport Kick” fundraiser raised $15,000 for youth sports programs in
            underprivileged areas. The event featured friendly matches, workshops, and community
            engagement activities, bringing people together for a common cause.
          </p>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="upcoming-events">
      <div class="events-card">
        <h2>Upcoming Events</h2>
        <div class="events-card-images">
          <img src="../images/food-drive.png" alt="Food Drive" />
          <img src="../images/back-to-school.png" alt="Back To School" />
          <img src="../images/sport-kick.png" alt="Sport Kick" />
        </div>
        <h3>Helping Hands Reach 1,000 Families</h3>
        <p>
          Our volunteers worked tirelessly to provide food and support to over 1,000 families this
          month.
        </p>
      </div>
    </section>
  </main>
</template>
