<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">特许权使用费所得</span><br>
					特许权使用费所得，是指个人提供专利权、商标权、著作权、非专利技术以及其他特许权的使用权取得的所得；提供著作权的使用权取得的所得，不包括稿酬所得。以下收入属于特许权使用费所得。<br>
					《国家税务总局关于印发<征收个人所得税若干问题的规定>的通知》(国税发[1994]89号)规定，第五条规定，作者将自己的文字作品手稿原件或复印件公开拍卖（竞价）取得的所得，应按特许权使用费所得项目征收个人所得税。<br>
					《国家税务总局关于剧本使用费征收个人所得税问题的通知》（国税发〔2002〕52号）对于剧本作者从电影、电视剧的制作单位取得的剧本使用费，不再区分剧本的使用方是否为其任职单位，统一按特许权使用费所得项目计征个人所得税。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-21.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t724',
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
