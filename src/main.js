import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routing/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Tworzenie aplikacji i użycie routera
const app = createApp(App)
app.use(router)
app.mount('#app')
