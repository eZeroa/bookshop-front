<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="msg" @on-selection-change="getSelect()"></Table>

        <div id="center">
            <Page :current="nowPage" :total="total" simple/>

        </div>
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button type="warning" style="margin-left: 85%; margin-right: 1%" @click="delSelect()">删除</Button>
        <Button type="info" style="position: absolute" @click="buySelect()">购买</Button>
    </div>
</template>

<script>
    import * as qs from "qs";

    export default {
        name: "ShoppingCart",
        data() {
            return {
                single: false,
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品名称',
                        key: 'commodityName'
                    },
                    {
                        title: '商品价格',
                        key: 'commodityValue'
                    },
                    {
                        title: '购买数量',
                        key: 'commodityCount'
                    },
                    {
                        title: '产品成色',
                        key: 'commodityCondition'
                    },
                    {
                        title: '出版社',
                        key: 'provider'
                    },
                ],
                nowPage: 1,
                total: 0,
                msg: [],
                selectCommodities: [],
                commodities: [],

            }
        },
        mounted() {
            this.getShoppingCart()
        },
        methods: {
            getShoppingCart: function getShoppingCart() {
                this.axios.get(this.serverAddress + '/shopping-cart/all')
                    .then(resp => {
                        // 解析 JSON
                        this.msg = JSON.parse(resp.data.msg);
                        this.total = this.msg.length
                    })
                    .catch(() => {
                        alert("服务器繁忙");
                    })
            },
            handleSelectAll() {
                this.single = !this.single;
                this.$refs.selection.selectAll(this.single);
            },
            delSelect: function () {
                this.axios.post(this.serverAddress + '/shopping-cart/del', qs.stringify(
                    {
                        commodities: this.commodities,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    },
                    {
                        indices: false
                    }
                ),)
                    .then(value => {
                        if ('200' == value.data.code) {
                            alert("删除成功")

                        }
                    })
            },
            getSelect: function () {
                this.selectCommodities = this.$refs.selection.getSelection()
                // eslint-disable-next-line no-console
                let index = 0;
                this.selectCommodities.forEach(value => {
                    this.commodities[index++] = value.commodityId
                })
            },
            buySelect: function () {
                this.axios.post(this.serverAddress + '/shopping-cart/buySelect', qs.stringify(
                    {
                        commodities: this.commodities, headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    },

                    {
                        indices: false
                    }
                ),)
                    .then(value => {
                        if ('200' == value.data.code) {
                            alert("正在创建订单")
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>