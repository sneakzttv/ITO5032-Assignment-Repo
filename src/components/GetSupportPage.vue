<script setup>
import '../style/get-support.css'
</script>

<template>
  <main class="get-support-content">
    <div class="get-support-title">
      <h2>Need Support?</h2>
      <p>We're here to guide you through the process and answer your questions.</p>
    </div>

    <div class="get-support-content-row">
      <div class="get-support-left-box">
        <p>
          Don't worry, our team is here to help simply fill out this form and one of our friendly
          staff members will be in touch.
        </p>
        <img src="../images/helping-hands.png" alt="Helping Hands" />
      </div>

      <!-- Right form -->
      <div class="get-support-content-right">
        <form class="support-form">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <router-link to="/message-success">
            <button type="submit" class="btn">Submit</button>
          </router-link>
        </form>
      </div>
    </div>
  </main>
</template>
