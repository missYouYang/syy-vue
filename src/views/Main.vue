<template>
  <div>
      <!-- 头部 -->
      <div class="header clearfix">
          <ul class="fr">
              <li class="dmovo_js">
                  <i class="iconin icon_h_xt"></i>系统设置
                  <div class="poptopbar_name dmbox">
                      <a href="pages/admin.html">
                          <i class="iconin icon_name4"></i>管理员
                      </a>
                  </div>
              </li>
              <li class="dmovo_js">
                  <i class="iconin icon_h_name"></i>Admin
                  <div class="poptopbar_name dmbox">
                      <a href="pages/person.html">
                          <i class="iconin icon_name1"></i>个人资料
                      </a>
                      <a href="javascript:;" id="passwordModalA">
                          <i class="iconin icon_name2"></i>修改密码
                      </a>
                      <a href="javascript:;">
                          <i class="iconin icon_name3"></i>退出登录
                      </a>
                  </div>
              </li>
          </ul>
      </div>
      <!-- 头部 -->

      <!-- 左边-->
      <div class="left">
          <div class="left_top">
              <!-- <span class="logo"></span>-->菜单栏
          </div>
          <!--  <div class="nav_title">导航</div>-->
          <!--列表-->
          <div class="nav">
              <div class="section section_js">
                  <h3 class="active h3 nav_h3_js">
                      <a href="index.html">
                          <i class="icon icon_nav1"></i>
                          <span>首页</span>
                      </a>
                  </h3>
              </div>
              <!---->
              <div class="section section_js">
                  <h3 class="h3 nav_h3_js">
                      <a href="javascript:;">
                          <i class="icon icon_nav2"></i>
                          <i class="icon icon_down"></i>
                          <span class="txt_nav">用户</span>
                      </a>
                  </h3>
                  <ul class="clearfix">
                      <li class="nav_li_js active">
                          <a href="user.html">
                              <span>>> 用户列表</span>
                          </a>
                      </li>
                      <li class="nav_li_js">
                          <a href="pages/attest.html">
                              <span>>> 用户认证</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="section section_js">
                  <h3 class="h3 nav_h3_js">
                      <a href="javascript:;">
                          <i class="icon icon_nav3"></i>
                          <i class="icon icon_down "></i>
                          <span class="txt_nav">订单</span>
                      </a>
                  </h3>
                  <ul class="clearfix">
                      <li class="nav_li_js">
                          <a href="pages/order.html">
                              <span>>> 订单管理</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="section section_js">
                  <h3 class="h3 nav_h3_js">
                      <a href="javascript:;">
                          <i class="icon icon_nav4"></i>
                          <i class="icon icon_down"></i>
                          <span class="txt_nav">产品</span>
                      </a>
                  </h3>
                  <ul class="clearfix">
                      <li class="nav_li_js">
                          <a href="pages/products.html">
                              <span>>> 产品列表</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="section section_js">
                  <h3 class="h3 nav_h3_js">
                      <a href="javascript:;">
                          <i class="icon icon_nav5"></i>
                          <i class="icon icon_down"></i>
                          <span class="txt_nav">消息</span>
                      </a>
                  </h3>
                  <ul class="clearfix">
                      <li class="nav_li_js">
                          <a href="pages/news.html">
                              <span>>> 消息管理</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="section section_js">
                  <h3 class="h3 nav_h3_js">
                      <a href="javascript:;">
                          <i class="icon icon_nav6"></i>
                          <i class="icon icon_down"></i>
                          <span class="txt_nav">财务</span>
                      </a>
                  </h3>
                  <ul class="clearfix">
                      <li class="nav_li_js">
                          <a href="pages/deposit.html">
                              <span>>> 订金</span>
                          </a>
                      </li>
                      <li class="nav_li_js">
                          <a href="pages/receipts.html">
                              <span>>> 收款</span>
                          </a>
                      </li>
                      <li class="nav_li_js">
                          <a href="pages/refunds.html">
                              <span>>> 退款</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <!--右侧中部-->
      <div class="right">
          <main class="content">
             <div style="">

             </div>
          </main>
          <footer class="footer">

          </footer>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    /*=================================================================头部开始==================================================================================================*/
    /*头部*/
    .header{
        height: 50px;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,.1); /*添加阴影*/
        padding: 0 40px;
        position: fixed; /*根据窗口绝对定位*/
    }

    /*li*/
    .header>ul>li {
        float: left;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
        padding: 0 8px;
        cursor: pointer;
        position: relative;
    }

    /*a 相当于下拉框*/
    .header>ul>li .dmbox a {
        height: 40px;
        line-height: 40px;
        padding-left: 11px;
        color: #5e5e5e;
        display: block;
    }

    /*两个圆*/
    .header>ul>li .icon_h_xt {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #00ba4e;
        margin-right: 6px;
    }
    /*把li标记变成inline-block*/
    .iconin {
        display: inline-block; /*变为行内快元素*/
        vertical-align: middle;
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }

    /*li 的下拉框实际*/
    .header>ul>li .dmbox {
        position: absolute;
        z-index: 30;  /*：Z-index 仅能在定位元素上奏效（例如 position:absolute;）！ 设置成30 比父元素优先级高*/
        left: 0;
        top: 50px;
        background-color: #fff;
        border: 1px solid #dcdee1;
        border-top: 0;
        width: 100px;
        /* display: flow-root; *//*就是说使用这个属性之后，该元素会生成一个块级容器框，并且使用的是流布局。为里面内容创建新的块级格式化上下文。*/
        display: none;
        border-radius: 0 0 6px 6px;
    }

    .icon_name4{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name1{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name2{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name3{
        background-image: url(../assets/images/home/icon_log4.png);
    }


    /*头部*/
    .header{
        height: 50px;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,.1); /*添加阴影*/
        padding: 0 40px;
        position: fixed; /*根据窗口绝对定位*/
    }

    /*li*/
    .header>ul>li {
        float: left;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
        padding: 0 8px;
        cursor: pointer;
        position: relative;
    }

    /*a 相当于下拉框*/
    .header>ul>li .dmbox a {
        height: 40px;
        line-height: 40px;
        padding-left: 11px;
        color: #5e5e5e;
        display: block;
    }
    /*显示下拉框*/
    .header>ul>li:hover .dmbox{
        display: block;
    }
    /*下拉框鼠标经过按钮*/
    .header>ul>li .dmbox a:hover {
        background-color: #f0f0f0;
    }
    /*两个圆*/
    .header>ul>li .icon_h_name,
    .header>ul>li .icon_h_xt{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color:#00ba4e;
        margin-right: 6px;
    }
    /*系统配置的按钮颜色*/
    .header>ul>li .icon_h_xt{
        background-color:#009ad8;
    }


    /*把li标记变成inline-block*/
    .iconin {
        display: inline-block; /*变为行内快元素*/
        vertical-align: middle;
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }

    /*li 的下拉框实际*/
    .header>ul>li .dmbox {
        position: absolute;
        z-index: 30;  /*：Z-index 仅能在定位元素上奏效（例如 position:absolute;）！ 设置成30 比父元素优先级高*/
        left: 0;
        top: 50px;
        background-color: #fff;
        border: 1px solid #dcdee1;
        border-top: 0;
        width: 100px;
        /* display: flow-root; *//*就是说使用这个属性之后，该元素会生成一个块级容器框，并且使用的是流布局。为里面内容创建新的块级格式化上下文。*/
        display: none;
        border-radius: 0 0 6px 6px;
    }

    .icon_name4{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name1{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name2{
        background-image: url(../assets/images/home/icon_log4.png);
    }
    .icon_name3{
        background-image: url(../assets/images/home/icon_log4.png);
    }

    /*=================================================================头部结束==================================================================================================*/
    /*=================================================================左侧开始==================================================================================================*/
    /*左侧部分*/
    .left {
        width: 180px;
        height: 100%;
        background-color: #1f232b;
        left: 0;
        top: 0;
        z-index: 110; /*级别大于头部分*/
        padding-top: 6px;
        position: fixed; /*根据窗口定位*/
    }

    /*绿水商城*/
    .left .left_top {
        text-align: center;
        color: #00ba4e;
        /* font-size: 18px;*/
        font-size: 24px;
        height: 48px;
        line-height: 48px;
        background: url(../assets/images/home/left_top.png) no-repeat center bottom;
    }

    /*商城log*/
    .logo {
        width: 26px;
        height: 26px;
        display: inline-block;
        margin-right: 10px;
        margin-top: -2px;
        background: url(../assets/images/home/logo.png) no-repeat 0 0;
        background-size: 100% 100%;
        vertical-align: middle;
    }

    /*导航*/
    .left .nav_title {
        height: 36px;
        line-height: 36px;
        margin-top: 20px;
        padding-left: 20px;
        color: #4a4d53;
        font-size: 14px;
    }

    /*列表*/
    .nav .section h3 {
        height: 50px;
        line-height: 50px;
        position: relative;
        padding-left: 51px;
        font-size: 14px;
        cursor: pointer;
        font-weight: normal;
    }

    /*列表字体*/
    .nav .h3 a{
        /*  color: #fff;*/
        /* display: block;*/
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-weight: normal;
        color: #a5a7aa;
    }

    /*列表闭合*/
    .nav .section h3 .icon_down {
        background-image: url(../assets/images/home/down.png);
    }


    /*列表开*/
    .nav .section h3 .icon_up {
        background-image: url(../assets/images/home/up.png);
    }

    /*列表开闭*/
    .nav .section h3 .icon_up, .nav .section h3 .icon_down {
        width: 10px;
        height: 6px;
        left: auto;
        right: 14px;
        top: 32px;
        z-index: 30;
    }

    /*首页图标*/
    .icon_nav1{
        left: 20px;
        top: 50%;
        margin-top: -10px;
        background-image: url(../assets/images/home/nav1_on.png);
    }
    /*图表公共*/
    .nav .h3 .icon {
        width: 20px;
        height: 20px;
        z-index: 20;
        position: absolute;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        left: 20px;
        top: 50%;
        margin-top: -10px;
    }

    /*列表的li*/
    .nav .section li {
        height: 50px;
        line-height: 50px;
        padding: 0 0 0 51px;
    }
    /*里的a标签*/
    .nav .section li a {
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: block;
        color: #a5a7aa;
    }

    /*用户左侧图标*/
    .nav .section h3 .icon_nav2{
        background-image: url(../assets/images/home/nav2.png);
    }

    /*订单左侧图标*/
    .nav .section h3 .icon_nav3 {
        background-image: url(../assets/images/home/nav3.png);
    }

    /*产品左侧图标*/
    .nav .section h3 .icon_nav4 {
        background-image: url(../assets/images/home/nav4.png);
    }

    /*消息左侧图标*/
    .nav .section h3 .icon_nav5 {
        background-image: url(../assets/images/home/nav5.png);
    }
    /*财务左侧图标*/
    .nav .section h3 .icon_nav6 {
        background-image: url(../assets/images/home/nav6.png);
    }

    /*列表鼠标焦点 字体  当被点击是标签添加一个active 把颜色变为当前颜色*/
    .nav .section h3:hover a,.nav .section h3.active a {
        color: #fff;
    }
    /*列表鼠标焦点 整列  并且首页默认颜色   当被点击是就给li标签添加一个active 把颜色变为当前颜色*/
    .nav .section h3:hover, .nav .section h3.active {
        background-color: #00ba4e;
    }

    /*列表鼠标焦点 li子列表字体 改变  当被点击是就给li标签添加一个active 把颜色变为当前颜色*/
    .nav .section li.active a, .nav .section li a:hover {
        color: #00ba4e;
    }
    /*列表关闭*/
    .nav .section ul {
        display: none;
    }

    /*出去bootStrop的默认间距*/
    .nav .h3{
        margin: 0;
    }
    /*=================================================================左侧结束===================================================================================================*/
</style>