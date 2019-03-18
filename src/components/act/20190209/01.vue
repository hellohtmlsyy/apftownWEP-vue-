<template>
	<div class="act020901" :style="{backgroundImage: 'url(' + bgurl + ')' }">
		<div>
			<img src="../../../../static/img/act/20190209/1-btn.png" alt="" class="btn" :style="{bottom: bot}" @click="goSignUp" />
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
				bgurl: this.$root.urlPath.M_APF + '/static/img/act/20190209/bg-1.jpg',
				bot: '0.82rem',
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			goSignUp() {
				if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
					'null') {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2019020902?invitationCode=' + this.invitationCode;
				} else {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2019020902'
				}
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
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			if (winHeight > 680) {
				this.bgurl = this.$root.urlPath.M_APF + '/static/img/act/20190209/bg-1-1.jpg';
				this.bot = '1.2rem';
			}
			$('.act020901').css('height', winHeight + 'px');
		},
	}
</script>
<style scoped>
	.act020901 {
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
	}

	.act020901 .btn {
		width: 1.32rem;
		position: absolute;
		left: 50%;
		margin-left: -0.66rem;
	}
</style>
