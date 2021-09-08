import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import "./assets/styles/main.css";
import i18n from './i18n';

createApp(App).use(router).use(i18n).mount('#app')

