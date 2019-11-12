<template>
    <div id="users">
        用户
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
                let token = localStorage.token;
                token = null;
                if (token != null) {
                    alert(token)
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