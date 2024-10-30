import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import './assets/base.css'

// step1：引入 axios
import Axios from 'axios'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// step3：使每次请求都会带一个 /Bew 前缀
// Axios.defaults.baseURL = '/Bew'
