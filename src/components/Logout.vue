<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "Logout",
        mounted() {
            this.logout()
        },
        methods: {
            logout: function () {
                this.axios
                    .post(this.serverAddress + '/users/logout')
                    .then(() => {
                        localStorage.removeItem('username');
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>

<style scoped>

</style>