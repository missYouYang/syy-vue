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

      <!-- 左边-->

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
        name: "Main",
        components:{
            vMenu
        }
    }
</script>

<style scoped>
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

</style>
