<template>
	<div>
		<div class="act020904" :style="{backgroundImage: 'url(' + bgurl + ')' }">
			<div class="con" :style="{bottom: bot}">
				<input type="text" placeholder="请输入手机号" class="mb-20" v-model.trim="userinfo.tel" />
				<div class="dis-fl clearfix mb-20">
					<input class="fl" type="tel" placeholder="输入验证码" v-model.trim="userinfo.msgCode">
					<button class="fr right" @click="mobileCheck()" v-show="show_time">获取验证码</button>
					<button class="fr right" v-show="!show_time">{{count}}秒重新获取</button>
				</div>
				<div class="btn" @click="signUp()" :disabled="disable">即刻报名</div>
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
				bgurl: this.$root.urlPath.M_APF + '/static/img/act/20190209/bg-4.jpg',
				bot: '0.96rem',
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
				activityNo: '20190209', //活动编号 
				invitationCode: this.$route.query.invitationCode,
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
						userFrom: '20190209'
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
											activityNo: '20190209',
											APF_UID: getCookie('APF_UID'),
										}
									})
									.then(res => {
										if (res.data.data != false) {
											this.invitationCode = res.data.data;
											this.$layer.msg('您已预订，不能重复预订!');
											var self = this;
											window.setTimeout(function() {
												window.location.href = self.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + self.invitationCode;
											}, 2000)
										} else {
											if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
												'null') {
												window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905?invitationCode=' + this.invitationCode;
											} else {
												window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905';
											}
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
								.then(res => {
									if (!res.data.success) {
										this.$layer.msg(res.data.errMsg)
									}
								})
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
		created() {
			//wx-share
			var title = '正月初五迎财神，三亚庙会等你来';
			var desc = '参加2月9日小镇财神节庙会，获得888元游园大礼包，尽享美味BBQ，还有新年烟花热情篝火';
			var imgUrl = 'http://m.apftown.com/static/img/act/20190209/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) {
						//是否预订
						this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
								params: {
									activityNo: '20190209',
									APF_UID: getCookie('APF_UID'),
								}
							})
							.then(res => {
								if (res.data.data != false) {
									this.invitationCode = res.data.data;
									this.$layer.msg('您已预订，不能重复预订!');
									var self = this;
									window.setTimeout(function() {
										window.location.href = self.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + self.invitationCode;
									}, 2000)
								} else {
									if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
										'null') {
										window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905?invitationCode=' + this.invitationCode;
									} else {
										window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905';
									}
								}
							})
							.catch(err => {
								console.log(err)
							})
					} else {
						// window.location.href = this.$root.urlPath.M_APF + '/act/act2019020904?invitationCode=' + this.invitationCode;
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			if (winHeight > 680) {
				this.bgurl = this.$root.urlPath.M_APF + '/static/img/act/20190209/bg-4-1.jpg';
				this.bot = '1.11rem';
			}
			$('.act020904').css('height', winHeight + 'px');
		},
	}
</script>
<style scoped="scoped">
	.act020904 .mb-20 {
		margin-bottom: 0.1rem;
	}

	.act020904 {
		background-size: 100% 100%;
		height: 100%;
		position: relative;
	}

	.act020904 .con {
		width: 100%;
		padding: 0 0.2rem;
	}

	.act020904 .con {
		padding: 0 0.22rem;
		position: absolute;
		left: 0;
	}

	.act020904 .con .dis-fl .right {
		width: 40%;
		text-align: center;
		height: 0.43rem;
		line-height: 0.43rem;
		border-radius: 6px;
		border: none;
		color: #fff;
		font-size: 0.15rem;
		background-image: linear-gradient(0deg,
			#ff7b00 0%,
			#f39700 100%),
			linear-gradient(#6bbe21,
			#6bbe21);
	}

	.act020904 .con input[type="text"],
	.act020904 .con input[type="tel"],
	.act020904 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 6px;
		border: solid 1px #707070;
		color: #7d7d7d;
		font-size: 0.15rem;
		padding: 0 0.18rem;
	}

	.act020904 .con input[type="tel"] {
		width: 55%;
		margin-right: 0.16rem;
	}

	.act020904 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		font-size: 0.15rem;
		text-align: center;
		color: #fff;
		padding: 0;
		border-radius: 6px;
		border: none;
		background-image: linear-gradient(0deg,
			#c11916 0%,
			#ff7b00 100%),
			linear-gradient(#ffffff,
			#ffffff);
	}
</style>
