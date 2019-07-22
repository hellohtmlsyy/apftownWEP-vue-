<template>
	<div class="ee2019">
		<div class="con">
			<img src="../../../../static/img/act/ee2019/2-1.png" alt="" class="img-w100">
		</div>
		<div class="signUp" @click="goSignUp()">参会<br />报名</div>
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
						this.$axios.get(this.$root.urlPath.NEW + '/ee/currStatus', { // 当前参会状态
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
						var url = encodeURIComponent('/ee2019/returnlog?type=1');
						window.location.href = this.$root.urlPath.M_APF + '/login?returnUrl=' + url;
					}
				}).catch(err => {
					console.log(err)
				});
			}
		},
	}
</script>
