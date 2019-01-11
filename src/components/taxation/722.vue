<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">劳务报酬</span><br>
					劳务报酬所得，是指个人从事设计、装潢、安装、制图、化验、测试、医疗、法律、会计、咨询、讲学、新闻、广播、翻译、审稿、书画、雕刻、影视、录音、录像、演出、表演、广告、展览、技术服务、介绍服务、经纪服务、代办服务以及其他劳务取得的所得。其中包括《国家税务总局关于明确个人所得税若干政策执行问题的通知》（国税发[2009]121号）第二条第一款规定的个人担任公司董事、监事，且不在公司任职、受雇的，其董事费按劳务报酬所得项目征税方法。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-20.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t723',
				url: window.location.href,
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
