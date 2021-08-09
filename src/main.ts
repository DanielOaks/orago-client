import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

export const app = createApp(App)

app.use(router).mount('#app')
