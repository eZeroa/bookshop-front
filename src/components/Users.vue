<template>
    <div id="users">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "Users",
        data() {
            return {
                users: {
                    username: '',
                    password: '',
                }
            }
        },
        mounted() {
            this.login();
        },
        methods: {
            login: function login() {
                this.axios
                    .get(this.serverAddress + '/users/getUsers')
                    .then(value => {
                        if ('403' == value.data.code) {
                            localStorage.removeItem('username')
                        }
                    });

                let token = localStorage.getItem('username');
                if (token != null) {
                    this.$router.push('/users/usersInformation')
                } else {
                    // 跳转登录页面
                    this.$router.push('/login')
                }


            }
        }
    }

</script>


<style scoped>

</style>