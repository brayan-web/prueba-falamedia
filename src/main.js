import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './sass/main.scss'
import './assets/icon-font.css'


// useVuelidate()
createApp(App)
.use(store)
.use(router)
.mount('#app')
