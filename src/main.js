// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "babel-polyfill";
import Moment from 'moment';
import {
	getCookie,
} from '@/assets/commonjs/util.js';
import layer from 'vue-layer';
Vue.prototype.$layer = layer(Vue);
import 'jquery';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


//全局组件
import tab0818 from '@/components/comm/0818tab';
Vue.component(tab0818.name, tab0818);
import taxhead7 from '@/components/comm/taxhead7';
Vue.component(taxhead7.name, taxhead7);
import footer from '@/components/2.0/comm/footer';
Vue.component(footer.name, footer);
//引入mint-ui框架
import MintUI from 'mint-ui'
Vue.use(MintUI)
//import 'mint-ui/lib/style.css';
import {
	Switch,
	Tabbar,
	TabItem,
	Navbar,
} from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Switch.name, Switch);
Vue.component(Tabbar.name, Tabbar);

Vue.config.productionTip = false;
// 日期选择
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)
// 图片查看器
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

//使用moment处理日期
import moment from 'moment'
//全局过滤器-------
// -- 实现日期格式化
Vue.filter('datafmt', function(input, fmtstring) {
	return moment(input).format(fmtstring);
});
// -- 超出省略
Vue.filter('subStr', function(titleStr, num) {
	if (titleStr.length <= num) return titleStr;
	else
		return titleStr.substr(0, num) + '...';
})

import Axios from 'axios';
import qs from 'qs';
Vue.prototype.API = '/api';

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面meta */
	if (to.meta.content) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		meta.content = to.meta.content;
		head[0].appendChild(meta)
	}
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}

	if (to.meta.requireAuth) { //判断路由是否需要登录权限
		if (getCookie('APF_UID')) {
			next();
		} else {
			next({
				path: '/login',
				query: {
					returnUrl: to.fullPath
				} //将跳转的路由path作为参数回跳
			})
		}
	}

	next()
});

//挂载
Object.defineProperty(Vue.prototype, '$axios', {
	get() {
		return Axios;
	}
});
Axios.defaults.withCredentials = true;
import rootPath from './assets/config/api.js'; //接口路径

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	data: {
		urlPath: rootPath.pathUrl()
	},
})
