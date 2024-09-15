<template>
    <div id="app">
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                </tr>
                <tr v-for="e in employees" :key="e.id">
                    <td>{{ e.id}}</td>
                    <td>{{ e.name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function () {
        return {
            employees: []
        }
    },
    //TODO: mountedって何？
    mounted () {
        axios
            .get('/api/v1/employees.json')
            .then((response) => {
            this.employees = response.data
        })
    }
}

</script>

<style scoped></style>