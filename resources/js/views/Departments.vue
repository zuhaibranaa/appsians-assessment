<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Dashboard from "../components/Dashboard.vue";

DataTable.use(DataTablesCore);

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
