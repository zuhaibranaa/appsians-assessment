<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Dashboard from "../components/Dashboard.vue";

DataTable.use(DataTablesCore);

const data = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7],
];
</script>

<template>
    <Dashboard title="Employees">
        <DataTable :data="data" class="display">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Joining Date</th>
            </tr>
            </thead>
        </DataTable>
    </Dashboard>
</template>
<style>
@import 'datatables.net-dt';
</style>
