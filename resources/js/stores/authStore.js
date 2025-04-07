import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const authStore = defineStore('authStore', () => {
    const user = ref(null)
    const token = ref(null)
    const getUser = computed(() => user.value)
    const getToken = computed(() => token.value)
    const setUser = (u) => {
        user.value = u
    }
    const setToken = (t) => {
        token.value = t
    }

    return {user, token, getUser, getToken, setUser, setToken}
})
