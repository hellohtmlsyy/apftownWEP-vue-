<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-15">其他财产转让所得</span><br>
					其他财产转让所得，填报的是除股权转让所得和财产拍卖所得及回流文物拍卖所得以外的其他财产转让所得。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-24.png" alt="" class="w100"></p>
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
				path: '/taxation/t727',
				url: window.location.href,
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
