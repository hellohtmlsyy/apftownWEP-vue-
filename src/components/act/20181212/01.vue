<template>
	<div class="act_ld1">
		<div class="login">
			<input type="text" placeholder="请输入手机号" class="mb-20" v-model.trim="userinfo.tel" />
			<div class="dis-fl clearfix mb-20">
				<input class="fl" type="tel" placeholder="输入验证码" v-model.trim="userinfo.msgCode">
				<button class="fr right" @click="mobileCheck()" v-show="show_time">获取验证码</button>
				<button class="fr right" v-show="!show_time">{{count}}秒重新获取</button>
			</div>
			<div class="btn" @click="toLogin()" :disabled="disable">立即参加抽奖</div>
		</div>
		<form class="form">
			<div class="tit">金融选择题</div>
			<div>
				<div class="key">1、2018中共中央国务院《关于支持海南全面深化改革开放的指导意见》，确立海南自贸区、中国自贸港成立，是几月几日确立的?</div>
				<div class="itemBox">
					<input id="po1" type="radio" name="problem1" value="problem1" v-model="userpo.po1">
					<label for="po1"></label>
					<span class="val"><span>A</span>2017年4月11日</span>
				</div>
				<div class="itemBox">
					<input id="po2" type="radio" name="problem1" value="problem11" v-model="userpo.po1">
					<label for="po2"></label>
					<span class="val"><span>B</span>2017年5月13日</span>
				</div>
				<div class="itemBox">
					<input id="po3" type="radio" name="problem1" value="problem111" v-model="userpo.po1">
					<label for="po3"></label>
					<span class="val"><span>C</span>2018年4月11日</span>
				</div>
				<div class="itemBox">
					<input id="po4" type="radio" name="problem1" value="problem1111" v-model="userpo.po1">
					<label for="po4"></label>
					<span class="val"><span>D</span>2018年5月13日</span>
				</div>
			</div>{{userpo.po1}}

			<div>
				<div class="key">2、三亚市政府对入驻亚太金融小镇的企业提供总计多少年的税收返还优惠?</div>
				<div class="itemBox">
					<input id="pt1" type="radio" name="problem2" value="" v-model="userpo.po2">
					<label for="pt1"></label>
					<span class="val"><span>A</span>7年</span>
				</div>
				<div class="itemBox">
					<input id="pt2" type="radio" name="problem2" value="" v-model="userpo.po2">
					<label for="pt2"></label>
					<span class="val"><span>B</span>8年</span>
				</div>
				<div class="itemBox">
					<input id="pt3" type="radio" name="problem2" value="" v-model="userpo.po2">
					<label for="pt3"></label>
					<span class="val"><span>C</span>9年</span>
				</div>
				<div class="itemBox">
					<input id="pt4" type="radio" name="problem2" value="" v-model="userpo.po2">
					<label for="pt4"></label>
					<span class="val"><span>D</span>10年</span>
				</div>
			</div>

			<div>
				<div class="key">3、亚太金融小镇基金企业入驻需要哪方面的人亲自到场?</div>
				<div class="itemBox">
					<input id="pth1" type="radio" name="problem3" value="" v-model="userpo.po3">
					<label for="pth1"></label>
					<span class="val"><span>A</span>企业法人</span>
				</div>
				<div class="itemBox">
					<input id="pth2" type="radio" name="problem3" value="" v-model="userpo.po3">
					<label for="pth2"></label>
					<span class="val"><span>B</span>企业股东</span>
				</div>
				<div class="itemBox">
					<input id="pth3" type="radio" name="problem3" value="" v-model="userpo.po3">
					<label for="pth3"></label>
					<span class="val"><span>C</span>第三方机构</span>
				</div>
				<div class="itemBox">
					<input id="pth4" type="radio" name="problem3" value="" v-model="userpo.po3">
					<label for="pth4"></label>
					<span class="val"><span>D</span>以上皆不需要</span>
				</div>
			</div>

			<div class="tac">
				<button class="btn" type="button" @click="sub()">选好了，提交</button>
			</div>
			<div class="tac">
				<span class="lookprompt" @click="prompt()">点我查看提示</span>
			</div>
		</form>

		<div class="tips" v-show="tipsShow" style="position: fixed;top:50%;left: 50%;" @click="prompt()">
			提示
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
				tipsShow: false,
				islogin: true,
				bgurl: this.$root.urlPath.M_APF + '/static/img/20181031/bg-5-1.jpg',
				url: window.location.href,
				userinfo: {
					tel: '',
					msgCode: '',
				},
				userpo: {
					po1: '',
					po2: '',
					po3: '',
				},
				disable: false,
				telError: false, //手机号错误
				msg_codeError: false, //短信验证码
				mobileIsEixt: false,
				count: 60,
				show_time: true,
				activityNo: '20181212', //活动编号 
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
			toLogin() {
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
											activityNo: '20181212',
											APF_UID: getCookie('APF_UID'),
										}
									})
									.then(res => {
										if (res.data.data != false) {
											this.$layer.msg('您已参加，不能重复参加!');
											this.islogin = true;
											return;
										} else {
											this.islogin = false;
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
			prompt() {
				this.tipsShow = !this.tipsShow;
			},
			sub(){},
		},
		created() {
			//wx-share
			var title = '亚太金融小镇民宿欢迎您';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '白天面朝大海，夜晚仰望星空，田野行歌慢板 书香春暖花开，等你来三亚度过一段难忘休闲时光';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			})
			.then(res => {
				if (res.data.success) { //已登录
					//是否预订
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
							params: {
								activityNo: '20181031',
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) {
								this.$layer.msg('您已预订，不能重复预订!');
								this.islogin = true;
							} else { //未预订
								this.islogin = false;
							}
						})
						.catch(err => {
							console.log(err)
						})
				} else { //未登录
					this.islogin = true;
				}
			})
			.catch(err => {
				console.log(err)
			});
		}
	}
