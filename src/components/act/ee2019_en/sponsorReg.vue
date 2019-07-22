<template>
	<div class="exhibitorsReg conference sponsor_en">
		<div class="top_bg"></div>
		<div class="content">
			<div class="entInfo mb-15">
				<div class="tit">Sponsor information</div>
				<ul>
					<li><span class="info-t">Surname</span><input type="text" placeholder="Required" v-model.trim="userInfo.surname"></li>
					<li><span class="info-t">Given name</span><input type="text" placeholder="Required" v-model.trim="userInfo.givenName"></li>
					<li><span class="info-t">Position</span><input type="text" placeholder="Optional" v-model.trim="userInfo.position"></li>
					<li><span class="info-t">Company name</span><input type="text" placeholder="Required" v-model.trim="userInfo.companyName"></li>
					<li><span class="info-t">Mobile</span><input type="text" placeholder="Required" v-model.trim="userInfo.mobile"></li>
					<li><span class="info-t">Email</span><input type="text" placeholder="Optional" v-model.trim="userInfo.email"></li>
					<li>
						<span class="info-t">Attendance</span>
						<span class="selectBox">
							{{numberOfEnrolment}}&nbsp;&nbsp;<span>></span>
							<select name="" v-model="numberOfEnrolment" id="type_select" @click="change('type_select')">
								<option v-for="( option, index ) in number" :value="option" :key="index">{{option}}</option>
							</select>
						</span>
					</li>
					<li>
						<span class="info-t">Sponsorship level</span>
						<span class="selectBox">
							{{sponsorLevel}}&nbsp;&nbsp;<span>></span>
							<select name="" v-model="sponsorLevel" id="type_select">
								<option v-for="( item, index ) in level" :value="item" :key="index">{{item}}</option>
							</select>
						</span>
					</li>
					<li class="equity">
						<span class="info-t">Sponsor's Rights And Interests</span>
						<span>
							<span class="mb-5">{{sponsorLevel == 'Diamond'? 'Speech at the Round Table Forum' : (sponsorLevel == 'Platinum'? 'Speech on panel discussion' : 'Opportunities for Project Roadshow')}}</span><br />
							<span class="mb-5">Depends on sponsorship level enjoy the best position large area and special installation of
								exhibition booth</span><br />
							<span>Display on the background panel of E&E conference advertising online and offline</span>
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
				operate: this.$route.query.operate,
				numberOfEnrolment: 'Please choose',
				number: ['Please choose', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
				sponsorLevel: 'Diamond',
				level: ['Gold', 'Platinum', 'Diamond'],
				userInfo: {
					surname: '',
					givenName: '',
					position: '',
					companyName: '',
					mobile: '',
					email: '',
				},
				numberError: false,
				emailError: false,
				mobileError: false,
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
				this.companyError = /^.{1,30}$/.test(this.userInfo.companyName) ? false : true;
				if (this.companyError) {
					this.$layer.msg('Please enter the correct business name');
				}
				this.positionError = /^.{0,30}$/.test(this.userInfo.position) ? false : true;
				if (this.positionError) {
					this.$layer.msg('Please enter the correct position');
					return;
				}
				this.givenNameError = /^.{1,30}$/.test(this.userInfo.givenName) ? false : true;
				if (this.givenNameError) {
					this.$layer.msg('Please enter the correct given name');
				}
				this.surNameError = /^.{1,20}$/.test(this.userInfo.surname) ? false : true;
				if (this.surNameError) {
					this.$layer.msg('Please enter the correct surname');
				}
				if (!this.mobileError && !this.surNameError && !this.givenNameError && !this.companyError && !this.numberError) {
					this.disable = true;
					const params = {
						serialNo: '20191131',
						contactName: this.userInfo.surname + ',' + this.userInfo.givenName,
						position: this.userInfo.position,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						companyName: this.userInfo.companyName,
						numberOfEnrolment: this.numberOfEnrolment,
						sponsorLevel: this.sponsorLevel == 'Gold' ? 0 : (this.sponsorLevel == 'Platinum' ? 1 : 2),
						language: 1,
						APF_UID: getCookie('APF_UID'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/ee/sponsor/submit',
						qs.stringify(params), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'APF_UID': getCookie('APF_UID'),
							}
						}
					).then(res => {
						if (res.data.success) {
							window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails_en?type=3';
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					}).catch(err => {
						console.log(err)
					})
				}
			},
			perInfo() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/sponsor/echo', { // 获取参会参展人员信息详情
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						language: 1
					}
				}).then(res => {
					if (res.data.success) {
						let data = res.data.data;
						this.userInfo = data;
						this.numberOfEnrolment = data.numberOfEnrolment;
						this.sponsorLevel = data.sponsorLevel == 0 ? 'Gold' : (data.sponsorLevel == 1 ? 'Platinum' : 'Diamond');
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				}).catch(err => {
					console.log(err)
				})
			}
		},
		mounted() {
			if (this.operate || this.operate == 'modify') {
				this.perInfo();
			}
		},
	}
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	/* 单选框 */
	.exhibitorsReg .mint-cell {
		display: inline-block;
		min-height: 0;
	}

	.exhibitorsReg .mint-radiolist-title {
		display: none;
	}

	.exhibitorsReg .mint-cell-wrapper,
	.exhibitorsReg .mint-cell {
		padding: 0;
		font-size: .13rem;
	}

	.exhibitorsReg .mint-cell:last-child {
		background: inherit;
	}

	.exhibitorsReg .mint-radiolist-label {
		padding: 0;
		padding-left: .2rem;
	}

	/* 图片大小 */
	.exhibitorsReg .img-w40 {
		width: .4rem;
		height: .4rem;
	}

	.exhibitorsReg .img-w12 {
		width: .12rem;
		height: .12rem;
		margin-right: .04rem;
	}

	/* content */
	.exhibitorsReg .top_bg {
		background: url('../../../../static/img/act/ee2019/sponsor.jpg')no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 1.3rem;
	}

	.exhibitorsReg .content {
		width: 100%;
		padding: 0 .15rem .5rem;
		margin-top: -.47rem;
	}

	.exhibitorsReg .content2 {
		padding-top: .2rem;
		margin: 0;
	}

	.exhibitorsReg .perInfo {
		padding-bottom: .25rem;
	}

	.exhibitorsReg .entInfo .tit {
		background-image: linear-gradient(180deg,
			#e12823 0%,
			#f3500e 100%),
			linear-gradient(#959595,
			#959595);
	}

	.exhibitorsReg .perInfo .tit {
		background-image: linear-gradient(180deg,
			#00479d 0%,
			#00a0e9 100%),
			linear-gradient(#959595,
			#959595);
	}

	.exhibitorsReg .entInfo ul {
		padding: 0 .17rem;
	}

	.exhibitorsReg .entInfo li,
	.exhibitorsReg .perInfo li {
		display: flex;
		padding: .2rem 0;
		border-bottom: 1px solid #c9c9c9;
		justify-content: space-between;
		align-items: center;
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

	.exhibitorsReg .entInfo .info-t,
	.exhibitorsReg .perInfo .info-t {
		font-size: .14rem;
	}

	.exhibitorsReg .entInfo li input,
	.exhibitorsReg .perInfo li input {
		text-align: right;
		border: none;
		font-size: .12rem;
		color: #aaa;
	}

	.exhibitorsReg .entInfo li select {
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
	}

	/* 赞助权益 */
  .sponsor_en .equity {
    line-height: .22rem;
		display: block !important;
  }

  .sponsor .equity .info-t {
    margin-bottom: .13rem;
	}
</style>
