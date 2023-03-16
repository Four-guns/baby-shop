import { createApp } from 'vue'
import '@/styles/reset.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/router/router-guard'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

