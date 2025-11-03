<template>
  <main class="content">
    <!-- Contact CTA Section -->
    <section class="contact-cta">
      <div class="support-form">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Fill out the form below and our team will get back to you
          soon.
        </p>

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

      <div class="contact-info">
        <h3>Get in Touch</h3>
        <p>You can call us, send us a letter or email using the form.</p>
        <p>📞 <strong>Phone:</strong> (03) 6271 3348</p>
        <p>🏠 <strong>Address:</strong> 691 Collins Street Melbourne</p>
      </div>
    </section>

    <!-- Info Cards Section -->
    <section class="cards">
      <div class="card">
        <img src="../images/phone.png" />
      </div>
      <div class="card">
        <img src="../images/email.png" />
      </div>
      <div class="card">
        <img src="../images/address.png" />
      </div>
    </section>
  </main>
</template>
