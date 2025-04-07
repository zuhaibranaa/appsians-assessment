import { createApp } from 'vue';
import { createPinia } from 'pinia';
import index from './router'; // We'll create this next
import App from './App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia);
app.use(index);
app.mount('#app');
