<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">历史查询</span><br>
					历史查询菜单可以对以往所得月、缴款日期、不同缴款状态的申报成功的报表进行筛选查询。展示的信息包括：所得月份、申报表、应补退税额、实缴税额、缴款日期、缴款状态，如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-5.png" alt="" class="w100"></p>
				<div class="mb-5">点击查看明细按钮，可以查看该申报表对应征收品目信息，同样开放导出功能，供用户导出excel</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-5-6.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t738',
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
