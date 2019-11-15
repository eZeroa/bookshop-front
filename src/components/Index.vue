<template>
    <div>
        <div style="margin-left: 39%">
            <Input v-model="value" placeholder="搜索商品" style="width: 300px; margin-right: 1%"/>
            <Button type="primary" shape="circle" icon="ios-search" disabled></Button>
        </div>
        <br>
        <div style="margin-left: 1%; width: 15%;height: 100%;float: left">
            <h3 style="margin-left: 15%">图书分类</h3>
            <br>
            <Collapse accordion simple >
                <Panel hide-arrow :name="'' + index" v-bind:key="index" v-for="(item, index) in msg">
                    <Button type="text" v-on:click="getChildType(item.typeId)">{{item.typeName}}</Button>
                    <List style="margin-left: 9%" slot="content" v-bind:key="item1.id" v-for="item1 in childMsg">
                        <ListItem><a>{{item1.typeName}}</a></ListItem>
                    </List>
                </Panel>

            </Collapse>
        </div>
        <div style="margin-left: 20%">
            <br>
            <br>

            <Row :gutter="2">
                <Col span="6" :key="index" v-for="(item, index) in commodities">
                    <div>
                        <Card style="width:180px">
                            <div style="text-align:center">
                                <img style="width: 150px;height: 120px"
                                     :src="item.imageURL">
                                <h3 style="color: #ff4400">¥ {{item.commodityValue}}</h3>
                                <button style="color: #4d5669;background: none;border: none" @click="toDetail(item.commodityId)"><p
                                        style="font-size: x-small">
                                    <strong>{{item.commodityName}}</strong>({{item.commodityCondition}})</p></button>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>

        <br>
        <div id="center">
            <Page :current="nowPage" :total="total" simple disabled/>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                value: '',
                value2: '1',
                msg: [],
                childMsg: [],
                commodities: [],
                nowPage: 1,
                total: 1,
            }
        },
        mounted() {
            this.getType(0);
            this.getCommodity();
        },
        methods: {
            getType: function (parentId) {
                let id = parentId;

                this.axios.get(this.serverAddress + '/type/get/' + id)
                    .then(value => {
                        this.msg = JSON.parse(value.data.msg);
                    })
            },
            getChildType: function (childId) {
                let id = childId;

                this.axios.get(this.serverAddress + '/type/get/' + id)
                    .then(value => {
                        this.childMsg = JSON.parse(value.data.msg);
                    })
            },
            getCommodity: function () {
                this.axios.get(this.serverAddress + '/commodity/all')
                    .then(value => {
                        if ('200' == value.data.code) {
                            this.commodities = JSON.parse(value.data.msg)
                        }
                    })
            },
            toDetail: function (commodityId) {

                // 直接调用$router.push 实现携带参数的跳转
                this.$router.push({
                    path: `/detail/${commodityId}`,
                })
            }
        }
    }
</script>

<style scoped>

</style>