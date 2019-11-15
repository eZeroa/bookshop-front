<template>
    <div style="margin-left: 36%;margin-top: 6%; width: 30%;  height: 400px">

        <img src="../assets/logo.png" style="height: 150px;width: 150px;margin-left: 34%"/>
        <Divider>欢迎访问</Divider>
        <br>

        <Input prefix="ios-contact" v-model="username" size="large" placeholder="Username"
               style="width: 300px;margin-left: 17%;" prop="username" @blur.native.capture="checkUsername"/>
        <br>
        <br>
        <Input prefix="ios-lock-outline" v-model="password" type="password" size="large" placeholder="Password"
               style="width: 300px;margin-left: 17%" @blur.native.capture="checkPassword"/>
        <br>
        <br>

        <Button type="success" style="margin-left: 33%; margin-right: 40px" :disabled="disabled" @click="login">登录
        </Button>
        <Button @click="value3 = true">注册</Button>


        <Drawer
                title="注册"
                v-model="value3"
                width="720"
                :mask-closable="false"
                :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="用户名" label-position="top">
                            <Input v-model="formData.name" placeholder="请输入用户名" @on-blur="checkServerUsername"/>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="密码" label-position="top">
                            <Input v-model="formData.password" placeholder="请输入密码" @on-blur="checkRegPassword"/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="联系电话" label-position="top">
                            <Input v-model="formData.phone" placeholder="请输入电话"/>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="电子邮箱" label-position="top">
                            <Input v-model="formData.email" placeholder="请输入电子邮箱"/>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="职业" label-position="top">
                            <Select v-model="formData.occupation" placeholder="请选择职业">
                                <Option value="stu">学生</Option>
                                <Option value="teacher">老师</Option>
                                <Option value="other">其他</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="日期" label-position="top">
                            <DatePicker v-model="formData.date" type="daterange" placeholder="请选择时间"
                                        style="display: block" placement="bottom-end"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div class="demo-drawer-footer" style="margin-bottom: 5%">
                <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
                <Button type="primary" @click="register" :disabled="disabled">提交</Button>
            </div>
        </Drawer>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        inject: ['reload'],
        data() {
            return {
                username: '',
                password: '',
                message: '',
                disabled: true,
                value3: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    password: '',
                    phone: '',
                    email: '',
                    occupation: '',
                    date: '',
                },
            }
        },
        mounted() {
            if (localStorage.getItem('username') != null) {
                this.$router.push('/users/usersInformation');
            }
        },
        methods: {
            open(nodesc) {
                this.$Notice.open({
                    title: '提示',
                    desc: nodesc ? '' : this.message
                });
            },
            checkUsername: function () {

                if ('' === this.username) {
                    this.message = '请输入用户名';
                    this.disabled = true;
                    this.open(false);
                } else {
                    this.disabled = false;
                }
            },
            checkPassword: function () {

                if ('' === this.password) {
                    this.message = '请输入密码';
                    this.disabled = true;
                    this.open(false);
                } else if (this.password.length < 8) {
                    this.message = '密码至少为8位';
                    this.disabled = true;
                    this.open(false);
                } else {
                    this.disabled = false;
                }
            },
            checkRegPassword: function () {

                if ('' === this.formData.password) {
                    this.message = '请输入密码';
                    this.disabled = true;
                    this.open(false);
                    this.disabled = true;
                } else if (this.formData.password.length < 8) {
                    this.message = '密码至少为8位';
                    this.disabled = true;
                    this.open(false);
                } else {
                    this.disabled = false;
                }
            },
            login: function () {
                const formData = new FormData();
                formData.append('username', this.username);
                formData.append('password', this.password);
                this.axios.post(this.serverAddress + '/users/login',
                    formData)
                    .then(value => {
                        if ('200' == value.data.code) {
                            this.message = '登录成功';
                            this.open(false);
                            localStorage.setItem('username', this.username);
                            this.$router.push('/users/usersInformation');
                            this.reload();
                        } else if ('401' == value.data.code){
                            this.message = '用户名或密码错误';
                            this.open(false);
                        } else {
                            this.message = '超过重试次数, 请3分钟后尝试';
                            this.open(false);
                        }
                    })
            },
            checkServerUsername: function () {
                if ('' === this.formData.name) {
                    this.message = '请输入用户名';
                    this.open(false);
                    this.disabled = true;
                    return;
                }
                this.axios
                    .get(this.serverAddress + '/users/check/'  + this.formData.name)
                    .then(value => {
                        if ('200' == value.data.code) {
                            //
                            this.message = '用户名可用';
                            this.disabled = false;

                        } else {
                            this.message = '用户名已存在';
                            this.disabled = true;
                        }
                        this.open(false);
                    })
            },
            register: function () {
                const formData = new FormData();
                formData.append('username', this.formData.name);
                formData.append('password', this.formData.password);
                formData.append('phone', this.formData.phone);
                formData.append('email', this.formData.email);
                formData.append('occupation', this.formData.occupation);
                this.axios
                    .post(this.serverAddress + '/users/reg', formData)
                    .then(value => {
                        if ('201' == value.data.code) {
                            this.message = '注册成功';
                            this.disabled = false;
                            this.value3 = false;
                            this.open(false);
                        }
                    })
            }
        }
    }
</script>