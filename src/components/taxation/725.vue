<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-15">股权转让所得</span><br>
					股权转让收入是指转让方因股权转让而获得的现金、实物、有价证券和其他形式的经济利益，转让方取得与股权转让相关的各种款项，包括违约金、补偿金以及其他名目的款项、资产、权益等，均应当并入股权转让收入。纳税人按照合同约定，在满足约定条件后取得的后续收入，应当作为股权转让收入，其行为包括以下情形：<br>
					1. 出售股权；<br>
					2. 公司回购股权；<br>
					3. 发行人首次公开发行新股时，被投资企业股东将其持有的股份以公开发行方式一并向投资者发售；<br>
					4. 股权被司法或行政机关强制过户；<br>
					5. 以股权对外投资或进行其他非货币性交易；<br>
					6. 以股权抵偿债务；<br>
					7. 其他股权转移行为。<br>
					但不包括：<br>
					1.《国家税务总局关于企业改组改制过程中个人取得的量化资产征收个人所得税问题的通知》（国税发[2000]60号）第一条规定的，对职工个人以股份形式取得的仅作为分红依据，不拥有所有权的企业量化资产，不征收个人所得税。<br>
					2.《财政部 国家税务总局关于证券投资基金税收问题的通知》（财税字[1998]55号）第三条规定的，对个人投资者买卖基金单位获得的差价收入，在对个人买卖股票的差价收入未恢复征收个人所得税以前，暂不征收个人所得税。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-23.png" alt="" class="w100"></p>
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
				path: '/taxation/t726',
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
