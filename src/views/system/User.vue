<template>
    <div>
        <!--搜索框-->
        <div>

            <!--设置 label-col 和 wrapper-col 可以时：对齐-->
            <a-form layout="inline" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-row :gutter="24">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="用户账号">
                            <a-input placeholder="请输入用户账号" v-model="queryParam.userName"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="用户名称">
                            <a-input placeholder="请输入用户名称" v-model="queryParam.userRealName"></a-input>
                        </a-form-item>
                    </a-col>

                    <!--隐藏点击按钮时显示-->
                    <template v-if="expand">
                        <a-col :md="8" :sm="24">
                            <a-form-item label="性别">
                                <a-select v-model="queryParam.sex" placeholder="选择性别">
                                    <a-select-option value="0">
                                        男
                                    </a-select-option>
                                    <a-select-option value="1">
                                        女
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="手机号">
                                <a-input placeholder="请输入手机号" v-model="queryParam.userPhone"/>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="部门">
                                <a-input placeholder="请输入部门" v-model="queryParam.userDept"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="用户状态">
                                <a-input placeholder="用户状态" v-model="queryParam.sex"></a-input>
                            </a-form-item>
                        </a-col>
                    </template>

                    <!--根据左后一行不同 通过offset 调整距离-->
                    <a-col :md="8" :sm="24" :offset="expand?16:0" :style="{ textAlign: 'right' }">
                        <a-button type="primary">查询</a-button>
                        <a-button type="primary" style="margin-left: 8px">重置</a-button>
                        <a @click="toggle" style="margin-left: 8px">
                            {{ expand ? '收起' : '展开' }}
                            <a-icon :type="expand ? 'up' : 'down'"/>
                        </a>
                    </a-col>
                </a-row>
            </a-form>
        </div>

        <!--表格-->
        <div>
            <a-table
                    size="middle"
                    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                    bordered :columns="columns"
                    :data-source="data"
                    style="height: 100%;overflow: auto;padding-bottom: 53px;"
            >
                <template slot="avatarslot" slot-scope="text, record">
                    <div class="anty-img-wrap">
                        <a-avatar shape="square" :src="record.avatar" icon="user"/>
                    </div>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
    const columns = [
        {
            title: '用户账号',
            dataIndex: 'userName',
            align: 'center',
            width: 120,
        },
        {
            title: '用户名',
            dataIndex: 'userRealName',
            align: 'center',
            width: 120,
        },
        {
            title: '头像',
            dataIndex: 'avatar',
            align: 'center',
            width: 130,
            scopedSlots: {customRender: "avatarslot"}
        },
        {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 50,
            customRender: function (text) {
                if (text == 0) {
                    return '男'
                } else {
                    return '女'
                }
            }
        },
        {
            title: '手机号',
            dataIndex: 'userPhone',
            align: 'center',
            width: 120,
        },
        {
            title: '部门',
            dataIndex: 'userDept',
            align: 'center',
            width: 120,
        },
        {
            title: '状态',
            dataIndex: 'status',
            align: 'center',
            width: 120,
            customRender: function (text) {
                if (text == 0) {
                    return '禁用'
                } else {
                    return '正常'
                }
            }
        },
    ];
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            userName: 'userName' + i,
            userRealName: 'userName' + i,
            avatar: 'http://minio.jeecg.com/otatest/temp/lgo33_1583397323099.png',
            sex: '0',
            userPhone: i,
            userDept: '总经理',
            status: 1,
        });
    }

    export default {
        name: "User",

        data() {
            return {
                labelCol: {span: 4},
                wrapperCol: {span: 10},
                queryParam: {},
                expand: false,
                data,
                columns,
                selectedRowKeys: [], // Check here to configure the default column
                loading: false,
            };
        },
        computed: {},

        methods: {
            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            },
            /*控制搜索框展示和隐藏的*/
            toggle() {
                this.expand = !this.expand;
            },
        },
    };
</script>

<style scoped>
    @import '../../assets/less/common.less';
    /*   @import '~@assets/less/common.less'*/
</style>
