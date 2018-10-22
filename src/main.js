// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "babel-polyfill";
import { getCookie, } from '@/assets/commonjs/util.js';
import layer from 'vue-layer';
Vue.prototype.$layer = layer(Vue);
import 'jquery';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
//全局组件
import tab0818 from '@/components/comm/0818tab';
Vue.component(tab0818.name,tab0818);

Vue.config.productionTip = false;
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)

import Axios from 'axios';
import qs from 'qs';
Vue.prototype.API = '/api';

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});
router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth) { // 判断该路由是否需要登录权限
		if(getCookie('APF_UID')) { // 通过vuex state获取当前的token是否存在
			Axios.get('http://memberapi.apftown.com:8070/wap/activity/actAlready', {
				params: {
					activityNo: '20181008',
					APF_UID: getCookie('APF_UID'),
				}
			})
			.then(res => {
				if(res.data.data!=false) {
					next();
				} else {
					next({
						path: '/act/act2018100805',
					})
				}
			})
			.catch(err => {
				console.log(err)
			})
		} else {
			next({
				path: '/act/act2018100801',
			})
		}
	} else {
		next();
	}
})

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
