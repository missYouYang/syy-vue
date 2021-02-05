import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/iview.js'



import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less';
// 引入echarts 注掉部分是5.0版本一下引入方式，现在使用5.0版本
// import echarts from 'echarts'
import * as echarts from 'echarts';
/*import 'ant-design-vue/dist/antd.css';*/
/*import '~ant-design-vue/dist/antd.less';*/
Vue.prototype.$echarts = echarts;
Vue.use(Antd);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
