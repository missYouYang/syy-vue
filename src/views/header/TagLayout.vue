<template>
    <div>
        <a-tabs :active-key="activePage"
                :hide-add="true"
                type="editable-card"
                @edit="onEdit"
                style="height:53px"
                @change="onChange"
                class="tab-class-up">

            <a-tab-pane v-for="page in pageList" :key="page.fullPath" :tab="page.meta.title">
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    /*首页的路由地址*/
    const indexKey = '/home';
    export default {
        name: "TagLayout",
        data() {
            const panes = [
                {title: '主页', content: '123', key: 'home'},
                {title: '用户管理', content: '456', key: 'user'},
                {title: '角色管理', content: '456', key: 'role'},
            ];
            return {
                panes,
                newTabIndex: 0,
                activePage: '',  //存放路由地址
                pageList: [],
                linkList: [],
                reloadFlag: true
            };
        },
        /*页面重新加载的时候添加进去*/
        created() {
            /*把数据存进去*/
            if (this.$route.path != indexKey) {
                this.addIndexToFirst()
            }
            let currentRoute = Object.assign({}, this.$route);
            this.pageList.push(currentRoute);
            this.activePage = currentRoute.fullPath;
            this.linkList.push(currentRoute.fullPath);
        },
        /*如果路由被更改了,就会出现问题*/
        watch: {
            '$route': function (newRoute) {
                /*路由地址*/
                this.activePage = newRoute.fullPath;
                console.log("watch", this.activePage);
                //判断当前key是否存在
                if (this.linkList.indexOf(newRoute.fullPath) < 0) {
                    //不存在新加
                    this.linkList.push(newRoute.fullPath);
                    this.pageList.push(Object.assign({}, newRoute))
                } else if (this.linkList.indexOf(newRoute.fullPath) >= 0) {
                    let oldIndex = this.linkList.indexOf(newRoute.fullPath);
                    let oldPositionRoute = this.pageList[oldIndex];
                    this.pageList.splice(oldIndex, 1, Object.assign({}, newRoute, {meta: oldPositionRoute.meta}))
                }
            },
        },
        computed: {
            //
        },
        methods: {
            // 将首页添加到第一位
            addIndexToFirst() {
                /*splice 删除数据 第一个是索引，第二个删除数据，第三个是添加数据*/
                this.pageList.splice(0, 0, {
                    name: 'dashboard-analysis',
                    path: indexKey,
                    fullPath: indexKey,
                    meta: {
                        icon: 'dashboard1',
                        title: '首页'
                    }
                });
                this.linkList.splice(0, 0, indexKey)
            },
            callback(key) {
                console.log("点击", key);
            },
            /*新增删除回调*/
            onEdit(targetKey, action) {
                this[action](targetKey);
            },
            /*删除tags*/
            remove(key) {
                if (key == indexKey) {
                    this.$message.warning('首页不能关闭!');
                    return
                }
                if (this.pageList.length === 1) {
                    this.$message.warning('这是最后一页，不能再关闭了啦');
                    return
                }

                this.pageList = this.pageList.filter(item => item.fullPath !== key);
                /*下面是防止重复的，暂定*/
                let index = this.linkList.indexOf(key);
                this.linkList = this.linkList.filter(item => item !== key);
                index = index >= this.linkList.length ? this.linkList.length - 1 : index;
                this.activePage = this.linkList[index];
                /*如果关闭了，就把目前的key覆盖旧的*/
                this.$store.commit("add", this.activePage);
                /*    console.log(this.activePage)*/
            },
            onChange(key) {
                this.activePage = key;
                this.$store.commit("add", key);
            }
        }
    }

</script>


<style lang="less">

    .tab-class-up > .ant-tabs-bar {
        border: none !important;
        border-bottom: 1px solid transparent !important;
        margin: 5px 0 16px 0;
    }

/*    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
        border: none;
        background: none;
        padding: 5px 12px;
    }*/

    .ant-layout-header {
        padding: 0px 25px;
    }

    .ant-tabs-nav .ant-tabs-tab:hover {
        color: color(~`colorPalette("@{primary-color}", 5)`);
    }

    .ant-tabs {
        &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
            border: none;
            background: none;
            padding: 3px 24px;
            margin-right: 10px;
            .ant-tabs-close-x {
                opacity: 0 !important;  //把
                font-size: 12px;
                margin-right: -17px;
                margin-left: 3px;
            }

            &:hover .ant-tabs-close-x {
                opacity: 1 !important;  //把透明度设置未完全透明
            }

        }

    }


    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
        border-color: #1890FF !important;
    }

    .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
        border: none !important;
        border-bottom: 1px solid !important;
    }

    /*把x小时掉*/
    /*
        .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x{
            color: rgb(255, 255, 255);
        }
    */

    /*.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover{
        color: rgb(255, 255, 255);
    }*/
</style>
