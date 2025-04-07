<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Register to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @click.prevent class="space-y-6" action="#" method="POST">
                <div>
                    <label for="name" class="block text-sm/6 font-medium text-gray-900">Your Name</label>
                    <div class="mt-2">
                        <input v-model="name" type="text" name="name" id="name" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input v-model="email" type="email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <button @click="register" type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Already a member?
                {{ ' ' }}
                <Link to="/" class="font-semibold text-indigo-600 hover:text-indigo-500">Login</Link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../api"; // We'll create this next
import { useRouter, RouterLink as Link } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const name = ref("");
const role = ref("employee");

const register = async () => {
    try {
        const response = await api.post("/register", { name: name.value, role: role.value, email: email.value, password: password.value });
        localStorage.setItem("token", response.data.token);
        router.push("/");
    } catch (error) {
        alert("Login failed");
    }
};
</script>
