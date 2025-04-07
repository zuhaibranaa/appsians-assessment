import {createRouter, createWebHistory} from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
const routes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/dashboard', component: Dashboard, meta: {requiresAuth: true}},
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});
// index.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !authStore.getToken) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         return {
//             path: '/',
//             // save the location we were at to come back later
//             query: { redirect: to.fullPath },
//         }
//     }
// })

export default index;
