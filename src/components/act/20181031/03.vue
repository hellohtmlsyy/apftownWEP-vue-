<template>
	<div>
		<div class="act_stay03">
			<img src="../../../../static/img/act/20181031/bg-3.jpg" alt="" class="conImg" />
			<div class="signUp" @click="goSignUp()">
				<img src="../../../../static/img/act/20181031/nextBtn.png" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
	import {
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			}
		},
		methods: {
			goSignUp() {
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018103104';
			},
		},
		created() {
			//wx-share
			var title = '寒冷的2018即将过去，来三亚开启你温暖幸运的2019';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '凛冬骤降，亚太金融小镇新年礼包等你来，点击开启你的三亚温暖之旅';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");

	.act_stay03 .conImg {
		width: 100%;
	}

	.act_stay03 .signUp {
		position: fixed;
		right: 0.2rem;
		top: 4.8rem;
	}

	.act_stay03 .signUp img {
		width: 1.5rem;
	}
</style>
