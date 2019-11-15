<template>
    <div>
        <div style="margin-left: 20%;width: 60%">
            <Breadcrumb>
                <BreadcrumbItem to="/">主页</BreadcrumbItem>
                <BreadcrumbItem>{{commodity.commodityName}}</BreadcrumbItem>
            </Breadcrumb>
            <br>
            <br>
            <div style="float: left;margin-right: 5%;">
                <img style="width: 200px;height: 220px" :src="commodity.commodityImage">
            </div>
            <div>
                <p style="font-size: large">书&nbsp;&nbsp;名 : <strong>{{commodity.commodityName}}</strong></p>
                <br>
                <p style="font-size: large">价&nbsp;&nbsp;格 : <strong style="color: #ff4400">¥
                    {{commodity.commodityValue}}</strong></p>
                <br>
                <br>

                <p>库&nbsp;&nbsp;存 : <strong> {{commodity.commodityStock}} 件</strong></p>
                <p>成&nbsp;&nbsp;色 : <strong> {{commodity.commodityCondition}}</strong></p>
                <p>热&nbsp;&nbsp;度 : <strong> {{commodity.commodityRecommendDegree}} 星</strong></p>
                <br>
                <p>出&nbsp;版&nbsp;社 : <strong> {{commodity.commodityProvider}}</strong></p>
                <br>
                <Button type="warning" style="margin-left: 27%" @click="addToShoppingCart">加入购物车</Button>
                <Divider/>
                <p>{{commodity.commodityDescription}}</p>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                commodity: {},
                id: '',
                message: '',
            }
        },
        mounted() {
            this.id = this.$route.params.commodityId;
            this.getCommodity();
        },
        methods: {
            open(nodesc) {
                this.$Notice.open({
                    title: '提示',
                    desc: nodesc ? '' : this.message
                });
            },
            getCommodity: function () {
                this.axios.get(this.serverAddress + '/commodity/get/' + this.id)
                    .then(value => {
                        if ('200' == value.data.code) {
                            this.commodity = JSON.parse(value.data.msg);
                        } else {
                            this.message = '服务器繁忙';
                            this.open(false);
                        }
                    })
                    .catch(reason => {
                        alert(reason);
                    })
            },
            addToShoppingCart: function () {
                this.axios.get(this.serverAddress + '/shopping-cart/add/' + this.id)
                    .then(value => {
                        if ('200' == value.data.code) {
                            let username = localStorage.getItem('username');
                            if ('' === username || null == username || '' == username) {
                                this.message = '请先登录';
                                this.open(false);
                                open("/login");
                            } else {
                                this.message = '添加成功, 请到购物车查看';
                                this.open(false)
                            }
                        }
                    })
            }
        }

    }
</script>

<style scoped>

</style>