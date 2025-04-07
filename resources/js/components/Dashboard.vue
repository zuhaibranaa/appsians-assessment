<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white p-5">
            <h2 class="text-2xl font-bold mb-6">Admin Pannel</h2>
            <nav>
                <ul>
                    <li class="mb-4">
                        <Link to="/dashboard" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
                    </li>
                    <li class="mb-4">
                        <Link to="/employees" class="block py-2 px-4 rounded hover:bg-gray-700">Employees</Link>
                    </li>
                    <li class="mb-4">
                        <Link to="/departments" class="block py-2 px-4 rounded hover:bg-gray-700">Departments</Link>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Top Navigation Bar -->
            <header class="bg-white shadow p-4 flex justify-between">
                <h2 class="text-xl font-semibold">{{ title }}</h2>
                <button @click="logout" class="bg-gray-800 text-white px-4 py-2 rounded">Logout</button>
            </header>

            <!-- Page Content -->
            <main class="p-6 flex-1 bg-white">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script setup>
import api from "../api.js";
import {RouterLink as Link, useRouter} from "vue-router";
import {useAuthStore} from "../stores/authStore.js";
defineProps({
    title: {
        type: String,
        default: "Dashboard"
    }
})

const authStore = useAuthStore();

const router = useRouter();
const logout = async () => {
    try {
        const response = await api.post("/logout", {},{
            headers: {
                Authorization: `Bearer ${authStore.token}`
            }
        });
        authStore.setUser(null);
        authStore.setToken(null);
        router.push("/");
    } catch (error) {
        alert("Logout failed");
    }
};
</script>

<style scoped>
</style>
