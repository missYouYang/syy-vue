<template>
    <div>
        <!--搜索框-->
        <div>

            <!--设置 label-col 和 wrapper-col 可以使：对齐  指定了宽度-->
            <a-form-model layout="inline" :label-col="labelCol" :wrapper-col="wrapperCol" ref="ruleForm"
                          :model="queryParam">
                <a-row :gutter="24">
                    <a-col :md="8" :sm="24">
                        <a-form-model-item label="用户账号" prop="userName">
                            <a-input placeholder="请输入用户账号" v-model="queryParam.userName" v-decorator/>
                        </a-form-model-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-model-item label="用户名称" prop="userRealName">
                            <a-input placeholder="请输入用户名称" v-model="queryParam.userRealName"></a-input>
                        </a-form-model-item>
                    </a-col>

                    <!--隐藏点击按钮时显示-->
                    <template v-if="expand">
                        <a-col :md="8" :sm="24">
                            <a-form-model-item label="性别" prop="sex">
                                <a-select v-model="queryParam.sex" placeholder="选择性别">
                                    <a-select-option value="0">
                                        男
                                    </a-select-option>
                                    <a-select-option value="1">
                                        女
                                    </a-select-option>
                                </a-select>
                            </a-form-model-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-model-item label="手机号" prop="userPhone">
                                <a-input placeholder="请输入手机号" v-model="queryParam.userPhone" prop="userRealName"/>
                            </a-form-model-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-model-item label="部门" prop="userDept">
                                <a-input-group>
                                    <a-cascader style="width: 100%" :options="options" placeholder="请输入部门"
                                                v-model="queryParam.userDept"/>
                                </a-input-group>
                            </a-form-model-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-model-item label="用户状态" prop="status">
                                <a-select v-model="queryParam.status" placeholder="选择状态">
                                    <a-select-option value="0">
                                        正常
                                    </a-select-option>
                                    <a-select-option value="1">
                                        禁用
                                    </a-select-option>
                                    <a-select-option value="2">
                                        删除
                                    </a-select-option>
                                </a-select>
                            </a-form-model-item>
                        </a-col>
                    </template>

                    <!--根据左后一行不同 通过offset 调整距离-->
                    <a-col :md="8" :sm="24" :offset="expand?16:0" :style="{ textAlign: 'right' }">
                        <a-button type="primary" @click="onSubmit">查询</a-button>
                        <a-button type="primary" style="margin-left: 8px" @click="resetForm">重置</a-button>
                        <a @click="toggle" style="margin-left: 8px">
                            {{ expand ? '收起' : '展开' }}
                            <a-icon :type="expand ? 'up' : 'down'"/>
                        </a>
                    </a-col>
                </a-row>
            </a-form-model>
        </div>

        <!--中间的操作按钮-->
        <div class="user-table-button-class">
            <a-button type="primary" @click="addUser">
                <a-icon type="plus"/>
                添加用户
            </a-button>
        </div>
        <!--表格-->
        <div class="user-table-class">
            <a-table
                    size="small"
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

                <template slot="action" slot-scope="text, record">
                  <div>
                      <a @click="handleEdit(record)" >编辑</a>
                      <a-divider type="vertical" />
                      <a-dropdown>
                          <a class="ant-dropdown-link">
                              更多
                              <a-icon type="down"/>
                          </a>
                          <a-menu slot="overlay">
                              <a-menu-item>
                                  <a href="javascript:;" @click="handleDetail(record)">详情</a>
                              </a-menu-item>

                              <a-menu-item>
                                  <a href="javascript:;" @click="handleChangePassword(record.username)">密码</a>
                              </a-menu-item>

                              <a-menu-item>
                                  <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                                      <a>删除</a>
                                  </a-popconfirm>
                              </a-menu-item>

                              <a-menu-item v-if="record.status==1">
                                  <a-popconfirm title="确定冻结吗?" @confirm="() => handleFrozen(record.id,2,record.username)">
                                      <a>冻结</a>
                                  </a-popconfirm>
                              </a-menu-item>

                              <a-menu-item v-if="record.status==2">
                                  <a-popconfirm title="确定解冻吗?" @confirm="() => handleFrozen(record.id,1,record.username)">
                                      <a>解冻</a>
                                  </a-popconfirm>
                              </a-menu-item>
                          </a-menu>
                      </a-dropdown>
                  </div>

                </template>


            </a-table>
        </div>
        <add-user-model ref="userModel"></add-user-model>
    </div>

</template>

<script>

    import AddUserModel from "./modules/AddUserModel";

    /*部门*/
    const options = [
        {
            value: '总公司',
            label: '总公司',
            children: [
                {
                    value: '河南分公司',
                    label: '河南分公司',
                    children: [
                        {
                            value: '周口门店',
                            label: '周口门店',
                        },
                        {
                            value: '驻马店门店',
                            label: '驻马店门店',
                        },
                    ],
                }, {
                    value: '河北分公司',
                    label: '河北分公司',
                    children: [
                        {
                            value: '合肥门店',
                            label: '合肥门店',
                        },
                    ],
                },
                {
                    value: '北京分公司',
                    label: '北京分公司',
                    children: [
                        {
                            value: '一环',
                            label: '一环',
                            children: [
                                {
                                    value: '二环',
                                    label: '二环',
                                },
                            ],
                        },
                    ],
                },
            ],
        },

    ];
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
            width: 80,
            scopedSlots: {customRender: "avatarslot"}
        },
        {
            title: '性别',
            dataIndex: 'sex',
            align: 'center',
            width: 100,
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
        {
            title: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
            align: "center",
            width: 170
        }
    ];
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            userName: 'userName' + i,
            userRealName: 'userName' + i,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603166363282&di=fdeba595c57100294a326d04f31d2d74&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpg',
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
                options,
                labelCol: {span: 4},
                wrapperCol: {span: 10},
                queryParam: {
                    userName: "",
                    userRealName: "",
                    userPhone: "",
                    avatar: "",
                    userDept: [],
                    sex: [],
                    status: [],
                },
                expand: false,
                data,
                columns,
                selectedRowKeys: [], // Check here to configure the default column
                loading: false,
            };
        },
        components: {
            AddUserModel
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
            resetForm() {
                this.$refs.ruleForm.resetFields();
            },
            onSubmit() {

                /*验证通过为true*/
                this.$refs.ruleForm.validate(valid => {
                    console.log(valid);
                    if (valid) {
                        this.$message.info('提交成功');
                    } else {
                        this.$message.error('提交失败');
                        return false;
                    }
                });
            },
            addUser() {
                this.$refs.userModel.showDrawer()
            }
        },
    };
</script>

<style scoped>
    .user-table-button-class {
        margin-top: 20px;
    }

    .user-table-class {
        margin-top: 10px;
    }


    @import '../../assets/less/common.less';
    /*   @import '~@assets/less/common.less'*/
</style>
