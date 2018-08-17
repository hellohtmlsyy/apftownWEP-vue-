// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "babel-polyfill";
import layer from 'vue-layer';
Vue.prototype.$layer = layer(Vue);
import 'jquery';

Vue.config.productionTip = false;

import Axios from 'axios';
import qs from 'qs';
Vue.prototype.API = '/api';

//挂载
Object.defineProperty(Vue.prototype,'$axios',{
	get(){
		return Axios;
	}
});
Axios.defaults.withCredentials = true;
import rootPath from './assets/config/api.js';//接口路径

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
  	urlPath: rootPath.pathUrl()
  },
})
