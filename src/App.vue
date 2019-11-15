<template>
    <div id="app">
        <home ></home>
        <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
            <router-view v-if="isRouterAlive"></router-view>
        </Content>

        <Divider/>
        <Footer style="text-align: center; background: none" class="layout-footer-center">2019 &copy; 书籍杂货铺</Footer>
    </div>
</template>

<script>

    import Home from "@/components/Home";

    export default {
        name: 'app',
        components: {
            Home
        },
        provide() {
            return {
                reload: this.reload,
            }
        },
        data() {
            return {
                isRouterAlive: true,
            }
        },
        methods: {
            reload: function () {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true;
                })
            }
        }
    }
</script>
