<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="msg" @on-selection-change="getSelect()"></Table>
        <br>
        <div id="center">
            <Page :current="nowPage" :total="total" simple disabled/>
        </div>
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button type="warning" style="margin-left: 83%; margin-right: 1%" @click="deleteOrderTableBySelect()">取消订单
        </Button>
        <Button type="info" disabled>去付款</Button>
    </div>
</template>

<script>
    import * as qs from "qs";

    export default {
        name: "OrderTable",
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
                        title: '订单号',
                        key: 'orderTableId'
                    },
                    {
                        title: '创建时间',
                        key: 'createDate'
                    },
                    {
                        title: '商品数量',
                        key: 'commodityCount'
                    },
                    {
                        title: '交易状态',
                        key: 'status'
                    },

                ],
                total: 0,
                nowPage: 1,
                msg: [],
                index: 0,
                selectOrderTable: [],
                orderTables: [],
                message: '',

            }
        },
        inject: ['reload'],
        mounted() {
            this.getUsersOrderTable()
        },
        methods: {
            open(nodesc) {
                this.$Notice.open({
                    title: '提示',
                    desc: nodesc ? '' : this.message
                });
            },
            // 获取被选择的订单
            getSelect: function () {
                this.selectOrderTable = this.$refs.selection.getSelection();
                let index = 0;
                this.selectOrderTable.forEach(value => {
                    this.orderTables[index++] = value.orderTableId;
                })
            },
            getUsersOrderTable: function getShoppingCart() {
                this.axios.get(this.serverAddress + '/order-table/all')
                    .then(value => {
                        if ('200' == value.data.code) {
                            this.msg = JSON.parse(value.data.msg);
                            this.total = this.msg.length;
                        } else {
                            this.message = value.data.msg;
                            this.open(false);
                        }
                    })
                    .catch(() => {
                        this.message = '服务器繁忙';
                        this.open(false);
                    })
            },
            deleteOrderTableBySelect: function () {
                this.axios.post(this.serverAddress + '/order-table/del/', qs.stringify(
                    {
                        orderIds: this.orderTables,
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
                            this.message = '删除成功';
                            this.open(false);
                        }
                    })
            },
            handleSelectAll() {
                this.single = !this.single;
                this.$refs.selection.selectAll(this.single);
            }
        }
    }
</script>

<style>
    #center {
        margin-left: 45%;
    }
</style>