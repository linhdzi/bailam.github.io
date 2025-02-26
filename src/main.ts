import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import router
import './style.css'

const app = createApp(App)
app.use(router) // Sử dụng Vue Router
app.mount('#app')
