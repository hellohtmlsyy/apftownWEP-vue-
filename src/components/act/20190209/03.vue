<template>
	<div class="act020903">
		<div style="position: relative;">
			<img src="../../../../static/img/act/20190209/3-1.png" alt="" style="width: 100%;" />
			<a href="tel:18600548248" class="tel">186 0054 8248</a>
		</div>
		<div class="signUp">
			<img src="../../../../static/img/act/20190209/3-btn.png" alt="" class="btn" @click="goSignUp()" />
		</div>
	</div>
</template>
<script>
	import {
		wxShare,
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			goSignUp() {
				//是否登录
				this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
						params: {
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if (res.data.success) {
							//是否报名
							this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
									params: {
										activityNo: '20190209',
										APF_UID: getCookie('APF_UID'),
									}
								})
								.then(res => {
									if (res.data.data != false) {
										this.$layer.msg('您已预订，不能重复预订!');
										this.invitationCode = res.data.data;
										var self = this;
										window.setTimeout(function() {
											window.location.href = self.$root.urlPath.M_APF + '/act/act2019020906?invitationCode=' + self.invitationCode;
										}, 2000)
									} else {
										if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
											'null') {
											window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905?invitationCode=' + this.invitationCode;
										} else {
											window.location.href = this.$root.urlPath.M_APF + '/act/act2019020905';
										}
									}
								})
								.catch(err => {
									console.log(err)
								})
						} else {
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
		},
		created() {
			//wx-share
			var title = '正月初五迎财神，三亚庙会等你来';
			var desc = '参加2月9日小镇财神节庙会，获得888元游园大礼包，尽享美味BBQ，还有新年烟花热情篝火';
			var imgUrl = 'http://m.apftown.com/static/img/act/20190209/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	.act020903 {
		height: 100%;
		width: 100%;
		background-color: #a40000;
		position: relative;
		padding: 0.18rem 0.23rem 0;
		text-align: center;
	}

	.act020903 .btn {
		width: 1.32rem;
		margin: 0.3rem 0 0.45rem;
	}

	.act020903 .tel {
		position: absolute;
		bottom: 0.78rem;
		font-size: 0.13rem;
		left: 1.1rem;
		opacity: 0;
	}
</style>
