<template>
	<div>
		<div class="act04">
			<tab-0818></tab-0818>
			<div class="imgBox mt-23">
				<img src="../../../../static/img/act/20180818/4-1.png" alt="" />
			</div>
			<div class="signUp" @click="goSignUp()">
				<img src="../../../../static/img/act/20180818/signUp2.png" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data(){
			return {
				url: window.location.href,
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			goSignUp(){
				if( this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode != 'null' ){
					window.location.href = this.$root.urlPath.M_APF+ '/act/act2018081805?invitationCode=' + this.invitationCode;
				}else{
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018081805'
				}
			},
		},
		mounted(){
		},
		created(){
			//wx-share
		    var title = '2019三亚国际金融周-资本项目对接会';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '抛弃论坛大模式 对接资金好项目 头脑风暴等着你 十项全能挑战你——一场酣畅淋漓的金融精英嘉年华';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
	}
</script>
<style scoped="scoped">
	.signUp{
		position: fixed;
		right:0.2rem;
		top: 4.8rem;
	}
	.signUp img{
		width: 0.7rem;
	}
	@import url("../../../../static/css/reset.css");
	.mt-23{
		margin-top: 0.23rem;
	}
	.act04{
		background-image: url(../../../../static/img/act/20180818/bg-4.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		padding: 0.5rem 0 0.3rem 0;
	}
	.act04 .imgBox img{
		width: 100%;
	}
</style>