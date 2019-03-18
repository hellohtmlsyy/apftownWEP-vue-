<template>
	<div>
		<div class="act03">
			<div class="con">
				<input type="text" placeholder="请输入手机号" class="mb-10" v-model.trim="userinfo.tel" />
				<div class="dis-fl clearfix mb-10">
					<input class="fl" type="tel" placeholder="输入验证码" v-model.trim="userinfo.msgCode">
					<button class="fr right" @click="mobileCheck()" v-show="show_time">获取验证码</button>
					<button class="fr right" v-show="!show_time">{{count}}秒重新获取</button>
				</div>
				<div class="btn" @click="signUp()" :disabled="disable">报名</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import {
		setCookie,
		getCookie,
		wxShare
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	var time = null;
	export default {
		data() {
			return {
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
				activityNo: 20180808, //活动编号 
				activityDesc: '好', //活动描述
				url: window.location.href,
			}
		},
		watch: {
			['userinfo.tel']() {
				this.mobileIsEixt = false;
				var mobile = /^1[34578]\d{9}$/;
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel) ? false : true;
				if (!this.telError) {
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
							params: {
								activityNo: this.activityNo,
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data) {
								this.mobileIsEixt = true;
								this.$layer.msg('您已报名成功，不能重复报名！');
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
		},
		methods: {
			signUp() {
				this.msg_codeError = this.userinfo.msgCode.length > 0 ? false : true;
				if (this.msg_codeError) {
					this.$layer.msg('请输入正确的验证码');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的手机号');
				}
				if (!this.telError && !this.msg_codeError && !this.mobileIsEixt) {
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
							if (res.data.success) {
								setCookie('APF_UID', res.data.data);
								//是否报名
								this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
										params: {
											activityNo: 20180808,
											APF_UID: getCookie('APF_UID'),
										}
									})
									.then(res => {
										if (res.data.data) {
											window.location.href = this.$root.urlPath.M_APF + '/act/act2018080805';
										} else {
											window.location.href = this.$root.urlPath.M_APF + '/act/act2018080804';
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
				if (!this.userinfo.tel || this.telError) {
					this.$layer.msg('请输入正确的手机号')
					return false;
				}
				var self = this;
				if (time) {
					window.clearInterval(time);
					this.count = 60;
				}
				var count = this.count;
				this.show_time = false;
				this.$axios.get(this.$root.urlPath.NEW + '/sms/getSmsPre?type=1&terminal=1')
					.then(res => {
						if (res.data.success) {
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
					if (count < 1) {
						count = 5;
						self.show_time = true;
						clearInterval(time);
					}
					self.count = count;
				}, 1000)
			},
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.act03').css('height', winHeight + 'px');
		},
		created() {
			//wx-share
			var title = '2018海南优质项目对接会,三亚亚太金融小镇等你来';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '8月31日海棠湾，三亚市政府主办，汇聚国内外优势资本，对接海南岛优质项目';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) {
						window.location.href = this.$root.urlPath.M_APF + '/act/act2018080804';
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
	}
</script>
<style scoped>
	.act03 .mb-10 {
		margin-bottom: 0.1rem;
	}

	.act03 {
		background-image: url(../../../../static/img/act/20180808/bg03.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.act03 .con {
		padding: 0 0.18rem;
		position: absolute;
		bottom: 0.44rem;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.act03 .con .dis-fl .right {
		width: 40%;
		text-align: center;
		height: 0.43rem;
		line-height: 0.43rem;
		background-color: #b0ffff;
		border-radius: 5px;
		border: solid 1px #074498;
		color: #1b1b1b;
		font-size: 0.15rem;
	}

	.act03 .con input[type="text"],
	.act03 .con input[type="tel"],
	.act03 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #074498;
		color: #7d7d7d;
		font-size: 0.15rem;
		padding: 0 0.18rem;
	}

	.act03 .con input[type="tel"] {
		width: 55%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #074498;
		margin-right: 0.16rem;
	}

	.act03 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;
		border: none;
		color: #1b1b1b;
		padding: 0;
	}
</style>
