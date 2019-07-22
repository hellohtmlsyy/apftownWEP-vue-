<template>
	<div class="exhibitorsReg conference">
		<div class="top_bg"></div>
		<div class="content">
			<div class="entInfo mb-15">
				<div class="tit">媒体信息</div>
				<ul>
					<li><span class="info-t">姓名</span><input type="text" placeholder="必填" v-model.trim="userInfo.contactName"></li>
					<li><span class="info-t">职务</span><input type="text" placeholder="必填" v-model.trim="userInfo.position"></li>
					<li><span class="info-t">企业名称</span><input type="text" placeholder="必填" v-model.trim="userInfo.companyName"></li>
					<li><span class="info-t">媒体品牌</span><input type="text" placeholder="必填" v-model.trim="userInfo.brandName"></li>
					<li><span class="info-t">固定电话</span><input type="text" placeholder="选填" v-model.trim="userInfo.phone"></li>
					<li><span class="info-t">手机号码</span><input type="text" placeholder="必填" v-model.trim="userInfo.mobile"></li>
					<li><span class="info-t">电子邮箱</span><input type="text" placeholder="选填" v-model.trim="userInfo.email"></li>
					<li>
						<span class="info-t">参会人数</span>
						<span class="selectBox">
							{{numberOfEnrolment}}&nbsp;&nbsp;<span>></span>
							<select name="" v-model="numberOfEnrolment" @click="change('type_select')" id="type_select">
								<option v-for="( option, index ) in number" :value="option" :key="index">{{option}}</option>
							</select>
						</span>
					</li>
				</ul>
			</div>
			<div class="complete" @click="submit()">提交</div>
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
				numberOfEnrolment: '请选择',
				number: ['请选择', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
				userInfo: {
					contactName: '',
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
				nameError: false,
				disable: false,
			}
		},
		methods: {
			// 下拉选项默认第一个禁止选择
			change(id) {
				$('#' + id + ' option:eq(0)').attr("disabled", true)
			},
			submit() {
				this.numberError = this.numberOfEnrolment != '请选择' ? false : true;
				if (this.numberError) {
					this.$layer.msg('请选择参会人数');
				}
				this.emailError = this.userInfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userInfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
					return;
				}
				this.mobileError = /^\d{1,16}$/.test(this.userInfo.mobile) ? false : true;
				if (this.mobileError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.phoneError = /^\d{0,16}$/.test(this.userInfo.phone) ? false : true;
				if (this.phoneError) {
					this.$layer.msg('请输入正确的电话');
					return;
				}
				this.brandError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userInfo.brandName) ? false : true;
				if (this.brandError) {
					this.$layer.msg('请输入正确的品牌');
				}
				this.companyError = /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userInfo.companyName) ? false : true;
				if (this.companyError) {
					this.$layer.msg('请输入正确的企业名称，名称不得大于20字');
				}
				this.positionError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userInfo.position) ? false : true;
				if (this.positionError) {
					this.$layer.msg('请输入正确的职务');
				}
				this.nameError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userInfo.contactName) ? false : true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				if (!this.mobileError && !this.brandError && !this.companyError && !this.positionError && !this.nameError && !this.numberError) {
					this.disable = true;
					const PARAMS = {
						serialNo: '20191131',
						contactName: this.userInfo.contactName,
						position: this.userInfo.position,
						companyName: this.userInfo.companyName,
						brandName: this.userInfo.brandName,
						phone: this.userInfo.phone,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						numberOfEnrolment: this.numberOfEnrolment,
						language: 0,
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
							window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode?type=4';
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
