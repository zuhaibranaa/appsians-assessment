<script setup>
import { ref, onMounted } from "vue";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import Dashboard from "../components/Dashboard.vue";
import { useDepartmentStore } from "../stores/departmentStore.js";

DataTable.use(DataTablesCore);

const departmentStore = useDepartmentStore();
const showModal = ref(false);
const form = ref({ id: null, name: "", code: "", description: "" });

onMounted(() => {
    departmentStore.fetchDepartments();
});

const openModal = (department = null) => {
    if (department) {
        form.value = { ...department };
    } else {
        form.value = { id: null, name: "", code: "", description: "" };
    }
    showModal.value = true;
};

const saveDepartment = async () => {
    if (form.value.id) {
        await departmentStore.updateDepartment(form.value);
    } else {
        await departmentStore.addDepartment(form.value);
    }
    showModal.value = false;
};

const deleteDepartment = async (departmentId) => {
    if (confirm("Are you sure you want to delete this department?")) {
        await departmentStore.deleteDepartment(departmentId);
    }
};
</script>

<template>
    <Dashboard title="Departments">
        <div class="flex justify-between bg-white">
            <h2 class="text-xl font-semibold">Manage Departments</h2>
            <button @click="openModal()" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                + Add Department
            </button>
        </div>

        <DataTable class="display w-full">
            <thead>
            <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="department in departmentStore.departments" :key="department.id">
                <td>{{ department.name }}</td>
                <td>{{ department.code }}</td>
                <td>{{ department.description }}</td>
                <td class="p-3 flex gap-2">
                    <button @click="openModal(department)" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Edit
                    </button>
                    <button @click="deleteDepartment(department.id)" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </DataTable>

        <!-- Modal for Add/Edit -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 class="text-xl font-semibold mb-4">{{ form.id ? "Edit" : "Add" }} Department</h2>
                <label class="block mb-2">Name</label>
                <input v-model="form.name" class="w-full px-3 py-2 border rounded mb-2" placeholder="Department Name" />

                <label class="block mb-2">Code</label>
                <input v-model="form.code" class="w-full px-3 py-2 border rounded mb-2" placeholder="Department Code" />

                <label class="block mb-2">Description</label>
                <textarea v-model="form.description" class="w-full px-3 py-2 border rounded mb-4" placeholder="Description"></textarea>

                <div class="flex justify-end gap-2">
                    <button @click="showModal = false" class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Cancel</button>
                    <button @click="saveDepartment" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </Dashboard>
</template>

<style>
@import "datatables.net-dt";
</style>
