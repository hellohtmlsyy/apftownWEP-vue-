<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">发送申报</span><br>
					《中华人民共和国个人所得税法》第九条规定，扣缴义务人每月所扣的税款，自行申报纳税人每月应纳的税款，都应当在次月十五日内缴入国库，并向税务机关报送纳税申报表。<br>
					用户点击申报表报送菜单，系统会自动生成申报报告表。为加强数据质量控制，每个属期每张申报表仅可进行1次申报。若本期所有收入均已正确填写，点击发送申报进行报表报送，并及时点击获取反馈查看申报结果。<br>
					为完整的三不同申报种类生成的申报报告表，根据系统展示可以看到相关信息，包括：纳税人数、收入总额、应补退税额、实缴税额等。如下图所示
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-7.png" alt="" class="w100"></p>
				<div class="mb-5">如果系统在生成申报表的时候检测到异常数据，会生成报告表失败，则会在点击申报表报送的时候进行校验弹出对应提示信息，需要用户关闭提示语，回到报表填写页面进行异常数据的修正或者补录，重新点击申报表报送生成报告表发送申报。如下图</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-8.png" alt="" class="w100"></p>
				<div class="mb-5">此外，点击发送申报的时候还会对附表填写的内容进行校验。如果系统检测到没有录入完整的减免附表或者商业健康保险附表，会弹出提示阻断申报，需要用户回到附表进行补录或者修正数据。如下图</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-4-9.png" alt="" class="w100"></p>
				<div class="mb-5">用户发送申报成功后，会弹出进度条显示系统正在处理的状态，进度条缓冲完毕后系统会给出反馈结果，如下图</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-4-10.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t732',
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
