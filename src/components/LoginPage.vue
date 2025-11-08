<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// Loading CSS.
import '../style/login.css'
// Loading user data.
import users from '../data/users.js'

const router = useRouter()

// Clears previous input data.
const form = reactive({
  username: '',
  password: '',
})

// Clears previous input data.
const errors = reactive({
  username: '',
  password: '',
  login: '',
})

// Validation checks.
function validateClient() {
  let valid = true
  errors.username = ''
  errors.password = ''

  const usernameRegex = /^[a-zA-Z0-9_]+$/
  if (!usernameRegex.test(form.username)) {
    errors.username = 'Username can only contain letters, numbers, and underscores.'
    valid = false
  }

  if (!/\d/.test(form.password)) {
    errors.password = 'Password must include at least one number.'
    valid = false
  }

  return valid
}

// Stops standard form send function so we can process the data.
function handleSubmit(e) {
  e.preventDefault()

  // Allows use of browser error handling pop ups so we don't have to code it.
  const formEl = e.target
  if (!formEl.checkValidity()) {
    formEl.reportValidity()
    return
  }

  if (!validateClient()) return

  // Check user credentials.
  const user = users.find((u) => u.username === form.username && u.password === form.password)

  if (!user) {
    errors.login = 'Incorrect username or password.'
    return
  }

  // Store login session so it can be used for rating and access.
  localStorage.setItem('username', user.username)
  localStorage.setItem('role', user.role)

  // Redirect based on role.
  if (user.role === 'admin') {
    router.push('/admin')
  } else {
    router.push('/login-success')
  }
}
</script>

<template>
  <main class="content">
    <section class="login-box">
      <div class="login-row">
        <!-- Login Form -->
        <div class="login-form">
          <h2>Member Login</h2>
          <p>Please enter your login details</p>

          <form @submit="handleSubmit" novalidate>
            <!-- HTML5 validation -->
            <input
              v-model="form.username"
              type="text"
              placeholder="Username"
              required
              minlength="3"
              pattern="^[a-zA-Z0-9_]+$"
              :class="{ 'input-error': errors.username }"
            />
            <p v-if="errors.username" class="error-text">{{ errors.username }}</p>

            <!-- HTML5 validation -->
            <input
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
              minlength="6"
              :class="{ 'input-error': errors.password }"
            />

            <p v-if="errors.password" class="error-text">{{ errors.password }}</p>
            <p v-if="errors.login" class="error-text">{{ errors.login }}</p>

            <button type="submit">Proceed</button>
            <router-link to="/register">
              <button type="button">Register</button>
            </router-link>
          </form>
        </div>

        <!-- Login Image -->
        <div class="login-image">
          <img src="../images/login.png" alt="Login" />
        </div>
      </div>
    </section>
  </main>
</template>
