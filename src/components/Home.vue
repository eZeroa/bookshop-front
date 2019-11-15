<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}" style="background-color: white; z-index: 999; top: 0">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <img src="../assets/logo.png" style="width: inherit; height: inherit" alt="">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
							<Icon type="ios-home-outline" />
                            <router-link to="/">首页</router-link>

                        </MenuItem>
                        <MenuItem name="2">
							<Icon type="ios-cart-outline" />
                            <router-link to="/shoppingCart">购物车</router-link>
                        </MenuItem>

                        <MenuItem name="3">
                            <Icon type="ios-list"/>
                            <router-link to="/orderTable">订单</router-link>
                        </MenuItem>
                        <MenuItem name="4">
							<Icon type="ios-person-outline" />
                            <router-link to="/users" >用户</router-link>

                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 45px;
        height: 45px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
