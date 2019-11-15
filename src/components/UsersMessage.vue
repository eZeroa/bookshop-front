<template>
    <div>
        <div style="float:left">
            <Menu theme="light" active-name="1" accordion >
                <MenuGroup title="用户操作">
                    <MenuItem name="1" to="/users/usersInformation">
                        <Icon type="md-document" />
                        用户信息
                    </MenuItem>
                    <MenuItem name="2" disabled to="/logout">
                        <Icon type="md-chatbubbles" />
                        退出登录
                    </MenuItem>
                </MenuGroup>
                <MenuGroup title="项目信息">
                    <MenuItem name="3" to="/users/projectInformation">
                        <Icon type="md-heart" />
                        项目介绍
                    </MenuItem>
                    <MenuItem name="4" to="/users/aboutUs">
                        <Icon type="md-leaf" />
                        关于我们
                    </MenuItem>
                </MenuGroup>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </Menu>
        </div>

        <div style="margin-left: 18%">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsersMessage",
        methods: {
        }
    }
</script>

<style scoped>

</style>