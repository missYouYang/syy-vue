import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta:{
           title:'登入页'
        }
    },{
    path: '/Main',
    name: 'Main',
    component:()=> import('../views/Main'),
    meta:{
        code: "menu:home",
        name: "主页",
        url: "/Main",
        group: "common",
        icon: "azt-font-home"
    }
  }
];

const router = new VueRouter({
    routes
});

export default router
