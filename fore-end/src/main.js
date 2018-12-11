// 整个前端项目的入口js文件。
import Vue from 'vue';
import App from './App';
import router from './router';

// 去除vue开发时的浏览器提示。
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  components: {
    App: App
  },
  template: '<App/>'
});
