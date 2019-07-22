<template>
	<div class="exhibitorsReg conference">
		<div class="top_bg"></div>
		<div class="content">
			<div class="entInfo mb-15">
				<div class="tit">Press information</div>
				<ul>
					<li><span class="info-t">Surname</span><input type="text" placeholder="Required" v-model.trim="userInfo.surname"></li>
					<li><span class="info-t">Given name</span><input type="text" placeholder="Required" v-model.trim="userInfo.givenName"></li>
					<li><span class="info-t">Position</span><input type="text" placeholder="Required" v-model.trim="userInfo.position"></li>
					<li><span class="info-t">Company name</span><input type="text" placeholder="Required" v-model.trim="userInfo.companyName"></li>
					<li><span class="info-t">Brand name</span><input type="text" placeholder="Required" v-model.trim="userInfo.brandName"></li>
					<li><span class="info-t">Phone</span><input type="text" placeholder="Optional" v-model.trim="userInfo.phone"></li>
					<li><span class="info-t">Mobile</span><input type="text" placeholder="Required" v-model.trim="userInfo.mobile"></li>
					<li><span class="info-t">Email</span><input type="text" placeholder="Optional" v-model.trim="userInfo.email"></li>
					<li>
						<span class="info-t">Attendance</span>
						<span class="selectBox">
							{{numberOfEnrolment}}&nbsp;&nbsp;<span>></span>
							<select name="" v-model="numberOfEnrolment" @click="change('type_select')" id="type_select">
								<option v-for="( option, index ) in number" :value="option" :key="index">{{option}}</option>
							</select>
						</span>
					</li>
				</ul>
			</div>
			<div class="complete" @click="submit()">SUBMIT</div>
		</div>
	</div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				numberOfEnrolment: 'Please choose',
				number: ['Please choose', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
				userInfo: {
					surname: '',
					givenName: '',
					position: '',
					companyName: '',
					brandName: '',
					phone: '',
					mobile: '',
					email: '',
				},
				numberError: false,
				emailError: false,
				mobileError: false,
				phoneError: false,
				brandError: false,
				companyError: false,
				positionError: false,
				surNameError: false,
				givenNameError: false,
				disable: false,
			}
		},
		methods: {
			// 下拉选项默认第一个禁止选择
			change(id) {
				$('#' + id + ' option:eq(0)').attr("disabled", true)
			},
			submit() {
				this.numberError = this.numberOfEnrolment != 'Please choose' ? false : true;
				if (this.numberError) {
					this.$layer.msg('Please select the number of participants');
				}
				this.emailError = this.userInfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userInfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('Please enter the correct mailbox');
					return;
				}
				this.mobileError = /^\d{1,16}$/.test(this.userInfo.mobile) ? false : true;
				if (this.mobileError) {
					this.$layer.msg('Please enter the correct mobile phone');
				}
				this.phoneError = /^\d{0,16}$/.test(this.userInfo.phone) ? false : true;
				if (this.phoneError) {
					this.$layer.msg('Please enter the correct telephone number');
					return;
				}
				this.brandError = /^.{1,30}$/.test(this.userInfo.brandName) ? false : true;
				if (this.brandError) {
					this.$layer.msg('Please enter the correct brand');
				}
				this.companyError = /^.{1,30}$/.test(this.userInfo.companyName) ? false : true;
				if (this.companyError) {
					this.$layer.msg('Please enter the correct business name');
				}
				this.positionError = /^.{0,30}$/.test(this.userInfo.position) ? false : true;
				if (this.positionError) {
					this.$layer.msg('Please enter the correct position');
				}
				this.givenNameError = /^.{1,30}$/.test(this.userInfo.givenName) ? false : true;
				if (this.givenNameError) {
					this.$layer.msg('Please enter the correct given name');
				}
				this.surNameError = /^.{1,20}$/.test(this.userInfo.surname) ? false : true;
				if (this.surNameError) {
					this.$layer.msg('Please enter the correct surname');
				}
				if (!this.mobileError && !this.brandError && !this.companyError && !this.positionError && !this.givenNameError && !
					this.surNameError && !this.numberError) {
					this.disable = true;
					const PARAMS = {
						serialNo: '20191131',
						contactName: this.userInfo.surName + ',' + this.userInfo.givenName,
						position: this.userInfo.position,
						companyName: this.userInfo.companyName,
						brandName: this.userInfo.brandName,
						phone: this.userInfo.phone,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						numberOfEnrolment: this.numberOfEnrolment,
						language: 1,
						APF_UID: getCookie('APF_UID'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/ee/press/submit',
						qs.stringify(PARAMS), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'APF_UID': getCookie('APF_UID'),
							}
						}
					).then(res => {
						if (res.data.success) {
							window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode_en?type=4';
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					}).catch(err => {
						console.log(err)
					})
				}
			},
		},
		mounted() {
			var winHeight = $(window).height(); // 获取当前页面高度
			if (winHeight > 740) {
				$('.exhibitorsReg').css('height', winHeight + 'px');
			}
		},
	}
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	/* content */
	.exhibitorsReg .top_bg {
		background: url('../../../../static/img/act/ee2019/media_top.jpg')no-repeat;
		background-size: 100% 100%;
	}

	.exhibitorsReg .content {
		width: 100%;
		padding: 0 .15rem .5rem;
		margin-top: -.47rem;
	}

	.exhibitorsReg .entInfo .tit {
		background-image: linear-gradient(180deg,
			#00479d 0%,
			#00a0e9 100%),
			linear-gradient(#959595,
			#959595);
	}

	.exhibitorsReg .entInfo ul {
		padding: 0 .17rem;
	}

	.exhibitorsReg .entInfo .up_logo {
		padding: .15rem 0;
	}

	.exhibitorsReg .entInfo li:last-child {
		border: none;
	}

	.exhibitorsReg .entInfo li .selectBox {
		position: relative;
	}

	.exhibitorsReg .entInfo li select {
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
	}
</style>
