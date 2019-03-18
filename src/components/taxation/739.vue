<template>
	<div class="tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-18 mb-5">备案表</span><br>
					<span class="fw-6 fs-15">分期缴纳备案表</span><br>
					分期缴纳备案，是指个人所得税纳税人按照政策的规定，可以分期缴纳个人所得税的，按规定由纳税人或扣缴义务人向主管机关报送相关资料进行备案。具体可分为个人取得股票期权或认购股票个人所得税分期备案、股权奖励个人所得税分期缴纳备案、转增股本个人所得税分期缴纳备案。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-6-1.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6 fs-15">个人取得股票期权或认购股票个人所得税分期备案</span><br>
					<span class="fw-6">业务简介</span><br>
					按照《国家税务总局关于个人认购股票等有价证券而从雇主取得折扣或补贴收入有关征收个人所得税问题的通知》（国税发〔1998〕9号）规定，纳税人若选择分期缴纳个人所得税，其扣缴义务人应在实际认购股票等有价证券的次月15日内，向主管税务机关办理分期缴纳个人所得税备案手续，报送《个人取得股票期权或认购股票等取得折扣或补贴收入分期缴纳个人所得税备案表》。其他相关证明材料由扣缴义务人留存备查。
				</div>
				<div class="mb-5">
					<span class="fw-6">相关项业务含义</span><br>
					用户在【分期备案类别】中选择“个人取得股票期权或认购股票个人所得税分期备案”，输入扣缴单位基本情况后，点击【添加】按钮输入单位员工个人所得税分期备案信息，如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-6-2.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">分期缴税类别</span><br>
					根据实际情况勾选。<br>
					<span class="fw-6">有价证券种类</span><br>
					填写取得（认购）有价证券的种类，如填写“股票”。<br>
					<span class="fw-6">有价证券名称</span><br>
					填写取得（认购）有价证券的具体标准名称，如填写股票名称。<br>
					<span class="fw-6">有价证券代码</span><br>
					填写取得（认购）有价证券的代码，如填写股票代码，无代码可不填。<br>
					<span class="fw-6">行权/认购时间</span><br>
					填写纳税人实际行权（认购）有价证券的具体日期。纳税人在备案期限内多次取得有价证券的，需分别填写。<br>
					<span class="fw-6">行权/认购价格</span><br>
					填写纳税人实际行权（认购）有价证券的价格。<br>
					<span class="fw-6">行权/认购数量</span><br>
					填写纳税人实际行权（认购）有价证券的数量并注明计量单位，如股票的股数。<br>
					<span class="fw-6">应纳税所得额</span><br>
					按照《中华人民共和国个人所得税法》及相关规定计算。<br>
					<span class="fw-6">分期月数</span><br>
					填写计划分期缴纳个人所得税的月份数。
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
				path: '/taxation/t740',
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
