<template>
	<div class="entEntry02">
		<div class="content">
			<div class="title"><img src="../../../../static/img/2.0/enterpriseEntry/2-1.png" alt="填写企业信息" class="img-w20">填写企业信息</div>
			<div class="form">
				<div class="clearfix">
					<div class="dis-fl">
						<span>入驻类型</span>
						<div class="fles-1">
							<span :class="{ radio_active: type == 0 }" class="radio_item mr-50" @click="tabType(0)">新设</span>
							<span :class="{ radio_active: type == 1 }" class="radio_item" @click="tabType(1)">迁址</span>
						</div>
					</div>
					<div class="dis-fl">
						<span>基金种类</span>
						<div class="fles-1">
							<span :class="{ radio_active: fund_type == 0 }" class="radio_item mr-20 mb-15" @click="tabFund_type(0)">私募创业</span>
							<span :class="{ radio_active: fund_type == 1 }" class="radio_item mb-15" @click="tabFund_type(1)">私募证券</span>
							<span :class="{ radio_active: fund_type == 2 }" class="radio_item mr-20" @click="tabFund_type(2)">股权投资</span>
							<span :class="{ radio_active: fund_type == 3 }" class="radio_item" @click="tabFund_type(3)">其他种类</span>
						</div>
					</div>
					<div class="dis-fl"><span>企业名称</span><input type="text" placeholder="请输入公司名称" class="" v-model.trim="userinfo.company" /></div>
					<div class="dis-fl"><span>联系姓名</span><input type="text" placeholder="请输入联系人姓名" class="" v-model.trim="userinfo.name" /></div>
					<div class="dis-fl"><span>手机号码</span><input type="text" placeholder="请添加手机号码" class="" v-model.trim="userinfo.mobile" /></div>
					<div class="dis-fl"><span>回执邮箱</span><input type="text" placeholder="请添加回执邮箱" class="" v-model.trim="userinfo.email" /></div>
				</div>
				<div class="btn" @click="signUp()" :disabled="disable">提交</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		setCookie,
		getCookie,
		wxShare
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				url: window.location.href,
				userinfo: { //用户信息
					company: '',
					name: '',
					mobile: '',
					email: '',
				},
				companyError: false, //企业名称错误
				nameError: false, //姓名错误
				emailError: false, //邮箱错误
				telError: false, //手机号错误
				disable: false,
				type: 0,
				fund_type: 0,
			}
		},
		methods: {
			tabType(num) { //入驻类型单选
				this.type = num;
			},
			tabFund_type(num) { //基金种类单选
				this.fund_type = num;
			},
			//提交
			signUp() {
				this.emailError = this.userinfo.email.length > 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.mobile.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.mobile) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的电话');
				}
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userinfo.name) ? false :
					true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				this.companyError = this.userinfo.company.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company) ?
					false : true;
				if (this.companyError) {
					this.$layer.msg('请输入正确的公司名称，公司名称不得大于20字');
				}
				if (!this.emailError && !this.telError && !this.nameError) {
					this.disable = true;
					this.$axios.get(this.$root.urlPath.NEW + '/wap/company/settledIn/submitAlready', {
							params: {
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) {
								this.$layer.msg('您已提交，不能重复提交!');
								var self = this;
								window.setTimeout(function() {
									window.location.href = self.$root.urlPath.M_APF + '/EnterpriseEntry/03';
								}, 2000)
							} else {
								const params = {
									APF_UID: getCookie('APF_UID'),
									typeOfEntity: this.type,
									fundType: this.fund_type,
									company: this.userinfo.company,
									contactPerson: this.userinfo.name,
									mobile: this.userinfo.mobile,
									email: this.userinfo.email,
								}
								this.$axios.post(this.$root.urlPath.NEW + '/wap/company/settledIn/application',
										qs.stringify(params), {
											headers: {
												'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
												'APF_UID': getCookie('APF_UID'),
											}
										}
									)
									.then(res => {
										if (res.data.success) {
											this.$layer.msg('恭喜您提交成功！');
											var self = this;
											window.setTimeout(function() {
												window.location.href = self.$root.urlPath.M_APF + '/EnterpriseEntry/03';
											}, 2000)
										} else {
											this.$layer.msg(res.data.errMsg);
										}
									})
									.catch(err => {
										console.log(err)
									})
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
		},
		created() {
			//wx-share
			var title = '亚太金融小镇欢迎您，诚邀各基金入驻';
			var desc = '面朝大海春暖花开，快速基金注册，轻松三亚培训，惬意海棠生活 ';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			// 是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
			.then(res => {
				if (res.data.success) { //已登录
					this.userinfo.mobile = res.data.data.mobile;
					//是否提交
					this.$axios.get(this.$root.urlPath.NEW + '/wap/company/settledIn/submitAlready', {
							params: {
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) { //已提交
								this.$layer.msg('您已提交，不能重复提交!');
								var self = this;
								window.setTimeout(function() {
									window.location.href = self.$root.urlPath.M_APF + '/EnterpriseEntry/03';
								}, 2000)
							} else { //未提交
								// window.location.href = this.$root.urlPath.M_APF + '/EnterpriseEntry/02';
							}
						})
						.catch(err => {
							console.log(err)
						})
				} else { //未登录
					window.location.href = this.$root.urlPath.M_APF + '/login?returnUrl=/EnterpriseEntry/02';
				}
			})
			.catch(err => {
				console.log(err)
			});
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.entEntry02 .form .active {
		color: #fff;
		background-color: #00a0e9;
		border: solid 1px #00a0e9;
	}

	.entEntry02 .img-w20 {
		width: .2rem;
		margin-right: .07rem;
		margin-top: -0.01rem;
	}

	.entEntry02 {
		background-color: #eee;
		padding: .1rem .08rem .25rem;
	}

	.entEntry02 .content {
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 0px 5px 0px #b5b5b5;
		border-radius: .1rem;
		padding-bottom: .72rem;
	}

	.entEntry02 .content .title {
		width: 100%;
		background-image: linear-gradient(-90deg,
			#00c0d1 0%,
			#1e27e5 100%),
			linear-gradient(#292933,
			#292933);
		font-size: .16rem;
		color: #fff;
		padding: .087rem .13rem;
		border-radius: .1rem .1rem 0 0;
	}

	.entEntry02 .content .form {
		padding: 0 .22rem;
		margin-bottom: .48rem;
	}

	.entEntry02 .form .dis-fl {
		padding: .2rem 0;
		font-size: .15rem;
		color: #666;
		border-bottom: 1px solid #c1c1c1;
	}

	.entEntry02 .form .fles-1 {
		margin-left: .3rem;
	}

	.entEntry02 .form .radio_item {
		padding: 0 .1rem;
		border-radius: .1rem;
		border: solid 1px #a0a0a0;
		color: #aaa;
		font-size: .15rem;
	}

	.entEntry02 .form .radio_active {
		border: solid 1px #00a0e9;
		color: #09a2e9;
	}

	.entEntry02 .form .dis-fl input[type="text"] {
		flex: 1;
		margin-left: .3rem;
		border: none;
		font-size: 0.13rem;
		color: #aaa;
	}

	.entEntry02 .form .dis-fl input::-webkit-input-placeholder {
		color: #aaa;
	}

	.entEntry02 .form .dis-fl input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #aaa;
	}

	.entEntry02 .form .dis-fl input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #aaa;
	}

	.entEntry02 .form .dis-fl input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #aaa;
	}

	.entEntry02 .form .btn {
		width: 100%;
		height: .44rem;
		line-height: .44rem;
		background-image: linear-gradient(90deg,
			#00c6ff 0%,
			#00a0e9 100%),
			linear-gradient(#f39800,
			#f39800);
		border-radius: .05rem;
		color: #fff;
		font-size: 0.18rem;
		text-align: center;
		border: none;
		margin-top: .48rem;
	}
</style>
