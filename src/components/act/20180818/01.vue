<template>
	<div>
		<div class="act01">
			<tab-0818></tab-0818>
			<div class="con">
				<div class="imgBox">
					<img src="../../../../static/img/act/20180818/1-1.png" alt="" />
				</div>
				<div class="imgBox mt-30 telBox">
					<img src="../../../../static/img/act/20180818/1-4.png" alt="" />
					<div class="tel">
						<a href="tel:13810923597">13810923597</a>
						<a href="tel:18911882352">18911882352</a>
					</div>
				</div>
				<div class="imgBox imgBox-pd mt-30">
					<img src="../../../../static/img/act/20180818/1-5.png" alt="" />
				</div>
				<div class="imgBox imgBox-pd mt-30">
					<a href="http://f.amap.com/pYfR_0605gGE" target="_blank">
						<img src="../../../../static/img/act/20180818/1-6.png" alt="" />
					</a>
				</div>
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
<style scoped>
	.signUp{
		position: fixed;
		right:0.2rem;
		top: 4.8rem;
	}
	.signUp img{
		width: 0.7rem;
	}
	div{
		font-size: 0 !important;
	}
	.mt-30{
		margin-top: 0.3rem;
	}
	.imgBox-pd{
		padding: 0 0.15rem;
	}
	.act01{
		background-image: url(../../../../static/img/act/20180818/bg-1.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		padding-bottom: 0.3rem;
	    padding-top: 0.5rem;
	}
	.act01 .con .imgBox img{
		width: 100%;
	}
	.act01 .telBox{
		position: relative;
	}
	.act01 .tel{
		position: absolute;
		top: 0.52rem;
		right: 0.3rem;
	}
	.act01 .tel a{
		font-size: 0.14rem;
		display: block;
		margin-bottom: 0.2rem;
		opacity: 0;
	}
</style>