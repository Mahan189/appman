import { createApp } from 'vue'
import App from './App.vue'
import router from "./assets/router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const app=createApp(App)
app.use(router)
app.mount('#app')
