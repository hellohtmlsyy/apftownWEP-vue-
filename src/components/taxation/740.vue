<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">股权奖励个人所得税分期缴纳备案</span><br>
					<span class="fw-6">业务简介</span><br>
					对于股权奖励、转增股本的个人，需要依法缴纳个人所得税，对于一次性缴纳个税有困难的，可以分期缴纳，分期的期限不超过5年。需要提前向税务机关备案，提交分期计划。<br>
					1. 股权奖励的计税价格参照获得股权时的公平市场价格确定，具体按以下方法确定：<br>
					· 上市公司股票的公平市场价格，按照取得股票当日的收盘价确定。取得股票当日为非交易时间的，按照上一个交易日收盘价确定。<br>
					· 非上市公司股权的公平市场价格，依次按照净资产法、类比法和其他合理方法确定。<br>
					2. 计算股权奖励应纳税额时，规定月份数按员工在企业的实际工作月份数确定。员工在企业工作月份数超过12个月的，按12个月计算。<br>
					3. 获得股权奖励的企业技术人员、企业转增股本涉及的股东需要分期缴纳个人所得税的，应自行制定分期缴税计划，由企业于发生股权奖励、转增股本的次月15日内，向主管税务机关办理分期缴税备案手续。
				</div>
				<div class="mb-5">
					<span class="fw-6">相关项业务含义</span><br>
					用户在分期备案类别中选择“股权奖励个人所得税分期缴纳备案”，输入扣缴单位基本情况后，点击【添加】按钮输入该扣缴单位的员工个人所得税分期备案信息，如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-6-3.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">纳税人识别号</span><br>
					税务机关赋予的18位纳税人识别号。<br>
					<span class="fw-6">高新技术企业证书编号</span><br>
					高新技术企业认定部门核发的有效期内的高新技术企业证书编号。<br>
					<span class="fw-6">股权价格确定方法</span><br>
					根据适用的公平市场价格确定方法勾选。选择其他合理方法的，应在横线中写明具体方法名称。<br>
					<span class="fw-6">每股价格</span><br>
					填写按照股权价格确定方法计算的每股价格。<br>
					<span class="fw-6">股权奖励时间</span><br>
					填写纳税人实际获得股权奖励的具体日期。纳税人在一个月份中多次取得股权奖励的，可一并填写。<br>
					<span class="fw-6">获得股份数、持股比例</span><br>
					填写纳税人实际取得的股权份额及持股比例。纳税人在一个月份中多次取得股权奖励的，可合并填写。<br>
					<span class="fw-6">计税价格</span><br>
					计税价格=每股价格×获得股份数，或根据持股比例换算。<br>
					<span class="fw-6">应缴个人所得税</span><br>
					应缴个人所得税=（计税价格÷规定月份数×税率－速算扣除数）×规定月份数。<br>
					税率按照《个人所得税法》中《个人所得税税率表一（工资、薪金所得适用）》确定。<br>
					规定月份数按照本公告有关规定确定。<br>
					<span class="fw-6">计划缴税时间</span><br>
					按年度填写每一年度计划缴税的截止月份。<br>
					<span class="fw-6">计划缴税金额</span><br>
					填写每一年度计划分期缴纳的个人所得税金额。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t741',
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
