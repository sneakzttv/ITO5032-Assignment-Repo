<script setup>
import '../style/give-support.css'
</script>

<template>
  <main class="give-support-content">
    <div class="give-support-title">
      <h2>Ready to give support?</h2>
      <p>
        If you’re ready to help out, please send in your details and we’ll have one of our friendly
        staff members call you asap.
      </p>
    </div>

    <div class="give-support-content-row">
      <!-- Left image -->
      <div class="give-support-content-left">
        <img src="../images/teamwork.png" />
      </div>

      <!-- Right form -->
      <div class="give-support-content-right">
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
