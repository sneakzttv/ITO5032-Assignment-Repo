<template>
  <main class="content">
    <section class="login-box">
      <div class="login-row">
        <!-- Login Form -->
        <div class="login-form">
          <h2>Member Login</h2>
          <p>Please enter your login details</p>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <router-link to="/login-success">
              <button type="submit">Login</button>
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
