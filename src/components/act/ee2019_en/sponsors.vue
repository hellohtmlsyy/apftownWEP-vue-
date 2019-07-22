<template>
	<div class="ee2019 ee201904">
		<div class="con">
			<img src="../../../../static/img/act/ee2019_en/4-1.png" alt="" class="img-w100">
			<a href="tel:4006702139" class="tel">+86-400-670-2139</a>
			<a href="mailto:info@apftown.com" class="email">info@apftown.com</a>
		</div>
		<div class="signUp_en" @click="goSignUp()"><img src="../../../../static/img/act/ee2019_en/reg-btn-2.png" alt=""></div>
	</div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		methods: {
			goSignUp() {
				this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', { // 获取是否登录
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				}).then(res => {
					if (res.data.success) {
						// 已登录
						this.$axios.get(this.$root.urlPath.NEW + '/ee/currStatus', { // 获取当前赞助状态
							params: {
								APF_UID: getCookie('APF_UID'),
								serialNo: '20191131',
								type: 3,
							}
						}).then(res => {
							if (res.data.success) {
								switch (res.data.data) {
									case 0:
										// 未填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/sponsorReg_en?type=3';
										break;
									case 1:
										// 已填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails_en?type=3';
										break;
									case 2:
										// 已提交信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails_en?type=3';
										break;
									case 3:
										// 已确认阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode_en?type=3';
										break;
									default:
										break;
								}
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						}).catch(err => {
							console.log(err)
						})
					} else {
						// 未登录
						var url = encodeURIComponent('/ee2019/returnlog_en?type=3');
						window.location.href = this.$root.urlPath.M_APF + '/login_en?returnUrl=' + url;
					}
				}).catch(err => {
					console.log(err)
				});
			}
		},
	}
</script>
<style>
	/* 内容 */
	.ee201904 .con {
		position: relative;
	}

	.ee201904 .con .tel,
	.ee201904 .con .email {
		position: absolute;
		opacity: 0;
	}

	.ee201904 .con .tel {
		left: 0.54rem;
		bottom: 2.73rem;
	}

	.ee201904 .con .email {
		left: .35rem;
		bottom: 2.2rem;
	}
</style>
