<template>
	<div class="login">
		<div class="logo">
			<img src="../../../../static/img/2.0/login/logo.png" alt="" class="img-w79">
		</div>
		<div class="form">
			<div class="dis-fl item">
				<label for=""></label>
				<img src="../../../../static/img/2.0/login/icon1.png" alt="" class="img-h20">
				<input type="text" placeholder="请输入手机号" v-model.trim="userinfo.tel">

			</div>
			<div class="dis-fl item">
				<label for=""></label>
				<img src="../../../../static/img/2.0/login/icon2.png" alt="" class="img-h20">
				<input type="text" placeholder="请输入验证码" v-model.trim="userinfo.code">
				<span class="getcode" @click="getcode()" v-show="show_time">获取验证码</span>
				<span class="getcode" v-show="!show_time">{{ count }}秒重新获取</span>
			</div>
			<button type="button" class="sub" @click="sub()" :disabled="disable">登录</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import qs from 'qs';
	import {
		isDevice,
		wxShare,
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	let time = null;
	let mobile = /^1[34578]\d{9}$/;
	export default {
		beforeRouteEnter(to, from, next) {
			next(vm => {
				// 通过 `vm` 访问组件实例
				if (isDevice() == '微信浏览器') {} else {
					next()
				}
			})
		},
		data() {
			return {
				isShow: true,
				url: window.location.href,
				userinfo: {
					tel: '',
					code: ''
				},
				show_time: true,
				disable: false,
				telError: false, //手机号错误
				codeError: false, //验证码错误
				count: 60,
				code: '',
				apf_UID: '',
				apf_WX_OID: '',
				returnUrl: this.$route.query.returnUrl,
				isLog: this.$route.query.log,

			};
		},
		watch: {
			['userinfo.tel']() {
				this.telError = this.userinfo.tel.length == 11 && mobile.test(this.userinfo.tel) ? false : true;
			}
		},
		methods: {
			getcode() {
				if (!this.userinfo.tel || this.telError) {
					this.$layer.msg('请输入正确的手机号');
					return false;
				}
				let self = this;
				if (time) {
					window.clearInterval(time);
					this.count = 60;
				}
				let count = this.count;
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
									if (!res.data.success) this.$layer.msg(res.data.errMsg);
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
			sub() {
				this.codeError = this.userinfo.code.length > 0 ? false : true;
				if (this.codeError) {
					this.$layer.msg('请输入正确的验证码');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的手机号');
				}
				if (!this.telError && !this.codeError) {
					this.disable = true;
					const params = {
						account: this.userinfo.tel,
						msgCode: this.userinfo.code,
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
								this.apf_UID = res.data.data;
								if (this.isLog) {
									let params = {
										APF_WX_OID: getCookie('APF_WX_OID'),
										APF_UID: this.apf_UID
									};
									this.$axios.post(this.$root.urlPath.NEW + '/wx/bindingUser',
											qs.stringify(params))
										.then(res => {
											if (res.data.success) {
												setCookie('APF_UID', this.apf_UID);
												setCookie('APF_WX_OID', this.apf_WX_OID);
												if (this.returnUrl) {
													if (this.$route.query.type) {
														location.href = this.$root.urlPath.M_APF + this.returnUrl + '?type=' + this.$route.query.type;
														console.log(this.$root.urlPath.M_APF + this.returnUrl + '?type=' + this.$route.query.type)
													} else {
														location.href = this.$root.urlPath.M_APF + this.returnUrl;
													}
												} else {
													location.href = this.$root.urlPath.M_APF + '/user/center';
												}
											} else {
												if (res.data.errCode == '001006005' || res.data.errCode == '001006014' || res.data.errCode == '001006015' ||
													res.data.errCode == '001006016' || res.data.errCode == '001006017') {
													this.$layer.msg(res.data.errMsg);
												}
											}
										})
										.catch(err => {
											console.log(err)
										})
								} else {
									setCookie('APF_UID', res.data.data);
									if (this.returnUrl) {
										if (this.$route.query.type) {
											location.href = this.$root.urlPath.M_APF + this.returnUrl + '?type=' + this.$route.query.type;
										} else {
											location.href = this.$root.urlPath.M_APF + this.returnUrl;
										}
									} else {
										location.href = this.$root.urlPath.M_APF + '/user/center';
									}
								}
							} else {
								if (res.data.errCode == '001001017' || res.data.errCode == '001001018') {
									this.$layer.msg(res.data.errMsg);
								}
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度
			$('.login').css('height', winHeight + 'px');
		},
		created() {
			if (getCookie('APF_UID')) {
				if (this.returnUrl) {
					if (this.$route.query.type) {
						location.href = this.$root.urlPath.M_APF + this.returnUrl + '?type=' + this.$route.query.type;
					} else {
						location.href = this.$root.urlPath.M_APF + this.returnUrl;
					}
				} else {
					location.href = this.$root.urlPath.M_APF + '/user/center';
				}
			}
		},
	}
</script>

<style>
	.login .img-w79 {
		width: 0.79rem;
	}

	.login .img-h20 {
		height: 0.2rem;
	}

	.login {
		background: #fff;
	}

	.login .logo {
		text-align: center;
		width: 100%;
		padding-top: 0.38rem;
		margin-bottom: 0.88rem;
	}

	.login .form {
		padding: 0 0.3rem;
	}

	.login .form .item {
		align-items: center;
		border-bottom: 1px solid #d2d2d2;
		padding: 0.1rem 0;
		margin: 0 0.07rem 0.19rem;
	}

	.login .form input[type="text"] {
		border: none;
		font-size: 0.15rem;
		color: #707070;
		;
		margin-left: 0.15rem;
		flex: 1;
		letter-spacing: 2px;
	}

	.login .form .getcode {
		color: #7ecef4;
		font-size: 0.14rem;
	}

	.login .form .sub {
		height: 0.44rem;
		width: 100%;
		line-height: 0.44rem;
		text-align: center;
		color: #fff;
		font-size: 0.18rem;
		background-image: linear-gradient(90deg,
			#00c6ff 0%,
			#00a0e9 100%),
			linear-gradient(#f39800,
			#f39800);
		border-radius: 0.05rem;
		border: none;
		margin-top: 0.88rem;
	}
</style>
