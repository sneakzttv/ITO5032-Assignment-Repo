<script setup>
import '../style/contact.css'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const file = ref(null)

function handleFile(e) {
  file.value = e.target.files[0]
}

async function handleSubmit() {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('email', form.value.email)
  formData.append('message', form.value.message)
  if (file.value) formData.append('file', file.value)

  await fetch('http://localhost:3000/send-email', {
    method: 'POST',
    body: formData,
  })

  alert('Message sent successfully!')
}
</script>

<template>
  <main class="content">
    <!-- Contact Section -->
    <section class="contact-cta">
      <div class="support-form">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Fill out the form below and our team will get back to you
          soon.
        </p>

        <form class="support-form" @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>

          <label for="file">Upload Image (optional)</label>
          <input type="file" id="file" @change="handleFile" accept="image/*" />

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
