<template>
    <div>
        <List>
            <ListItem>
                <ListItemMeta :avatar="author.url"
                              title="项目团队" :description="author.name" :key="author" v-for="author in authors"/>
            </ListItem>
        </List>
    </div>
</template>

<script>
    export default {
        name: "AboutUs",
        data() {
            return {
                authors: [
                    {
                        name: '软件工程 杜良睿',
                        url: 'https://a1.qpic.cn/psb?/V117OgOo3RIuXH/J*nSXmnlmxzCUl5bzlB6eWbjk6qBrqWNESpYB*j17Ms!/m/dFQBAAAAAAAAnull&bo=yADIAAAAAAARBzA!&rf=photolist&t=5',

                    },
                    {
                        name: '软件工程 冯诗祥',
                        url: 'https://a1.qpic.cn/psb?/V117OgOo3RIuXH/ToOH6zEhMWxOaMRdfgjIBxXem5blz*ZQTUICla7*fCs!/m/dFQBAAAAAAAAnull&bo=kAGQAQAAAAARBzA!&rf=photolist&t=5',

                    },
                    {
                        name: '软件工程 李梦阳',
                        url: 'https://a4.qpic.cn/psb?/V117OgOo3RIuXH/gu7X1UeQV15u.9VEpdO*sHn86WiovllcI9IIUoa47Sw!/m/dL8AAAAAAAAAnull&bo=3ADcAAAAAAARBzA!&rf=photolist&t=5'
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>