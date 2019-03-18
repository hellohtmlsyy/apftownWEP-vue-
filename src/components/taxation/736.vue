<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-18 mb-5">网上缴款</span><br>
					<span class="fw-6 fs-15">税款缴纳</span><br>
					按照现行税法《个人所得税代扣代缴暂行办法》，第十三条，扣缴义务人每月所扣的税款，应当在次月7日内缴入国库，并向主管税务机关报送《扣缴个人所得税报告表》、代扣代收税款凭证和包括每一纳税人姓名、单位、职务、收入、税款等内容的支付个人收入明细表以及税务机关要求报送的其他有关资料。申报成功后需要及时缴款。逾期将加收滞纳金并根据《中华人民共和国税收征收管理法》第六十二条的有关规定，税务机关将责令限期改正，并按照规定依法对该单位进行行政处罚。<br>
					如果本次申报成功后，没有立即缴款，系统在下次登录启动后，首页会弹出缴款的提醒，引导用户进行税款缴纳工作，如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-1.png" alt="" class="w100"></p>
				<div class="mb-5">点击立即缴款即可跳转至网上缴款菜单，这时候系统会获取相关的三方协议和欠税信息，如下图</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-2.png" alt="" class="w100"></p>
				<div class="mb-5">获取成功后在系统前台进行展示，展示的内容包括：所得月份、征收品目、应补退税额等等，如下图</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-3.png" alt="" class="w100"></p>
				<div class="mb-5">选中报表，点击立即缴款即可发起缴税业务。在此之前，需要核对三方协议的开户行、账户名称等基本信息。核对无误，点击确认扣款发起扣款，进度条刷新完毕后得到缴款结果，如下图</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-5-4.png" alt="" class="w100"></p>
				<div class="mb-30">系统会自动获取缴款反馈，也可以通过手动点击【缴款反馈】按钮获取缴款反馈信息。在导出功能里，可以导出得到对应所得月的缴款信息。</div>
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
				path: '/taxation/t737',
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
