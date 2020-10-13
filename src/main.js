import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/iview.js'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
/*import 'ant-design-vue/dist/antd.css';*/
/*import '~ant-design-vue/dist/antd.less';*/
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
