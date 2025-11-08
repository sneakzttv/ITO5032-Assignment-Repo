<!-- Uniform page layout, header -> content via router -> footer -->
<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
// Enuring header and footer is with each page.
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter },
}
</script>
