import { defineStore } from "pinia";
import api from "../api.js";
import { useAuthStore } from "./authStore.js";

export const useDepartmentStore = defineStore("departmentStore", {
    state: () => ({
        departments: []
    }),
    actions: {
        async fetchDepartments() {
            const authStore = useAuthStore();
            const response = await api.get("/departments", {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.departments = response.data.departments;
        },

        async addDepartment(department) {
            const authStore = useAuthStore();
            const response = await api.post("/departments", department, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.departments.push(response.data.department);
        },

        async updateDepartment(department) {
            const authStore = useAuthStore();
            const response = await api.put(`/departments/${department.id}`, department, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            const index = this.departments.findIndex(dep => dep.id === department.id);
            this.departments[index] = response.data.department;
        },

        async deleteDepartment(departmentId) {
            const authStore = useAuthStore();
            await api.delete(`/departments/${departmentId}`, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.departments = this.departments.filter(dep => dep.id !== departmentId);
        }
    },
    persist: {
        storage: sessionStorage,
        paths: ["departments"]
    }
});
