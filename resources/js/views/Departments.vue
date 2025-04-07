<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Dashboard from "../components/Dashboard.vue";
import api from "../api.js";
import {useAuthStore} from "../stores/authStore.js";
const authStore = useAuthStore();

DataTable.use(DataTablesCore);
const response = await api.get("/departments", {
    headers: {
        Authorization: `Bearer ${authStore.token}`
    }
});
const d = response?.data?.departments ?? [];

const data = [
    [1, 2, 3, 4],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
    [3, 4, 5, 6],
];
</script>

<template>
    <Dashboard title="Departments">
        <DataTable :data="data" class="display">
            <thead>
            <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
        </DataTable>
    </Dashboard>
</template>
<style>
@import 'datatables.net-dt';
</style>
