<template>
	<div class="tc2 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t3" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/2-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">税种认定</div>
				<div class="fs-22">添加国税、地税税种</div>
			</div>
		</div>
		<div class="content">
			<ul class="conBox">
				<li class="dis-flex border-b">
					<div><img src="../../../static/img/taxation/content/2-2.png" alt="" class="img-w120 mr-26" /></div>
					<div class="fs-26 col-333 lh-24">根据营业执照经营范围<br>确定主营业务<br><span class="col-eb6400">认定税种属于国税或地税</span></div>
				</li>
				<li>
					<div class="fs-26 col-333 lh-24">认定税种后，税局办事人员打印国/地税<span class="col-eb6400 dis-i">税务事项认定书</span>公司财务根据认定书上的<span
						 class="col-eb6400 dis-i">认定有效期</span>起确定报税时间</div>
					<div class="tac"><img src="../../../static/img/taxation/content/2-3.png" alt="" class="img-w250" /></div>
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

	.img-w120 {
		width: 1.2rem;
		margin-right: 0.26rem;
	}

	.img-w250 {
		width: 2.5rem;
		margin-top: 0.15rem;
	}

	.tc2 .title {
		background-image: linear-gradient(0deg,
			#eb6100 0%,
			#f39700 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc2 .conBox li {
		padding: 0.2rem 0.1rem;
	}
</style>
