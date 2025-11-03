<template>
  <main class="get-support-content">
    <div class="get-support-title">
      <h2>Need Support?</h2>
    </div>

    <div class="get-support-content-row">
      <!-- Left text -->
      <div class="get-support-content-left">
        <p>
          Don't worry, our team is here to help, simply fill out this form and one of our friendly
          staff members will be in touch.
        </p>
      </div>

      <!-- Middle form -->
      <div class="get-support-content-middle">
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
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>

      <!-- Right image -->
      <div class="get-support-content-right">
        <img src="../images/helping-hands.png" />
      </div>
    </div>
  </main>
</template>
