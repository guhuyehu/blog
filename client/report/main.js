import Vue from 'vue';

import router from '@report/router';
import App from '@report/App.vue';
import element from 'element-ui'
import '@report/style/index.less';
import store from './store/index'
import axios from 'axios'
 
Vue.use(element)
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
});
