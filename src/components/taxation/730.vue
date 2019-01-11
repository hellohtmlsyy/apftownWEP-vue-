<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-36 mb-5">申报表报送</span><br>
					<span class="fw-6 fs-30">申报模式</span><br>
					<span class="fw-6">网络申报模式</span><br>
					客户端主体流程如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-1.png" alt="" class="w100"></p>
				<div class="mb-5">未缴款情况下发现报表数据不正确，可以选择下面任意一条流程进行数据修改申报</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-2.png" alt="" class="w100"></p>
				<div class="mb-5">已缴款情况下发现报表数据不正确，可以通过下图方式来修改数据并进行申报</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-3.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">介质申报模式</span><br>
					客户端主体流程如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-4.png" alt="" class="w100"></p>
				<div class="mb-5">申报介质包未到局端申报时发现数据不正确，可以通过下图方式来修改数据并进行申报</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-5.png" alt="" class="w100"></p>
				<div class="mb-10">申报介质包已到局端申报时发现数据不正确，可以通过下图方式来修改数据并进行申报</div>
				<p class="mb-30 tac"><img src="../../../static/img/taxation/content/7/7-4-6.png" alt="" class="img-w244"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t731',
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

	.img-w244 {
		width: 2.44rem;
	}
</style>
