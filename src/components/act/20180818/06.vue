<template>
	<div>
		<div class="act06">
			<div class="attend_expo">
				<div class="identity">
					<div class="form">
						<label for="">
							<input type="text" placeholder="姓名" v-model.trim="userinfo.name" />
						</label>
						<label for="">
							<input type="text" placeholder="单位" v-model.trim="userinfo.company" />
						</label>
						<label for="">
							<input type="tel" placeholder="手机" v-model.trim="userinfo.tel" />
						</label>
						<label for="">
							<input type="email" placeholder="邮箱" v-model.trim="userinfo.email" />
						</label>
						<label for="">
							<input type="tel" placeholder="参会人数" v-model.trim="userinfo.num" />
						</label>
					</div>
					<div class="ideCon">
						<div class="inv">
							<input type="checkbox" class="checkbox" v-model="checked" /><span>我要参加项目考察</span>
						</div>
						<label for="" v-show="checked">
							<input type="tel" placeholder="考察人数" v-model.trim="userinfo.invnum" />
						</label>
					</div>
				</div>
			</div>
			<div class="con">
				<div class="btn" @click="sub()" :disabled="disable">提交</div>
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
	export default {
		data() {
			return {
				userinfo: {
					name: '',
					company: '',
					tel: '',
					email: '',
					num: '',
					invnum: '',
				},
				selectedError: false,
				nameError: false,
				companyError: false,
				telError: false,
				emailError: false,
				numError: false,
				invnumError: false,
				active: 1,
				disable: false,
				url: window.location.href,
				checked: false,
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			sub() {
				this.invnumError = this.userinfo.invnum.length > 0 && this.userinfo.invnum > 0 && this.userinfo.invnum < 99 ? false :
					true;
				if (this.invnumError) {
					if (this.checked) {
						this.$layer.msg('请输入正确的人数');
						return
					}
				}
				this.numError = this.userinfo.num.length > 0 && this.userinfo.num > 0 && this.userinfo.num < 99 ? false : true;
				if (this.numError) {
					this.$layer.msg('请输入正确的人数');
				}
				this.emailError = this.userinfo.email.length > 0 && /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.companyError = this.userinfo.company.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company) ?
					false : true;
				if (this.companyError) {
					this.$layer.msg('请输入正确的公司名称，公司名称不得大于20字');
				}
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]+$/.test(this.userinfo.name) ? false :
					true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				if (!this.numError && !this.emailError && !this.telError && !this.companyError && !this.nameError) {
					this.disable = true;
					//是否报名
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
							params: {
								activityNo: '20180818',
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) {
								this.$layer.msg('您已报名，不能重复报名!');
								var self = this;
								this.invitationCode = res.data.data;
								window.setTimeout(function() {
									window.location.href = self.$root.urlPath.M_APF + '/act/act2018081807?invitationCode=' + this.invitationCode;
								}, 2000)
							} else {
								const params = {
									activityNo: 20180818,
									activityDesc: '2019三亚国际金融周',
									companyName: this.userinfo.company,
									contactPerson: this.userinfo.name,
									mobile: this.userinfo.tel,
									email: this.userinfo.email,
									actNumber: this.userinfo.num,
									APF_UID: getCookie('APF_UID'),
								}
								if (this.checked && !this.invnumError) {
									console.log(1)
									params['additional2'] = this.userinfo.invnum;
								}
								if (this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode != 'null') {
									params['additional4'] = this.invitationCode;
								}
								this.$axios.post(this.$root.urlPath.NEW + '/wap/activity/activitySubmit',
										qs.stringify(params), {
											headers: {
												'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
												'APF_UID': getCookie('APF_UID'),
											}
										}
									)
									.then(res => {
										if (res.data.success) {
											this.$layer.msg('恭喜您报名成功！');
											this.invitationCode = res.data.data;
											var self = this;
											window.setTimeout(function() {
												window.location.href = self.$root.urlPath.M_APF + '/act/act2018081807?invitationCode=' + self.invitationCode;
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
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.act06').css('height', winHeight + 'px');
		},
		created() {
			//wx-share
			var title = '2019三亚国际金融周-资本项目对接会';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '抛弃论坛大模式 对接资金好项目 头脑风暴等着你 十项全能挑战你——一场酣畅淋漓的金融精英嘉年华';
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
						this.userinfo.tel = res.data.data.mobile
						//是否报名
						this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
								params: {
									activityNo: '20180818',
									APF_UID: getCookie('APF_UID'),
								}
							})
							.then(res => {
								if (res.data.data != false) {
									this.invitationCode = res.data.data
									window.location.href = this.$root.urlPath.M_APF + '/act/act2018081807?invitationCode=' + this.invitationCode;
								} else {}
							})
							.catch(err => {
								console.log(err)
							})
					} else {
						if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
							'null') {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018081805?invitationCode=' + this.invitationCode;
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018081805';
						}
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
	}
</script>
<style scoped>
	.act06 .mb-10 {
		margin-bottom: 0.1rem;
	}

	.act06 {
		background-image: url(../../../../static/img/act/20180818/bg-6.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.act06 .attend_expo {
		padding: 0.85rem 0.43rem 0;
	}

	.act06 .identity .ideTit {
		width: 100%;
		text-align: center;
		font-size: 0.11rem;
		color: #fff100;
	}

	.act06 .identity .ideCon {
		width: 100%;
	}

	.act06 .identity .ideCon .inv {
		padding: 0.15rem 0;
		text-align: center;
	}

	.act06 .identity .ideCon .inv span {
		font-size: 0.15rem;
		color: #fff100;
	}

	.act06 .identity .ideCon input[type="checkbox"] {
		zoom: 1.5;
		vertical-align: middle;
		margin-right: 0.05rem;
	}

	.act06 .identity .form {
		padding-top: 0.25rem;
	}

	.act06 .identity .form select {
		width: 100%;
		height: 0.4rem;
		padding: 0 0.18rem;
		font-size: 0.15rem;
		border: solid 1px #fff100;
		border-radius: 5px;
		margin-bottom: 0.1rem;
		color: #7d7d7d;
		background-color: #fff;
	}

	.act06 .identity .form input,
	.act06 .identity .ideCon input[type="tel"] {
		width: 100%;
		height: 0.4rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #a0a0a0;
		font-size: 0.15rem;
		color: #7d7d7d;
		padding: 0 0.18rem;
		margin-bottom: 0.1rem;
	}

	.act06 .con {
		padding: 0 0.43rem;
		position: absolute;
		bottom: 0.44rem;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.act06 .con .btn {
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
