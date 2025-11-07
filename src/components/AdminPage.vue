<script setup>
import '../style/admin.css'
import users from '../data/users.js'
import jsPDF from 'jspdf'

function exportPDF() {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text('User Management List', 14, 20)
  doc.setFontSize(12)

  const tableColumn = ['ID', 'Username', 'Role']
  const tableRows = []

  users.forEach((user) => {
    const userData = [user.id, user.username, user.role]
    tableRows.push(userData)
  })

  let startY = 30
  doc.text(tableColumn.join(' | '), 14, startY)
  startY += 10
  tableRows.forEach((row) => {
    doc.text(row.join(' | '), 14, startY)
    startY += 10
  })

  doc.save('user-list.pdf')
}
</script>

<template>
  <main class="content admin-page">
    <div class="admin-content-box">
      <h2>User Management</h2>

      <p class="subtitle">
        Below is the list of all registered users and their access roles. The data can also be
        exported as a PDF.
      </p>
      <button class="export-button" @click="exportPDF">Export as PDF</button>

      <table class="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td class="role">{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
