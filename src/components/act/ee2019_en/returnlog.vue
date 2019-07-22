<template>
	<div></div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				type: this.$route.query.type,
				href1: this.$route.query.type == 1 ? 'meetingsTickets_en' : (this.$route.query.type == 2 ? 'exhibitorsReg_en' : (
					this.$route.query.type == 3 ? 'mediaReg_en' : 'sponsorReg_en')),
				href2: this.$route.query.type == 3 ? 'subDetails_en' : (this.$route.query.type == 4 ? 'ticketsCode_en' :
					'perList_en'),
				href3: this.$route.query.type == 4 ? 'ticketsCode_en' : 'subDetails_en',
			}
		},
		methods: {
			getTicket() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/currStatus', { // 获取当前参会状态
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						type: this.type,
					}
				}).then(res => {
					if (res.data.success) {
						switch (res.data.data) {
							case 0:
								// 未填写信息阶段
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/' + this.href1 + '?type=' + this.type;
								break;
							case 1:
								// 已填写信息阶段
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/' + this.href2 + '?type=' + this.type;
								break;
							case 2:
								// 已提交信息阶段
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/' + this.href3 + '?type=' + this.type;
								break;
							case 3:
								// 已确认阶段
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode_en?type=' + this.type;
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
			}
		},
		created() {
			this.getTicket();
		},
	}
</script>

<style>

</style>
