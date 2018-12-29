<template>
	<div>
		<div class="act_train04">
			<div class="tit">
				<img src="../../../../static/img/act/20181008/4-title.png"/>
			</div>
			<div class="text">
				<img src="../../../../static/img/act/20181008/4-1.png" alt="" />
			</div>
			<div class="con">
				<input type="text" placeholder="请输入手机号" class="mb-20" v-model.trim="userinfo.tel" />
				<div class="dis-fl clearfix mb-20">
					<input class="fl" type="tel" placeholder="输入验证码" v-model.trim="userinfo.msgCode">
					<button class="fr right" @click="mobileCheck()" v-show="show_time">获取验证码</button>
					<button class="fr right" v-show="!show_time">{{count}}秒重新获取</button>
				</div>
				<div class="btn" @click="signUp()" :disabled="disable">预订</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import { setCookie, getCookie, wxShare } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	var time = null;
	export default {
		data(){
			return {
				url: window.location.href,
				userinfo: {
					tel: '',
					msgCode: '',
				},
				disable: false,
				telError: false, //手机号错误
				msg_codeError: false, //短信验证码
				mobileIsEixt: false,
				count: 60,
				show_time: true,
				activityNo: '20181008', //活动编号 
			}
		},
		watch: {
			['userinfo.tel']() {
				this.mobileIsEixt = false;
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel) ? false : true;
			},
		},
		methods: {
			signUp() {
				this.msg_codeError = this.userinfo.msgCode.length > 0 ? false : true;
				if(this.msg_codeError) {
					this.$layer.msg('请输入正确的验证码');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if(this.telError) {
					this.$layer.msg('请输入正确的手机号');
				}
				if(!this.telError && !this.msg_codeError && !this.mobileIsEixt) {
					this.disable = true;
					const params = {
						account: this.userinfo.tel,
						msgCode: this.userinfo.msgCode,
						APF_SMS: getCookie('APF_SMS'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/wap/login/registerOrLogin',
							qs.stringify(params), {
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
									'APF_SMS': getCookie('APF_SMS'),
								}
							}
						)
						.then(res => {
							if(res.data.success) {
								setCookie('APF_UID', res.data.data);
								//是否报名
								this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
										params: {
											activityNo: '20181008',
											APF_UID: getCookie('APF_UID'),
										}
									})
									.then(res => {
										if(res.data.data!=false) {
											this.$layer.msg('您已预订，不能重复预订!');
											var self = this;
											window.setTimeout(function(){
												window.location.href = self.$root.urlPath.M_APF + '/act/act2018100806';
											},2000)
										} else {
											window.location.href = this.$root.urlPath.M_APF + '/act/act2018100805';
										}
									})
									.catch(err => {
										console.log(err)
									})
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
			mobileCheck() {
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel) ? false : true;
				if(!this.userinfo.tel || this.telError) {
					this.$layer.msg('请输入正确的手机号')
					return false;
				}
				var self = this;
				if(time) {
					window.clearInterval(time);
					this.count = 60;
				}
				var count = this.count;
				this.show_time = false;
				this.$axios.get(this.$root.urlPath.NEW + '/sms/getSmsPre?type=1&terminal=1')
					.then(res => {
						if(res.data.success) {
							setCookie('APF_SMS', res.data.data);
							const params = {
								mobile: this.userinfo.tel,
								APF_SMS: getCookie('APF_SMS')
							};
							this.$axios.post(this.$root.urlPath.NEW + '/sms/sms?type=1&terminal=1',
									qs.stringify(params), {
										headers: {
											'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
											'APF_SMS': getCookie('APF_SMS')
										}
									}
								)
								.then(res => {})
						} else {
							this.$layer.msg('您输入的账户或者验证码不正确');
						}
					})
					.catch(err => {
						this.disable = false;
					})

				time = setInterval(function() {
					self.time = count;
					Vue.set([self.time], 'time', count)
					count--
					if(count < 1) {
						count = 5;
						self.show_time = true;
						clearInterval(time);
					}
					self.count = count;
				}, 1000)
			},
		},
		created(){
			//wx-share
		    var title = '亚太金融小镇培训基地欢迎您';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '白天面朝大海，夜晚仰望星空，上课金融学习，下课资本沙龙，来三亚度过一段难忘同窗时光';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
			
			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			})
			.then(res => {
				if(res.data.success) {
					//是否预订
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: '20181008',
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if(res.data.data!=false) {
							this.$layer.msg('您已预订，不能重复预订!');
							var self = this;
							window.setTimeout(function(){
								window.location.href = self.$root.urlPath.M_APF + '/act/act2018100806';
							},2000)
						} else {
							window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100805';
						}
					})
					.catch(err => {
						console.log(err)
					})
				}else{
//					window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100804';
				}
			})
			.catch(err => {
				console.log(err)
			});
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.act_train04').css('height', winHeight + 'px');
		},
	}
</script>
<style scoped="scoped">
	@import url("../../../../static/css/reset.css");
	.mb-20 {
		margin-bottom: 0.1rem;
	}
	.act_train04{
		background-color: #eee;
		padding: 0.15rem 0;
		height: 100%;
		position: relative;
	}
	.act_train04 .tit img{
		height: 0.37rem;
		margin-bottom: 0.11rem;
	}
	.act_train04 .text,.act_train04 .con{
		width: 100%;
		padding: 0 0.2rem;
	}
	.act_train04 .text img{
		width: 100%;
		box-shadow: 6px 5px 8px 0px 
		rgba(42, 56, 30, 0.15);
		border-radius: 8px;
	}
	.act_train04 .con {
		padding: 0 0.18rem;
		position: absolute;
		bottom: 0.2rem;
		left: 0;
	}
	.act_train04 .con .dis-fl .right {
		width: 40%;
		text-align: center;
		height: 0.43rem;
		line-height: 0.43rem;
		background-color: #6bbe21;
		border-radius: 5px;
		border: none;
		color: #fff;
		font-size: 0.15rem;
	}
	.act_train04 .con input[type="text"],
	.act_train04 .con input[type="tel"],
	.act_train04 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #707070;
		color: #7d7d7d;
		font-size: 0.15rem;
		padding: 0 0.18rem;
	}
	.act_train04 .con input[type="tel"] {
		width: 55%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #707070;
		margin-right: 0.16rem;
	}
	.act_train04 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		font-size: 0.18rem;
		text-align: center;
		color: #6bbe21;
		padding: 0;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #707070;
	}
</style>