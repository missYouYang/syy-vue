<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" style="text-align: center;line-height:32px;color:#fff;overflow:hidden">小商城管理系统</div>
        <!--默认打开的-->
        <a-menu
                :selected-keys="selectedKeys"
                :open-keys="openKeys"
                mode="inline"
                theme="dark"
                :inline-collapsed="collapsed"
                @openChange="onOpenChange"
        >
            <!--没有使用递归，先整两层，多了可以改造成递归-->
            <template v-for="item in menuList">
                <a-sub-menu :key="item.key" v-if="item.children != false">
                    <span slot="title"><a-icon :type="item.icon"/><span>{{item.title}}</span></span>
                    <template v-for="oneChild in item.children">
                        <a-sub-menu :key="oneChild.key" v-if="oneChild.children != false">
                            <span slot="title"><a-icon :type="oneChild.icon"/><span>{{oneChild.title}}</span></span>
                        </a-sub-menu>
                        <a-menu-item v-else :key="oneChild.key" @click="clickMenu(oneChild.key)">
                            <span>{{oneChild.title}}</span>
                        </a-menu-item>
                    </template>
                </a-sub-menu>
                <a-menu-item v-else :key="item.key" @click="clickMenu(item.key)">
                    <a-icon type="home"/>
                    <span>{{item.title}}</span>
                </a-menu-item>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
    export default {
        name: "LeftMenu",
        data() {
            return {
                collapsed: false,
                selectedKeys: [this.$route.path],
                openKeys: [''],
                menuList: [
                    {
                        "key": "/home",
                        "title": "主页",
                        "icon": "home",
                        "children": false
                    }, {
                        "key": "system",
                        "title": "系统管理",
                        "icon": "setting",
                        "children": [
                            {
                                "key": "/main/user",
                                "title": "用户管理",
                                "children": false
                            },
                            {
                                "key": "/main/role",
                                "title": "角色管理",
                                "children": false
                            }, {
                                "key": "/main/menu",
                                "title": "菜单管理",
                                "children": false
                            },
                            {
                                "key": "/main/dept",
                                "title": "部门管理",
                                "children": false
                            },
                        ]
                    }, {
                        "key": "message",
                        "title": "消息中心",
                        "icon": "mail",
                        "children": [
                            {
                                "key": "/main/myMessage",
                                "title": "我的消息",
                                "children": false
                            },
                            {
                                "key": "/main/manageMessage",
                                "title": " 消息管理",
                                "children": false
                            }

                        ]
                    }, {
                        "key": "sub2",
                        "title": "系统监控",
                        "icon": "appstore",
                        "children": [
                            {
                                "key": "menu-9",
                                "title": "性能监控",
                                "children": false
                            },
                            {
                                "key": "menu-13",
                                "title": "sql监控",
                                "children": false
                            }

                        ]
                    },
                ]
            };
        },
        computed: {
            listData() {
                return this.$store.state.tagLayout
            }
        },
        watch: {
            /*监听tagLayout是否发生改变*/
            "listData": function (url) {
                if(url == '/home'){
                    this.openKeys = ['']
                }
                this.$router.push(url);
                this.xhmenu(this.menuList, url);
                this.selectedKeys = [this.$route.path]
            }
        },
        created() {
            this.xhmenu(this.menuList, '');
        },
        methods: {
            /*刷新时指定当前页面*/
            xhmenu(result, key) {
                for (let i = 0; i < this.menuList.length; i++) {
                    //循环【顶级菜单数组列表】 循环的数组下标用i表示
                    if (result[i].children !== false) {
                        // 如果这个菜单没有【子菜单】 就不继续了（没有子菜单就是【点击可跳转页面但不会展开】的顶级菜单）
                        for (let y = 0; y < result[i].children.length; y++) {
                            // 循环【顶级菜单】的子菜单数组（二级菜单）数组下标用y表示
                            if (key == '') {
                                if (result[i].children[y].key === this.$route.path) {
                                    // 如果子菜单的router数据和当前路由地址一样 则断定现在的页面就停留在这个数组对应的菜单中
                                    this.openKeys = [result[i].key]
                                    // 那么就把【顶级菜单（循环数组下标为i）的router属性】赋值给this.openKeys【data中当前展开的菜单】
                                }
                            } else {
                                console.log("key", key);
                                if (result[i].children[y].key === key) {
                                    // 如果子菜单的router数据和当前路由地址一样 则断定现在的页面就停留在这个数组对应的菜单中
                                    this.openKeys = [result[i].key]
                                    // 那么就把【顶级菜单（循环数组下标为i）的router属性】赋值给this.openKeys【data中当前展开的菜单】
                                }
                            }

                        }
                    }
                }
            },
            /*展开和闭合时调用*/
            ifOpen() {
                this.collapsed = !this.collapsed;
            },
            /*点击二级菜单调用*/
            clickMenu(url) {
                if(url == '/home'){
                    this.openKeys = ['']
                }
                this.$router.push(url);
                this.selectedKeys = [url];
            },
            /*点击一级菜单时调用*/
            onOpenChange(openKeys) {
                if (openKeys.length !== 0) {
                    this.openKeys = [openKeys[1]]
                } else {
                    this.openKeys = ['']
                }
            }
        },
    }
</script>

<style lang="less">
    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
