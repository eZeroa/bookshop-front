import ShoppingCart from '@/components/ShoppingCart'
import OrderTable from '@/components/OrderTable'
import Users from "@/components/Users";
import Login from "@/components/Login";
import Index from "@/components/Index";
import Detail from "@/components/Detail";

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
        }
    ]
})
