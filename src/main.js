// App and touer imports.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS imports.
import './style/base.css'
import './style/header.css'
import './style/footer.css'

// Create and mount app with router enabled.
createApp(App).use(router).mount('#app')
