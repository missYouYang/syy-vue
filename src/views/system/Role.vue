<template>
    <div>
        <a-table bordered :data-source="dataSource"
                 :columns="columns"
                 :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
            <template slot="avatarslot" slot-scope="text, record">
                <div class="anty-img-wrap">
                    <a-avatar shape="square" :src="record.avatar" icon="user"/>
                </div>
            </template>
        </a-table>
    </div>
</template>
<script>
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            userName: 'userName'+i,
            userRealName: 'userName'+i,
            avatar: 'http://minio.jeecg.com/otatest/temp/lgo33_1583397323099.png',
            sex: '0',
            userPhone:i,
            userDept:'总经理',
            status: 1,
        });
    }
    export default {
        name: "role",
        components: {

        },

        data() {
            return {
                selectedRowKeys: [], // Check here to configure the default column
                loading: false,
                dataSource: data,
                count: 2,
                columns: [
                    {
                        title: '用户账号',
                        dataIndex: 'userName',
                        align:'center',
                        width:120,
                    },
                    {
                        title: '用户名',
                        dataIndex: 'userRealName',
                        align:'center',
                        width:120,
                    },
                    {
                        title: '头像',
                        dataIndex: 'avatar',
                        align:'center',
                        width:130,
                        scopedSlots: {customRender: "avatarslot"}
                    },
                    {
                        title: '性别',
                        dataIndex: 'sex',
                        align:'center',
                        width:150,
                        customRender:function (text) {
                            if(text == 0){
                                return '男'
                            }else {
                                return '女'
                            }
                        }
                    },
                    {
                        title: '手机号',
                        dataIndex: 'userPhone',
                        align:'center',
                        width:120,
                    },
                    {
                        title: '部门',
                        dataIndex: 'userDept',
                        align:'center',
                        width:120,
                    },
                    {
                        title: '状态',
                        dataIndex: 'status',
                        align:'center',
                        width:120,
                        customRender:function (text) {
                            if(text == 0){
                                return '禁用'
                            }else {
                                return '正常'
                            }
                        }
                    },
                ],
            };
        },
        methods: {
            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            },
        },
    };
</script>
<style>

</style>
