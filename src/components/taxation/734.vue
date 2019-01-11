<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">申报更正</span><br>
					申报成功或缴款成功后，发现有错报、漏报的情况，可通过【申报更正】操作更正错误。更正申报将覆盖上一笔申报记录，启动更正后，请直接在原申报数据基础上修改即可，若上笔申报已经扣款，则更正申报后多退少补，其中多交的税款需至办税大厅办理退抵税。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-4-13.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t735',
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
