<template>
    <a-form   layout="inline" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row :gutter="24">
            <a-col :md="8" :sm="24">
                <a-form-item label="用户账号">
                    <a-input placeholder="请输入用户账号" />
                </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
                <a-form-item label="用户名称">
                    <a-input placeholder="请输入用户名称" ></a-input>
                </a-form-item>
            </a-col>

            <!--隐藏点击按钮时显示-->
            <template v-if="true">
                <a-col :md="8" :sm="24">
                    <a-form-item label="性别" >
                        <a-input placeholder="Basic usage"/>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="手机号">
                        <a-input placeholder="请输入手机号"/>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="部门">
                        <a-input placeholder="请输入部门" ></a-input>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="用户状态">
                        <a-input placeholder="用户状态" ></a-input>
                    </a-form-item>
                </a-col>
            </template>

        </a-row>
    </a-form>

</template>

<script>
    export default {
        name: "Dept",
        data() {
            return {
                labelCol: {span: 4},
                wrapperCol: {span: 14},
                form: {
                    name: '',
                    region: undefined,
                    date1: undefined,
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!', this.form);
            },
        },
    };
</script>

<style lang="less">
    /*    .ant-advanced-search-form {
            padding: 24px;
            background: #fbfbfb;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
        }

        .ant-advanced-search-form .ant-form-item {
            display: flex;
        }

        .ant-advanced-search-form .ant-form-item-control-wrapper {
            flex: 1;
        }*/

    /*    #components-form-demo-advanced-search .ant-form {
            max-width: none;
        }*/
    /*    #components-form-demo-advanced-search .search-result-list {
            margin-top: 16px;
            border: 1px dashed #e9e9e9;
            border-radius: 6px;
            background-color: #fafafa;
            min-height: 200px;
            text-align: center;
            padding-top: 80px;
        }*/
    @import '../../assets/less/common.less';
</style>
