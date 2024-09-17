<template>
    <employee-form-pane :errors="errors" :employee="employee" @submit="updateEmployee"></employee-form-pane>
</template>

<script>
import axios from 'axios';

import EmployeeFormPane from 'EmployeeFormPane.vue';

export default {
    components: {
        EmployeeFormPane
    },
    data() {
        return {
            employee: {},
            errors: ''
        }
    },
    // TODO: mountedって何？
    mounted () {
        axios
            .get(`/api/v1/employees/${this.$route.params.id}.json`)
            .then((response) => {
                console.log(response)
                this.employee = response.data
            })
    },
    methods: {
        updateEmployee: function() {
            // バリデーション。かなり微妙な気がする。。
            this.errors = [];
            if (!this.employee.department) {
                this.errors.push('department required.');
            }

            if (this.employee.note) {
                const pattern = /^https?:\/\/[\w]+/
                let result = this.employee.note.match(pattern);
                if (result === null) {
                    this.errors.push('url format invalid.');
                }
            }

            if (this.errors.length > 0) {
                return;
            }

            axios
                .patch(`/api/v1/employees/${this.employee.id}`, this.employee)
                .then(response => {
                    this.$router.push({ name: 'EmployeeDetailPage', params: { id: this.employee.id } });
                })
                .catch(error => {
                    console.log('err-----')
                    console.error(error);
                    if (error.response.data && error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    }
                });
        }
    }
}
</script>