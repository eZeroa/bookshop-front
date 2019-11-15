import ShoppingCart from '@/components/ShoppingCart'
import OrderTable from '@/components/OrderTable'
import Users from "@/components/Users";
import Login from "@/components/Login";
import Index from "@/components/Index";
import Detail from "@/components/Detail";
import UsersMessage from "../components/UsersMessage";
import AboutUs from "../components/AboutUs";
import ProjectInformation from "../components/ProjectInformation";
import UsersInformation from "../components/UsersInformation";
import Logout from "../components/Logout";

export default ({
    routes: [              //配置路由 这里是个数组

        {
            path: '/shoppingCart',
            component: ShoppingCart
        },
        {
            path: '/',
            component: Index
        },
        {
            path: '/orderTable',
            component: OrderTable
        },
        {
            path: '/users',
            component: Users,
            children: [
                {
                    path: '',
                    component: UsersMessage,
                    children: [
                        {
                            path: 'aboutUs',
                            component: AboutUs,
                        },
                        {
                            path: 'projectInformation',
                            component: ProjectInformation,
                        },
                        {
                            path: 'usersInformation',
                            component: UsersInformation,
                        },

                    ]
                }
            ],
        },
        {
            // 单独的登录页面 隐藏掉全局导航栏
            path: '/login',
            component: Login
        },
        {
            path: '/detail/:commodityId',
            component: Detail
        },
        {
            path: '/logout',
            component: Logout,
        },
    ]
})
