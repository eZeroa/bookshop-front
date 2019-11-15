<template>
    <div>
        <List>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              title="用户ID" :description="users.usersId"/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://a3.qpic.cn/psb?/V117OgOo3RIuXH/dYguJpPIT9zdSrOYkZqzFm7P8H.P5xiHK19z5uhlSsU!/m/dLYAAAAAAAAAnull&bo=yADIAAAAAAARBzA!&rf=photolist&t=5"
                              title="用户名" :description="users.username"/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://a4.qpic.cn/psb?/V117OgOo3RIuXH/gu7X1UeQV15u.9VEpdO*sHn86WiovllcI9IIUoa47Sw!/m/dL8AAAAAAAAAnull&bo=3ADcAAAAAAARBzA!&rf=photolist&t=5"
                              title="联系电话" :description="users.phone"/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://a1.qpic.cn/psb?/V117OgOo3RIuXH/2vnDwBA3YxMYR71ydrnPgP7TtCXhBGFOKQu5rA9rhdE!/m/dFQBAAAAAAAAnull&bo=CwPzAQAAAAARB8o!&rf=photolist&t=5"
                              title="电子邮箱" :description="users.email"/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://a2.qpic.cn/psb?/V117OgOo3RIuXH/D.DhekmwA.S5bF0w3FlX*sfgOWyZ*8SEWm5MdJgLAfQ!/m/dE0BAAAAAAAAnull&bo=4AHgAQAAAAARBzA!&rf=photolist&t=5"
                              title="注册时间" :description="users.regDate"/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://a3.qpic.cn/psb?/V117OgOo3RIuXH/OBZPCnVXtH60*PDVeIoZLXzo.hdUHaImqLWC45MCUrM!/m/dFIBAAAAAAAAnull&bo=DwEOAQAAAAARBzE!&rf=photolist&t=5"
                              title="职业" :description="users.phone"/>
            </ListItem>
        </List>
    </div>
</template>

<script>
    export default {
        name: "UsersInformation",
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getUsersInformation();
        },
        methods: {
            getUsersInformation: function () {
                this.axios
                    .get(this.serverAddress + '/users/getUsers')
                    .then(value => {
                        if ('200' == value.data.code) {
                            this.users = JSON.parse(value.data.msg)
                        }
                    })

            }
        }
    }
</script>

<style scoped>

</style>