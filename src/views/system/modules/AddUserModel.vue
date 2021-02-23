<template>
    <a-drawer
            title="添加用户"
            :width="720"
            :visible="visible"
            @close="onClose"
            :destroyOnClose="true">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="ruleForm">
            <a-form-model-item label="用户账号" prop="userName">
                <a-input v-model="form.userName" placeholder="请输入用户账号"/>
            </a-form-model-item>
            <a-form-model-item label="用户名" prop="userRealName">
                <a-input v-model="form.userRealName" placeholder="请输入用户名"/>
            </a-form-model-item>

            <a-form-model-item label="密码" prop="userPassword">
                <a-input v-model="form.userPassword" placeholder="请输入密码"/>
            </a-form-model-item>
            <a-form-model-item label="密码确认" prop="rUserPassword">
                <a-input v-model="form.rUserPassword" placeholder="请再次输入密码"/>
            </a-form-model-item>
<!--  :customRequest="customRequest"    -->
            <a-form-model-item label="头像" prop="avatar" class="user-model-avatar">
                <template>
                    <div class="">
                        <a-upload
                                list-type="picture-card"
                                :file-list="fileList"
                                @preview="handlePreview"
                                @change="handleChange"
                                :customRequest="selfUpload"
                                :loading="uploading"
                        >
                            <div v-if="fileList.length < 1">
                                <a-icon type="plus" />
                                <div class="ant-upload-text">
                                    Upload
                                </div>
                            </div>
                        </a-upload>
                        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                            <img alt="example" style="width: 100%" :src="previewImage" />
                        </a-modal>
                    </div>
                </template>
            </a-form-model-item>
            <a-form-model-item label="性别" prop="sex">
                <a-select v-model="form.sex" placeholder="请选择性别">
                    <a-select-option value="0">
                        男
                    </a-select-option>
                    <a-select-option value="1">
                        女
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="手机号" prop="userPhone">
                <a-input v-model="form.userPhone" placeholder="请输入手机号"/>
            </a-form-model-item>
            <a-form-model-item label="部门" prop="userDept">
                <a-input-group>
                    <a-cascader style="width: 100%" :options="options" placeholder="请输入部门" v-model="form.userDept"/>
                </a-input-group>
            </a-form-model-item>
        </a-form-model>
        <div :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
        >
            <a-button :style="{ marginRight: '8px' }" @click="onClose">
                取消
            </a-button>
            <a-button type="primary" @click="onClose">
                确认
            </a-button>
        </div>
    </a-drawer>
</template>

<script>
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            console.log("base64");
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

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
    export default {
        name: "UserModel",
        data() {
            return {
                /*图片*/
                previewVisible: false,
                previewImage: '',
                fileList: [],
                uploading: false,


                visible: false,
                labelCol: {span: 4},
                wrapperCol: {span: 14},
                options,
                form: {
                    userName: "",
                    userRealName: "",
                    userPhone: "",
                    avatar: "",
                    userDept: [],
                    sex: [],
                    status: [],
                    userPassword: '',
                    rUserPassword: ''
                },
                rules: {
                    userName: [
                        {required: true, message: '用户账号不能为空', trigger: 'blur'},
                    ],
                    userRealName: [
                        {required: true, message: '不能名为空', trigger: 'blur'},
                    ],
                    userPassword: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                    ],
                    rUserPassword: [
                        {required: true, message: '验证密码不能为空', trigger: 'blur'},
                    ],
                    userDept: [
                        {required: true, message: '部门不能为空', trigger: 'blur'},
                    ],
                    sex: [
                        {required: true, message: '部门不能为空', trigger: 'blur'},
                    ],
                    userPhone: [
                        {required: true, message: '手机号不能为空', trigger: 'blur'},
                    ],
                },
            }
        },
        methods: {
            selfUpload({ file }) {
                const base64 = new Promise(resolve => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = () => {
                        resolve(fileReader.result);
                        this.previewImage = fileReader.result;
                        console.log("123",this.previewImage)
                    };
                });
                console.log(base64)
       /*         const base64 = new Promise(resolve => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = () => {
                        resolve(fileReader.result);
                        this.model.cover = fileReader.result;
                    };
                });*/
                return base64;
            },
            handleCancel() {
                console.log("handCancel");
                this.previewVisible = false;
            },
            async handlePreview(file) {
                if (!file.url && !file.preview) {
                    file.preview = await getBase64(file.originFileObj);
                    console.log("preview",file.preview)
                }
                this.previewImage = file.url || file.preview;
                this.previewVisible = true;
                console.log("previewImage",this.previewImage)
            },

            handleChange({ fileList }) {
                console.log("333434",fileList[0].thumbUrl);
                console.log("333434",fileList);
                this.fileList = fileList;
            },


            showDrawer() {
                this.visible = true;
            },
            onClose() {
                /*验证通过为true*/
                this.$refs.ruleForm.validate(valid => {
                    console.log(valid);
                    this.imageUrl = '';
                    this.fileList = [];
                    if (valid) {
                        this.$message.info('提交成功');
                        this.visible = false;
                        /*        this.$refs.ruleForm.resetFields();*/
                    } else {
                        this.visible = false;
                        /*  this.$refs.ruleForm.resetFields();*/
                    }

                });
            },
            onSubmit() {
                console.log('submit!', this.form);
            },

        }
    };
</script>

<style lang="less">
    .user-model-avatar {
        .ant-upload-select-picture-card {
            i {
                font-size: 32px;
                color: #999;
            }

            .ant-upload-text {
                margin-top: 8px;
                color: #666;
            }
        }

        .ant-form-item-control-wrapper {
            height: 100px;
        }
    }
</style>
