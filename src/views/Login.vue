<template>
    <!--整体-->
    <div class="login">
        <div class="login-box">
            <form method="post" id="form_login" onsubmit="return user_login()">
                <div class="user-login" >用户登入
                    <div id="login_error" class="error"></div>
                </div>

                <!--登入选择框-->
                <div class="user-b">
                    <!--//用户-->
                    <div class="userName-login">
                        <div id="username_error" class="error"></div>
                        <input type="text" v-model = "userName" maxlength="15" class="login-userName-input" placeholder="请输入用户名">
                    </div>

                    <!--//m密码-->
                    <div class="userName-login">
                        <div id="password_error" class="error"></div>
                        <input type="password" v-model = "pwd" maxlength="15" class="login-userName-input" placeholder="请输入密码">
                    </div>

                    <!-- //登入,注册按钮-->
                    <div class="login-button">
                        <input type="button" value="登入" class="login-button-input l0" id="userLogin" name="login" @click="sumbit">
                        <input type="button" value="注册" class="login-button-input r0" onclick="user_register()">
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data:function() {
          return{
              userName:"",
              pwd:""
            }

        },
        methods:{
            sumbit(){
                this.$router.push("/main");
            }
        }
    }
</script>

<style scoped>
    /*版心*/

    .w {
        width: 1190px;
        margin: 0 auto;
    }
    /*左右浮动*/
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }

    /*左右浮动0*/
    .l0 {
        left: 0;
    }
    .r0 {
        right: 0;
    }
    a {
        text-decoration: none;
        color: #999;
        font-size: 12px;
    }
    .f10 {
        color: #f10215 !important;
    }
    input,button {
        /*复合属性。设置或检索对象外的线条轮廓。outline画在border外面 */
        outline: none;/*取消轮框边框*/
        border: 0;
    }
    ul {
        list-style: none;

    }
    body {
        background-color: #f6f6f6;
    }


    /*页面的开始  中间的大图*/
    .login {
        height: 100vh;
        background: url("../assets/images/jun.jpg") no-repeat;
        background-size: 100% 100%;/*如果提供两个，第一个用于定义背景图像的宽度，第二个用于定义背景图像的高度。*/
        position: relative;
    }

    /*登入框的大小位置*/
    .login-box {
        width: 500px;
        height: 300px;
        position: absolute;
        background-color:rgba(255,255,255,0.8);
        /* background-color: white;*/
        right: 178px;
        bottom: 226px;

    }
    /*用户登入*/
    .user-login {
        font-size: 30px;
        color: rgba(86, 81, 64, 0.8);
        width: 150px;
        height: 18px;
        line-height: 40px;
        text-align: center;
        margin: 30px auto;
    }

    /*与用户登入分离，里面包含用户，密码，按钮*/
    .user-b{
        /* background: #f10215;*/
        height: 175px;
    }
    .userName-login {
        height: 30px;
        width:228px;
        padding: 0;
        border: 0;
        margin: 30px auto;
    }
    .login-userName-input {
        font-size: 16px;
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid #cccccc;

    }

    /*登入按钮*/
    .login-button {
        height: 36px;
        width:200px;
        position: relative;
        margin: 0px auto;
        top:23px;
    }
    .login-button-input {
        height: 36px;
        width: 89px;
        position: absolute;
        background: rgba(237, 227, 202, 1);
        color: #776b6b;
    }
    .login-button-input:hover{
        background-color: rgba(255,255,255,0.8);
    }
    /*字体超出不变行*/
    .error{

        height: 22px;
        color: red;
        font-size: 15px;
        white-space:nowrap;
        text-align: center;
        margin: 2px 0px;
    }
</style>