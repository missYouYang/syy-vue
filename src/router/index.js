import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {
            title: '登入页'
        }
    }, {
        path: '/Main',
        name: 'Main',
        component: () => import('../views/Main'),
        meta: {
            code: "menu:home",
            title: "主页",
            url: "/Main",
            group: "common",
            icon: "azt-font-home",
        },
        children: [
            {
                path: '/main/user',
                name: 'User',
                component: () => import('../views/system/User'),
                meta: {
                    code: "menu:system:user",
                    title: "用户管理",
                    url: "/main/user",
                    group: "common",
                    icon: "azt-font-user"
                }
            }, {
                path: '/main/dept',
                name: 'Dept',
                component: () => import('../views/system/Dept'),
                meta: {
                    code: "menu:system:dept",
                    title: "部门管理",
                    url: "/main/dept",
                    group: "common",
                    icon: "azt-font-dept"
                }
            }, {
                path: '/main/role',
                name: 'User',
                component: () => import('../views/system/Role'),
                meta: {
                    code: "menu:system:role",
                    title: "角色管理",
                    url: "/main/role",
                    group: "common",
                    icon: "azt-font-role"
                }
            }, {
                path: '/main/menu',
                name: 'User',
                component: () => import('../views/system/Menu'),
                meta: {
                    code: "menu:system:menu",
                    title: "菜单管理",
                    url: "/main/menu",
                    group: "common",
                    icon: "azt-font-menu"
                }
            },{
                path: '/home',
                name: 'home',
                component: () => import('../views/Home'),
                meta: {
                    code: "menu:home",
                    title: "主页",
                    url: "/Home",
                    group: "common",
                    icon: "azt-font-home"
                }
            },{
                path: '/main/myMessage',
                name: 'home',
                component: () => import('../views/message/MyMessage'),
                meta: {
                    code: "menu:myMessage",
                    title: "我的消息",
                    url: "/main/myMessage",
                    group: "message",
                    icon: "azt-font-myMessage"
                }
            },{
                path: '/main/manageMessage',
                name: 'manageMessage',
                component: () => import('../views/message/ManageMessage'),
                meta: {
                    code: "menu:manageMessage",
                    title: "消息管理",
                    url: "/Home",
                    group: "message",
                    icon: "azt-font-manageMessage"
                }
            }
        ]
    }, {
        path: '/Test',
        name: 'Test',
        component: () => import('../views/Test'),
        meta: {
            code: "menu:test",
            title: "测试页",
            url: "/Test",
            group: "common",
            icon: "azt-font-test"
        }
    }
];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes
});

export default router
