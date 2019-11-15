<template>
    <div >
        <Collapse simple>
            <Panel name="1">
                前端
                <p slot="content">前端页面采用 <a herf="https://iviewui.com/">iView</a> (一套基于 Vue.js 的高质量 UI 组件库), 组件经过编译打包后部署在 Nginx 服务器上.</p>
            </Panel>
            <Panel name="2">
                后端
                <p slot="content">后端提供 API 服务, 基于 SpringBoot + MyBatisPlus 开发. 使用 Shiro 提供用户授权, Redis 提升性能, Kafka 提供异步处理.</p>
            </Panel>
            <Panel name="3">
                服务器
                <p slot="content">
                    server 1 : 运行 Nginx 服务器, 以及 Redis, Kafka.
                    <br>
                    server 2 : 运行 Java Application 以及 MySQL.
                </p>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
    export default {
        name: "Information"
    }
</script>

<style scoped>

</style>