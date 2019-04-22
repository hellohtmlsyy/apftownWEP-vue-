<template>
	<div>
		<div class="act_stay04">
			<img src="../../../../static/img/act/20181031/bg-4-1.jpg" alt="" class="conImg" />
			<div class="signUp" @click="goSignUp()">
				<img src="../../../../static/img/act/20181031/nextBtn.png" alt="" />
			</div>
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
										activityNo: '20181031',
										APF_UID: getCookie('APF_UID'),
									}
								})
								.then(res => {
									if (res.data.data != false) {
										this.$layer.msg('您已预订，不能重复预订!');
										var self = this;
										window.setTimeout(function() {
											window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107';
										}, 2000)
									} else {
										window.location.href = this.$root.urlPath.M_APF + '/act/act2018103106';
									}
								})
								.catch(err => {
									console.log(err)
								})
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018103105';
						}
					})
					.catch(err => {
						console.log(err)
					});
			},
		},
		created() {
			//wx-share
			var title = '海棠花居，三亚最浪漫的民宿';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '美丽三亚，浪漫天涯，来海棠花居，住海棠湾最浪漫的花园民宿';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	.act_stay04,
	.act_stay04 .conImg {
		width: 100%;
	}

	.act_stay04 .signUp {
		position: fixed;
		right: 0.2rem;
		top: 4.8rem;
	}

	.act_stay04 .signUp img {
		width: 1.5rem;
	}
</style>
