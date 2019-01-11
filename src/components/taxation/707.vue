<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">软件操作</span><br>
					人员信息采集主要包括登记、编辑、报送及获取反馈、查询和更多操作。<br>
					点击左边菜单人员信息采集，打开人员信息采集列表。下文详细介绍人员信息采集的功能。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-2-2.png" alt="" class="w100"></p>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-2-3.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t708',
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
