<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-15">获取反馈</span><br>
					系统有发送申报自动获取反馈功能，及点击获取反馈按钮，手工获取申报反馈的功能。该业务是在申报成功后，才能进行。获取反馈主要是可以获取到局端对该次申报情况的处理结果，我们可以根据反馈信息调整申报数据，重新申报。获取反馈目前有以下几种场景：申报失败、申报处理中、申报成功无需扣款、申报成功未扣款、申报成功扣款成功、作废失败、作废成功。如下图
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-4-11.png" alt="" class="w100"></p>
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
				path: '/taxation/t733',
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
