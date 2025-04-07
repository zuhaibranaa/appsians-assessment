import { createApp } from 'vue';
import { createPinia } from 'pinia';
import index from './router'; // We'll create this next
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(index);
app.mount('#app');
