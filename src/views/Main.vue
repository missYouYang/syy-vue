<template>
    <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
        <!--左侧菜单-->
        <left-menu ref="leftMenu"></left-menu>
        <a-layout>
            <a-layout-header style="padding: 0;">
                <div class="header">
                    <!--选择框-->
                    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="ifOpen"/>
                    <span>欢迎光临小商品管理系统</span>
                    <right-header></right-header>
                </div>
            </a-layout-header>
            <a-layout>
                <a-layout-header :style="{background: '#fff',height:'54px'}">
                    <tag-layout></tag-layout>
                </a-layout-header>
                <a-layout-content
                        :style="{ margin: '15px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
                        class="syy-content-class">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="textAlign: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
    import LeftMenu from "./menu/LeftMenu";
    import RightHeader from "./header/RightHeader"
    import TagLayout from "./header/TagLayout";

    export default {
        name: "Main",
        components: {
            LeftMenu,
            RightHeader,
            TagLayout
        },

        data() {
            return {
                collapsed: false,
            };
        },
        created() {
            this.initial();
        },
        methods: {
            ifOpen() {
                this.$refs.leftMenu.ifOpen();
            },
            initial() {

                console.log("main", this.$route.path);
                if (this.$route.path == '/main') {
                    console.log("123");
                    this.$router.push("/home")
                } else {
                    console.log("12355");
                    this.$router.push(this.$route.path)
                }
            },
            onClick({key}) {
                console.log(`Click on item ${key}`);
            },
        },
    }
</script>

<style scoped>

    .header {
        background-color: #1890ff;
        z-index: 2;
        color: white;
        height: 64px;
        transition: background 300ms;
    }

    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }


    #components-layout-demo-custom-trigger .trigger[data-v-c1f1971a]:hover {
        color: #2c3033;
    }


</style>

<style lang="less">
    body {
        overflow-y: scroll;
    }

</style>
