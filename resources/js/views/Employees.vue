<script setup>
import { ref, reactive, onMounted } from "vue";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import Dashboard from "../components/Dashboard.vue";
import { useEmployeeStore } from "../stores/employeeStore.js";

const employeeStore = useEmployeeStore();
const isModalOpen = ref(false);
const isEditing = ref(false);
const employeeForm = reactive({ id: null, name: "", email: "", phone: "", department: "", joining_date: "" });

DataTable.use(DataTablesCore);

// Fetch employees on mount
onMounted(() => {
    employeeStore.fetchEmployees();
});

// Open modal for new employee
const openModal = () => {
    isEditing.value = false;
    Object.assign(employeeForm, { id: null, name: "", email: "", phone: "", department: "", joining_date: "" });
    isModalOpen.value = true;
};

// Open modal for editing an employee
const editEmployee = (employee) => {
    isEditing.value = true;
    Object.assign(employeeForm, employee);
    isModalOpen.value = true;
};

// Save or update employee
const saveEmployee = async () => {
    if (isEditing.value) {
        await employeeStore.updateEmployee(employeeForm);
    } else {
        await employeeStore.addEmployee(employeeForm);
    }
    isModalOpen.value = false;
};

// Delete employee
const deleteEmployee = async (employeeId) => {
    if (confirm("Are you sure you want to delete this employee?")) {
        await employeeStore.deleteEmployee(employeeId);
    }
};
</script>

<template>
    <Dashboard title="Employees">
        <!-- Header -->
        <div class="bg-white flex justify-between p-4">
            <h2 class="text-xl font-semibold">Manage Employees</h2>
            <button @click="openModal" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                New Employee
            </button>
        </div>

        <!-- DataTable -->
        <DataTable class="display w-full">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Joining Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employeeStore.employees" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.phone }}</td>
                <td>{{ employee.department }}</td>
                <td>{{ employee.joining_date }}</td>
                <td class="p-3 flex gap-2">
                    <button
                        @click="editEmployee(employee)"
                        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Edit
                    </button>
                    <button
                        @click="deleteEmployee(employee.id)"
                        class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </DataTable>

        <!-- Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 class="text-xl font-semibold mb-4">{{ isEditing ? "Edit Employee" : "New Employee" }}</h2>

                <div class="mb-4">
                    <label class="block text-gray-700">Name</label>
                    <input v-model="employeeForm.name" type="text"
                           class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700">Email</label>
                    <input v-model="employeeForm.email" type="email"
                           class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700">Phone</label>
                    <input v-model="employeeForm.phone" type="text"
                           class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700">Department</label>
                    <input v-model="employeeForm.department.name" type="text"
                           class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700">Joining Date</label>
                    <input v-model="employeeForm.joining_date" type="date"
                           class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex justify-end gap-2">
                    <button @click="isModalOpen = false" class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                        Cancel
                    </button>
                    <button @click="saveEmployee"
                            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        {{ isEditing ? "Update" : "Save" }}
                    </button>
                </div>
            </div>
        </div>
    </Dashboard>
</template>

<style>
@import "datatables.net-dt";
</style>
