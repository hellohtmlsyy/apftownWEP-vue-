<template>
	<div>
		<div class="act02">
			<tab-0818></tab-0818>
			<div class="conImg">
				<div class="imgBox">
					<img src="../../../../static/img/act/20180818/2-1.png" />
				</div>
			</div>
			<div class="signUp" @click="goSignUp()">
				<img src="../../../../static/img/act/20180818/signUp2.png" alt="" />
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
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			goSignUp() {
				if (this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode !=
					'null') {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018081805?invitationCode=' + this.invitationCode;
				} else {
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018081805'
				}
			},
		},
		created() {
			//wx-share
			var title = '2019三亚国际金融周-资本项目对接会';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '抛弃论坛大模式 对接资金好项目 头脑风暴等着你 十项全能挑战你——一场酣畅淋漓的金融精英嘉年华';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	.act02 .signUp {
		position: fixed;
		right: 0.2rem;
		top: 4.8rem;
	}

	.act02 .signUp img {
		width: 0.7rem;
	}

	.act02 .pr-18 {
		padding-right: 0.15rem;
	}

	.act02 {
		background-image: url(../../../../static/img/act/20180818/bg-2.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		padding-top: 0.5rem;
		padding-bottom: 0.3rem;
	}

	.act02 .conImg {
		margin-top: 0.15rem;
	}

	.act02 .conImg img {
		width: 100%;
	}
</style>
