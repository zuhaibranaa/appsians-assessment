import { defineStore } from "pinia";
import api from "../api.js";
import { useAuthStore } from "./authStore.js";

export const useEmployeeStore = defineStore("employeeStore", {
    state: () => ({
        employees: []
    }),
    actions: {
        async fetchEmployees() {
            const authStore = useAuthStore();
            const response = await api.get("/employees", {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.employees = response.data.employees;
        },

        async addEmployee(employee) {
            const authStore = useAuthStore();
            const response = await api.post("/employees", employee, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.employees.push(response.data.employee);
        },

        async updateEmployee(employee) {
            const authStore = useAuthStore();
            const response = await api.put(`/employees/${employee.id}`, employee, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            const index = this.employees.findIndex(emp => emp.id === employee.id);
            this.employees[index] = response.data.employee;
        },

        async deleteEmployee(employeeId) {
            const authStore = useAuthStore();
            await api.delete(`/employees/${employeeId}`, {
                headers: { Authorization: `Bearer ${authStore.token}` }
            });
            this.employees = this.employees.filter(emp => emp.id !== employeeId);
        }
    }
});
