<template>
    <div style="width: 300px;" class="right">
        <span class="wel-head">
            <a-dropdown>
                <a href="javascript:;" class="header-out action">
                    <a-avatar size="small" src="http://minio.jeecg.com/otatest/temp/lgo33_1583397323099.png"/>
                    <span @click="e => e.preventDefault()" class="m-right-5">
                        欢迎你,XXX
                    </span>
                </a>
                <a-menu slot="overlay" @click="onClick">
                    <a-menu-item key="user-1">
                        <a-icon type="user"/>
                        <span>个人中心</span>
                    </a-menu-item>
                    <a-menu-item key="user-2">
                        <a-icon type="setting"/>
                        <span>系统设置</span>
                    </a-menu-item>
                    <a-menu-item key="user-3">
                        <a-icon type="tag"/>
                        <span>修改密码</span>
                    </a-menu-item>
                    <a-menu-item key="user-4">
                        <a-icon type="tool"/>
                        <span>账户设置</span>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </span>
        <span>
            <a href="javascript:;" class="header-out action">
                <a-icon type="logout"/>
                <span> 退出登入</span>
            </a>
        </span>
    </div>
</template>
<script>
    export default {
        name: "RightHeader",
        methods: {
            onClick({key}) {
                console.log(`Click on item ${key}`);
            },
        },
    }
</script>

<style scoped>
    .header-out {
        color: #fff;
    }
</style>
<style>
    .m-right-5 {
        margin-left: 5px;
    }

    .right {
        float: right
    }

    .action:hover {
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        display: inline-block;
        transition: all 0.3s;
        height: 100%;
    }

    .action {
        cursor: pointer;
        padding: 0 14px;
        display: inline-block;
        transition: all 0.3s;
        height: 100%;
    }
</style>
