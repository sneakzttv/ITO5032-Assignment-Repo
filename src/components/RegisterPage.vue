<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import usersData from '../data/users.js'

const router = useRouter()

// Loads users.
const users = ref([])

onMounted(() => {
  const savedUsers = localStorage.getItem('users')
  users.value = savedUsers ? JSON.parse(savedUsers) : usersData
})

// Resets form inputs.
const newUser = reactive({
  username: '',
  password: '',
})

// Register logic.
function handleRegister(e) {
  e.preventDefault()

  if (!newUser.username.trim() || !newUser.password.trim()) {
    alert('Please enter a username and password.')
    return
  }

  // Check if a username is already taken.
  if (users.value.some((u) => u.username === newUser.username)) {
    alert('That username is already taken.')
    return
  }

  // Adds a new user.
  const newEntry = {
    id: users.value.length + 1,
    username: newUser.username,
    password: newUser.password,
  }

  users.value.push(newEntry)

  // Save to localStorage so it persists.
  localStorage.setItem('users', JSON.stringify(users.value))

  alert('Account created successfully!')
  // Redirect back to login page for good UX.
  router.push('/login')
}
</script>

<template>
  <main class="content">
    <section class="login-box">
      <div class="login-row">
        <div class="login-form">
          <h2>Create Account</h2>
          <p>Please enter your details</p>

          <form @submit="handleRegister">
            <input
              v-model="newUser.username"
              type="text"
              placeholder="Choose a username"
              required
              minlength="3"
            />

            <input
              v-model="newUser.password"
              type="password"
              placeholder="Choose a password"
              required
              minlength="6"
            />

            <button type="submit">Register</button>
            <router-link to="/login">
              <button class="link-button">Go Back</button>
            </router-link>
          </form>
        </div>

        <div class="login-image">
          <img src="../images/login.png" alt="Register" />
        </div>
      </div>
    </section>
  </main>
</template>
