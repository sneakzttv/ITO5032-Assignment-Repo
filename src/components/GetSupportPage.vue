<script setup>
import { ref, computed } from 'vue'
import '../style/get-support.css'
import { charities as charityData } from '../data/charities.js'

// Search functionality.
const charities = ref([...charityData])
const searchQuery = ref('')
const sortOrder = ref('asc')
const currentPage = ref(1)
const itemsPerPage = 10

// Sorts through and computes results.
const filteredCharities = computed(() => {
  // Start with all charities otherwise errors are thrown.
  let result = charities.value
  // Filter by search query i.e name.
  result = result.filter((item) => {
    const nameLower = item.name.toLowerCase()
    const queryLower = searchQuery.value.toLowerCase()
    return nameLower.includes(queryLower)
  })

  // Sort by name ascending or descending.
  result.sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })
  // Returns filtered results.
  return result
})

// Pagination.
const totalPages = computed(() => Math.ceil(filteredCharities.value.length / itemsPerPage))

const paginatedCharities = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredCharities.value.slice(start, start + itemsPerPage)
})

function changePage(page) {
  currentPage.value = page
}
</script>

<template>
  <main class="get-support-content">
    <div class="get-support-title">
      <h2>Need Support?</h2>
      <p>We're here to guide you through the process and answer your questions.</p>
    </div>
    <!-- Support Form Section -->
    <div class="get-support-content-row">
      <div class="get-support-left-box">
        <p>
          Don't worry, our team is here to help simply fill out this form and one of our friendly
          staff members will be in touch.
        </p>
        <img src="../images/helping-hands.png" alt="Helping Hands" />
      </div>

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

    <!-- Charity Table Section -->
    <div class="charity-table-section">
      <h2>Supported Charities</h2>
      <p>
        The charities listed below also offer great services if we are too far away. <br />
        We believe that everyone should have access to help when they need it.
      </p>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search charities..."
        class="search-input"
      />

      <table class="charity-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Category</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="charity in paginatedCharities" :key="charity.name">
            <td>{{ charity.name }}</td>
            <td>{{ charity.location }}</td>
            <td>{{ charity.category }}</td>
            <td>{{ charity.website }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button
          class="charity-table-button"
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </main>
</template>
