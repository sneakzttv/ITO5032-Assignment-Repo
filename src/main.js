import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import global css rules
import './style/main.css'

// Create and mount app with router enabled
createApp(App).use(router).mount('#app')
