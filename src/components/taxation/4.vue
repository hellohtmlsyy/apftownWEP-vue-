<template>
	<div class="tc4 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t5" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/4-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">财务制度备案</div>
				<div class="fs-22">填制财务会计制度备案报告书</div>
			</div>
		</div>
		<div class="content">
			<ul class="conBox">
				<li>
					<div class="fs-26 col-333 lh-24">范本如下：</div>
					<div class="tac"><img src="../../../static/img/taxation/content/4-2.png" alt="" class="img-w250" /></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			};
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

	.img-w250 {
		width: 2.5rem;
		margin-top: 0.15rem;
	}

	.tc4 .title {
		background-image: linear-gradient(0deg,
			#601986 0%,
			#556fb5 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc4 .conBox li {
		padding: 0.15rem 0.1rem;
	}
</style>
