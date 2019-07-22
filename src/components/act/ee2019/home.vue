<template>
	<div class="ee201901 ee2019">
		<div class="con">
			<img src="../../../../static/img/act/ee2019/1-1.png" alt="" class="img-w100">
			<div class="tel">
				<a href="tel:13810923597">+86-13810923597</a><br />
				<a href="tel:18911882352">+86-18911882352</a>
			</div>
			<div class="email">
				<a href="http://www.apftown.com" target="_blank">www.apftown.com</a><br />
				<a href="mailto:info@apftown.com">info@apftown.com</a>
			</div>
		</div>
		<div class="signUp" @click="goSignUp()">立即<br />报名</div>
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
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/meetingsTickets?type=1';
										break;
									case 1:
										// 已填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=1';
										break;
									case 2:
										// 已提交信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails?type=1';
										break;
									case 3:
										// 已确认阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode?type=1';
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
						var url = encodeURIComponent('/ee2019/returnlog?type=1');
						window.location.href = this.$root.urlPath.M_APF + '/login?returnUrl=' + url;
					}
				}).catch(err => {
					console.log(err)
				});
			},
		},
		created() {
			let lan = getCookie('APF_LAN');
			if (lan) {
				lan == 1 ? window.location.href = this.$root.urlPath.M_APF + '/ee2019/home_en' : ''
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
		left: 1.3rem;
		bottom: 2.43rem;
		line-height: .75rem;
	}

	.ee201901 .con .email {
		left: .48rem;
		bottom: 1.7rem;
		line-height: .24rem;
	}

	/* 报名按钮 */
	.ee201901 .signUp {
		background: url('../../../../static/img/act/ee2019/btn-bg-2.png')no-repeat;
		background-size: 100% 100%;
		color: #a40000;
	}
</style>
