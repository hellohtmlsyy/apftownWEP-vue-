/**
 * Created by Z97 on 2017/6/15.
 */
import Axios from 'axios'
import { getCookie } from '../commonjs/util.js'
Axios.defaults.baseURL = 'http://memberapi.apftown.com';   //接口地址
Axios.defaults.withCredentials = true; //让ajax携带cookie
Axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded;text/html;charset=UTF-8';   //配置请求头
Axios.defaults.headers['APF_UID'] = getCookie("APF_UID")
var ENV = "test"; // 控制开关,dev 开发环境，release,master环境时改为prod

export default {
  	pathUrl:function() {
	    var URLS = {
	      	dev: {
		        MJK: '/apis', //测试2.0地址
		        UPLOAD: '/upload',//测试图片上传地址
		        MC:'/mc1',//测试1.0地址
		        WEB_URL: {
		          WEB_MIAO: 'http://shw.miningcircle.com'
		        }
	      	},
	      	prod: {
		        M_APF: 'http://m.apftown.com',//小镇地址m
		        NEW: 'http://memberapi.apftown.com:8070',
		    },
	      	test: {
		        M_APF: 'http://m.apftown.com:8080',//小镇地址m
		        NEW: 'http://memberapi.apftown.com:8088',
	      	}		    
	    }
	    return URLS[ENV];
  	}
}