</script>
<style scoped>
	.tac {
		text-align: center;
	}

	@import url("../../../../static/css/reset.css");

	.mb-20 {
		margin-bottom: 0.1rem;
	}

	.act_ld1 {
		width: 100%;
		height: 100%;
		background-color: #9595ff;
		padding: 0.25rem;
	}

	.act_ld1 .login {
		width: 100%;
		padding: 0 0.37rem;
	}

	.act_ld1 .login .dis-fl .right {
		width: 40%;
		text-align: center;
		height: 0.43rem;
		line-height: 0.43rem;
		background-color: #00A0E9;
		border-radius: 5px;
		border: none;
		color: #fff;
		font-size: 0.15rem;
	}

	.act_ld1 .login input[type="text"],
	.act_ld1 .login input[type="tel"],
	.act_ld1 .login .btn {
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

	.act_ld1 .login input[type="tel"] {
		width: 55%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #707070;
		margin-right: 0.16rem;
	}

	.act_ld1 .login .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		font-size: 0.18rem;
		text-align: center;
		color: #00A0E9;
		padding: 0;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #707070;
	}



	.act_ld1 .form {
		background-color: #fff;
		border: 1px solid #FF5722;
		border-radius: 0.05rem;
		padding: 0.2rem 0.1rem;
	}

	.act_ld1 .form .tit {
		text-align: center;
		font-weight: 600;
		font-size: 0.22rem;
		color: #FF5722;
		margin-bottom: 0.15rem;
	}

	.act_ld1 .form .key {
		font-weight: 600;
		line-height: 1.5;
		font-size: 0.12rem;
		margin: 0.15rem 0;
	}

	.act_ld1 .itemBox {
		position: relative;
		line-height: 30px;
		margin-left: 0.25rem;
	}

	.act_ld1 .itemBox .val {
		margin-left: 0.08rem;
		font-size: 0.14rem;
	}

	.act_ld1 .itemBox .val span {
		font-weight: 600;
		margin-right: 0.1rem;
	}

	.act_ld1 .form .btn {
		width: 90%;
		background: #FF5722;
		color: #fff;
		font-size: 0.14rem;
		padding: 0.08rem 0;
		border: none;
		border-radius: 0.03rem;
	}

	.act_ld1 .form .lookprompt {
		font-size: 0.14rem;
		color: #0000FF;
		border-radius: 0.02rem;
		border: 1px solid #0000FF;
		padding: 0 0.05rem;
		margin: 0.15rem 0;
	}

	.act_ld1 input[type="radio"] {
		width: 16px;
		height: 16px;
		opacity: 0;
	}

	.act_ld1 label {
		position: absolute;
		left: 5px;
		top: 6px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 1px solid #999;
	}

	/*设置选中的input的样式*/
	/* + 是兄弟选择器,获取选中后的label元素*/
	.act_ld1 input:checked+label {
		background-color: #fff;
		border: 1px solid #FF5722;
	}

	.act_ld1 input:checked+label::after {
		position: absolute;
		content: "";
		width: 3px;
		height: 7px;
		top: 2px;
		left: 5px;
		border: 2px solid #FF5722;
		border-top: none;
		border-left: none;
		transform: rotate(45deg)
	}
</style>
