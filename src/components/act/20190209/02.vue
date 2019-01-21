<template>
	<div class="act020902">
		<div style="position: relative;">
			<img src="../../../../static/img/act/20190209/2-1.png" alt="" style="width: 100%;" />
			<div class="video">
				<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0545zct46r&tiny=0&auto=0"
				 allowfullscreen></iframe>
			</div>
			<span class="v_text">小镇视频</span>
		</div>
		<a href="http://f.amap.com/pYfR_0605gGE" target="_blank"><img src="../../../../static/img/act/20190209/2-2.png" alt=""
			 style="width: 100%;margin-top: 0.18rem;"></a>
		<img src="../../../../static/img/act/20190209/2-btn.png" alt="" class="btn" :style="{bottom: bot}" @click="goSignUp" />
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
				bot: '0.3rem',
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			goSignUp() {
				if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
					'null') {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2019020903?invitationCode=' + this.invitationCode;
				} else {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2019020903'
				}
			},
		},
		created() {
			//wx-share
			var title = '正月初五迎财神，福禄寿喜进家门';
			var desc = '参加2月9日小镇财神节庙会，获得888元游园大礼包，尽享美味BBQ，还有新年烟花热情篝火';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	.act020902 {
		height: 100%;
		width: 100%;
		background-color: #a40000;
		position: relative;
		padding: 0.18rem 0.23rem 0;
		text-align: center;
	}

	.act020902 .video {
		width: 2.7rem;
		display: inline-block;
		position: absolute;
		bottom: 0.45rem;
		left: 50%;
		margin-left: -1.35rem;
	}

	.act020902 .v_text {
		width: 0.6rem;
		height: 0.19rem;
		line-height: 0.2rem;
		background-color: #c30006;
		border-radius: 0.05rem;
		color: #fff;
		font-size: 0.12rem;
		position: absolute;
		bottom: 0.37rem;
		left: 50%;
		margin-left: -0.3rem;
		z-index: 10000;
	}

	.act020902 .btn {
		width: 1.32rem;
		margin: 0.3rem 0 0.45rem;
	}
</style>
