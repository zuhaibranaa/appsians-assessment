import {createRouter, createWebHistory} from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import {authStore} from "../stores/authStore.js";
const auth = authStore()
const routes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/dashboard', component: Dashboard, meta: {requiresAuth: true}},
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});
index.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !auth.isLoggedIn()) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})

export default index;
