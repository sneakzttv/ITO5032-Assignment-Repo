<script setup>
// Loading CSS.
import '../style/rating.css'
import { ref } from 'vue'
// Loading ratings data.
import { ratings } from '../data/ratings.js'
// Loading staff data.
import { staffList } from '../data/staff.js'

const loggedInUser = localStorage.getItem('username')

// Hold temporary selected rating per staff card.
const selectedRatings = ref({})

// Submit rating for a specific staff member.
function submitRating(staffId) {
  if (!loggedInUser) {
    alert('You must be logged in to rate.')
    return
  }

  // Set rating value.
  const ratingValue = selectedRatings.value[staffId]
  if (!ratingValue) return

  // Check if user already rated this staff member.
  const existing = ratings.find((r) => r.user === loggedInUser && r.staffId === staffId)

  if (existing) {
    existing.stars = ratingValue
  } else {
    ratings.push({ staffId, user: loggedInUser, stars: ratingValue })
  }
  // Alert pop up to thanks the user.
  alert('Thanks for your feedback!')
}

// Calculate average rating for each staff member.
function getAverage(staffId) {
  const staffRatings = ratings.filter((r) => r.staffId === staffId)
  if (staffRatings.length === 0) return 'No ratings yet'
  const avg = staffRatings.reduce((sum, r) => sum + r.stars, 0) / staffRatings.length
  return avg.toFixed(1) + ' ⭐'
}
</script>

<template>
  <main class="content rating-page">
    <div class="staff-container">
      <h2>Rate Our Staff</h2>
      <div class="staff-list">
        <div class="staff-card" v-for="staff in staffList" :key="staff.id">
          <img :src="staff.image" class="staff-photo" />
          <h3>{{ staff.name }}</h3>
          <p class="role">{{ staff.role }}</p>
          <p class="description">{{ staff.description }}</p>
          <p class="staff-average">Average Rating: {{ getAverage(staff.id) }}</p>

          <div v-if="loggedInUser">
            <div class="star-select">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ active: star <= (selectedRatings[staff.id] || 0) }"
                @click="selectedRatings[staff.id] = star"
              >
                ★
              </span>
            </div>
            <button class="submit-button" @click="submitRating(staff.id)">Submit Rating</button>
          </div>
          <div v-else>
            <p class="login-warning">Log in to rate this staff member.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
