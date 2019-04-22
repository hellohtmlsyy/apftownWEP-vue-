<template>
	<div>
		<div class="act_stay01" :style="{backgroundImage: 'url(' + bgurl + ')' }">
			<img src="../../../../static/img/act/20181031/1-btn.png" alt="" class="btn" :style="{bottom: bot}" @click="goSignUp" />
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
				bgurl: this.$root.urlPath.M_APF + '/static/img/act/20181031/bg-1-1.jpg',
				bot: '0.63rem',
			}
		},
		methods: {
			goSignUp() {
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018103102';
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
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			if (winHeight > 680) {
				this.bgurl = this.$root.urlPath.M_APF + '/static/img/act/20181031/bg-1-2.jpg';
			}
			$('.act_stay01').css('height', winHeight + 'px');
		},
	}
</script>
<style scoped>
	.act_stay01 {
		background-size: 100% 100%;
		width: 100%;
		position: relative;
	}

	.act_stay01 .btn {
		width: 1.5rem;
		position: absolute;
		left: 50%;
		margin-left: -0.75rem;
	}
</style>
