<template>
	<div class="tc3 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t4" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/3-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">签订三方协议</div>
				<div class="fs-22">签订公司、税务局、银行三方协议</div>
			</div>
		</div>
		<div class="content">
			<ul class="conBox">
				<li>
					<div class="fs-26 col-333 lh-24">提供开户银行许可证原件<br>待税务局工作人员打印<span class="col-e43947 dis-i">三方委托扣款协议书</span><br>需要到开户银行签约(公章、财务章、法人章）<br>签约成功后，需回到税务局认证通过</div>
					<div class="tac"><img src="../../../static/img/taxation/content/3-2.png" alt="" class="img-w250" /></div>
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

	.tc3 .title {
		background-image: linear-gradient(0deg,
			#e33745 0%,
			#ff5b68 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc3 .conBox li {
		padding: 0.15rem 0.1rem;
	}
</style>
