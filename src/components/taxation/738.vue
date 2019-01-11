<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-36">查询统计</span><br>
					<span class="fw-6">申报明细查询</span><br>
					可以通过设置不同查询条件来进行明细申报查询。得到查询结果后，可以导出报表到本地电脑。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-7.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">申报情况查询</span><br>
					支持对不同的收入所得项目进行查询，支持导出、打印功能
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-8.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">扣缴报告表查询</span><br>
					可以查询得到对应所得月份的扣缴报告表，支持导出、打印功能
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-9.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">个人收入统计</span><br>
					针对于个人的收入和纳税情况进行查询。在这里可以看到每一个人员信息的收入额、允许扣除的税费、减免税额、应补退税额，支持导出、打印功能
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-10.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">分项目分税率统计</span><br>
					针对于不同的所得项目、不同的税率生成的一个汇总的统计。在这里可以查询得到工资薪金、劳务报酬这些不同的所得项目，同时还根据不同的税率进行了汇总统计，支持导出、打印功能
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-5-11.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t739',
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
