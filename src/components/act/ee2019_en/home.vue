<template>
	<div class="ee201901 ee2019">
		<div class="con">
			<img src="../../../../static/img/act/ee2019_en/1-1.png" alt="" class="img-w100">
			<div class="tel">
				<a href="tel:13810923597">+86-13810923597</a><br />
				<a href="tel:18911882352">+86-18911882352</a>
			</div>
			<div class="email">
				<a href="http://www.apftown.com" target="_blank">www.apftown.com</a><br />
				<a href="mailto:info@apftown.com">info@apftown.com</a>
			</div>
		</div>
		<div class="signUp_en" @click="goSignUp()"><img src="../../../../static/img/act/ee2019_en/reg-btn-1.png" alt=""></div>
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
						this.$axios.get(this.$root.urlPath.NEW + '/ee/currStatus', { // 获取当前参会状态
							params: {
								APF_UID: getCookie('APF_UID'),
								serialNo: '20191131',
								type: 1,
							}
						}).then(res => {
							if (res.data.success) {
								switch (res.data.data) {
									case 0:
										// 未填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/meetingsTickets_en?type=1';
										break;
									case 1:
										// 已填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList_en?type=1';
										break;
									case 2:
										// 已提交信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails_en?type=1';
										break;
									case 3:
										// 已确认阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode_en?type=1';
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
						var url = encodeURIComponent('/ee2019/returnlog_en?type=1');
						window.location.href = this.$root.urlPath.M_APF + '/login_en?returnUrl=' + url;
					}
				}).catch(err => {
					console.log(err)
				});
			},
		},
		created() {
			let lan = getCookie('APF_LAN');
			if (lan) {
				lan == 0 ? window.location.href = this.$root.urlPath.M_APF + '/ee2019/home' : ''
			} else {
				let language = (navigator.browserLanguage || navigator.language).toLowerCase(); //判断当前浏览器语言
				if (language.indexOf('zh') > -1) { //中文
					// window.location.href = this.$root.urlPath.M_APF + '/ee2019/home'
				} else if (language.indexOf('en') > -1) { //英文
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/home_en'
				} else { //其它
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/home_en'
				}
			}
		}
	}
</script>

<style>
	/* 内容 */
	.ee201901 .con {
		position: relative;
	}

	.ee201901 .con .tel,
	.ee201901 .con .email {
		position: absolute;
		opacity: 0;
	}

	.ee201901 .con .tel {
		left: 1.57rem;
		bottom: 1.5rem;
		line-height: .85rem;
	}

	.ee201901 .con .email {
		left: .6rem;
		bottom: .71rem;
		line-height: .24rem;
	}
</style>
