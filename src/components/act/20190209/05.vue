<template>
	<div>
		<div class="act020905">
			<div class="tit">
				<img src="../../../../static/img/act/20190209/4-tit.png" alt="">
			</div>
			<div class="form">
				<label for="">
					<input type="text" placeholder="姓名" v-model.trim="userinfo.name" />
				</label>
				<label for="">
					<input type="tel" placeholder="电话" v-model.trim="userinfo.tel" />
				</label>
				<label for="">
					<input type="email" placeholder="邮箱(选填)" v-model.trim="userinfo.email" />
				</label>
				<label for="">
					<input type="text" placeholder="公司名称" v-model.trim="userinfo.company" />
				</label>
				<label for="">
					<input type="tel" placeholder="家庭人数" v-model.trim="userinfo.num" />
				</label>
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
					tel: '',
					email: '',
					company: '',
					num: '',
				},
				selectedError: false,
				nameError: false,
				companyError: false,
				telError: false,
				emailError: false,
				numError: false,
				active: 1,
				disable: false,
				url: window.location.href,
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			sub() {
				this.numError = this.userinfo.num.length > 0 && this.userinfo.num > 0 && this.userinfo.num < 99 ? false : true;
				if (this.numError) {
					this.$layer.msg('请输入正确的人数');
				}
				this.companyError = this.userinfo.company.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company) ?
					false : true;
				if (this.companyError) {
					this.$layer.msg('请输入正确的公司名称，公司名称不得大于20字');
				}
				this.emailError = this.userinfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的电话');
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
								activityNo: '20190209',
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) {
								this.$layer.msg('您已报名，不能重复报名!');
								this.invitationCode = res.data.data;
								var self = this;
								window.setTimeout(function() {
									window.location.href = self.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + self.invitationCode;
								}, 2000)
							} else {
								const params = {
									activityNo: 20190209,
									activityDesc: '初五迎财神金融庙会',
									companyName: this.userinfo.company,
									contactPerson: this.userinfo.name,
									mobile: this.userinfo.tel,
									email: this.userinfo.email,
									actNumber: this.userinfo.num,
									APF_UID: getCookie('APF_UID'),
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
												window.location.href = self.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + self.invitationCode;
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
			$('.act020905').css('height', winHeight + 'px');
		},
		created() {
			//wx-share
			var title = '正月初五迎财神，福禄寿喜进家门';
			var desc = '参加2月9日小镇财神节庙会，获得888元游园大礼包，尽享美味BBQ，还有新年烟花热情篝火';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
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
									activityNo: '20190209',
									APF_UID: getCookie('APF_UID'),
								}
							})
							.then(res => {
								if (res.data.data != false) { //登录已报名
									this.invitationCode = res.data.data;
									window.location.href = this.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + this.invitationCode;
								} else { //登录未报名
									// window.location.href = this.$root.urlPath.M_APF + '/act/act2019020906;
								}
							})
							.catch(err => {
								console.log(err)
							})
					} else { //未登录
						if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
							'null') {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2019020904?invitationCode=' + this.invitationCode;
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2019020904';
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
	.mb-20 {
		margin-bottom: 0.1rem;
	}

	.act020905 {
		height: 100%;
		width: 100%;
		background-color: #a40000;
		padding: 0 0.4rem;
	}

	.act020905 .tit {
		text-align: center;
	}

	.act020905 .tit img {
		width: 2.02rem;
		margin: 0.21rem 0 0.25rem;
	}

	.act020905 .form input,
	.act020905 .form input[type="tel"] {
		width: 100%;
		height: 0.4rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #a0a0a0;
		font-size: 0.15rem;
		color: #7d7d7d;
		padding: 0 0.18rem;
		margin-bottom: 0.12rem;
	}

	.act020905 .con {
		margin-top: 0.45rem;
	}

	.act020905 .con .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-image: linear-gradient(0deg,
			#c11916 0%,
			#ff7b00 100%),
			linear-gradient(#ffffff,
			#ffffff);
		border-radius: 6px;
		font-size: 0.15rem;
		text-align: center;
		border: none;
		color: #fff;
		padding: 0;
	}
</style>
