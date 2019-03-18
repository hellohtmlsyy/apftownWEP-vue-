<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-15">限售股转让所得报告表</span><br>
					<span class="fw-6">业务简介</span><br>
					自2010年1月1日起对个人转让上市公司限售股所得征收个人所得税。限售股转让所得报告表适用于证券机构预扣预缴，或者直接代扣代缴限售股转让所得个人所得税的申报。证券机构应在扣缴限售股转让所得个人所得税的次月7日内向主管税务机关报送本表。不能按照规定期限报送本表时，应当在规定的报送期限内提出申请，经当地税务机关批准，可以适当延期。
				</div>
				<div class="mb-5">
					<span class="fw-6">相关项业务含义</span><br>
					用户点击【报表填写】-【限售股转让所得报告表】,点击【添加】按钮即可新增限售股转让所得明细。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-27.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">扣缴义务人编码</span><br>
					填写扣缴税款的证券机构的税务登记证号码。<br>
					<span class="fw-6">填表日期</span><br>
					填写扣缴义务人办理扣缴申报的实际日期。<br>
					<span class="fw-6">税款所属期</span><br>
					填写证券机构实际扣缴税款的年度、月份和日期。<br>
					<span class="fw-6">扣缴义务人名称</span><br>
					填写扣缴税款的证券公司（营业部）等证券机构的全称。<br>
					<span class="fw-6">纳税人身份证照类型及号码</span><br>
					填写纳税人有效身份证件（居民身份证、军人身份证件等）的类型及号码。<br>
					<span class="fw-6">证券账户号</span><br>
					填写纳税人证券账户卡上的证券账户号。转让的限售股是在上海交易所上市的，填写证券账户卡（上海）上的证券账户号；转让的限售股是在深圳交易所上市的，填写证券账户卡（深圳）上的证券账户号。<br>
					<span class="fw-6">股票代码及名称</span><br>
					填写所转让的限售股股票的股票代码和证券名称。纳税人转让不同限售股的，分行填写。<br>
					<span class="fw-6">每股计税价格</span><br>
					区分以下两种情形填写。<br>
					1. 在证券机构技术和制度准备完成前形成的限售股，采取预扣预缴方式征收的，股改限售股填写股改复牌日收盘价；新股限售股填写该股上市首日的收盘价。<br>
					2. 在证券机构技术和制度准备完成后，采取直接代扣代缴方式征收的，填写纳税人实际转让限售股每股成交价格。以不同价格成交的，分行填写。<br>
					<span class="fw-6">转让股数</span><br>
					填写前列每股计税价格所对应的股数。即：<br>
					1. 在证券机构技术和制度准备完成前，采取预扣预缴方式的，转让股数填写本月该限售股累计转让股数。<br>
					2.在证券机构技术和制度准备完成后，采取直接代扣代缴方式的，转让股数按照不同转让价格，分别填写按该价格转让的股数。<br>
					<span class="fw-6">转让收入额</span><br>
					填写本次限售股转让取得的用于计税的收入额。<br>
					限售股转让收入额=每股计税价格×转让股数<br>
					限售股原值及合理税费<br>
					填写取得限售股股票实际付出的成本，以及限售股转让过程中发生的印花税、佣金、过户费等与交易相关的税费的合计。具体有两种不同情况：<br>
					1. 在证券机构技术和制度准备完成前形成的限售股，采取预扣预缴税款的，限售股原值及合理税费=转让收入额×15%，直接填入小计栏中；<br>
					2. 在证券机构技术和制度准备完成后，采取直接代扣代缴税款的，限售股原值为事先植入结算系统的限售股成本原值；合理税费为转让过程中发生的印花税、佣金、过户费、其他费等与交易相关税费。<br>
					<span class="fw-6">应纳税所得额</span><br>
					应纳税所得额=转让收入额-限售股原值及合理税费。<br>
					<span class="fw-6">扣缴税额</span><br>
					扣缴税额=应纳税所得额×20%
				</div>
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
				path: '/taxation/t730',
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
