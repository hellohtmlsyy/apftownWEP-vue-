<template>
	<div class="tc718 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">个人股票期权行权收入</span><br>
					<span class="fw-6">业务简介</span><br>
					财税[2005]35号 《财政部、国家税务总局关于个人股票期权所得征收个人所得税问题的通知》规定了企业给与员工股权激励的相关个人所得税征收管理办法。<br>
					本所得申报个人股票期权行权收入所得。<br>
					个人股票期权行权包括三种激励类型：股票期权、股票增值权、限制性股票。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-16.png" alt="" class="w100"></p>
				<div class="mb-5">
					个人股票期权行权收入，存在三种激励方式，需合并计税。因此收入的填写增加了明细窗口。<br>
					在上图中，点击添加按钮，可打开收入明细填写界面
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-17.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">股票期权</span><br>
					由企业所有者赠予的、规定特定的人员在约定的期限内，享有以某一预先确定的价格购买一定数量本企业股票的权利。<br>
					<span class="fw-6">股票增值权</span><br>
					是指上市公司授予公司员工在未来一定时期和约定条件下，获得规定数量的股票价格上升所带来收益的权利。<br>
					<span class="fw-6">限制性股票</span><br>
					是指上市公司按照股权激励计划约定的条件，授予公司员工一定数量本公司的股票<br>
					所有类型的股权激励收入，都在此处分类填写。<br>
					<span class="fw-6">本月行权收入</span><br>
					由所填明细自动计算而得。若计算的有差异，可直接修改调整。<br>
					<span class="fw-6">本年度累计行权收入(不含本月)</span><br>
					填写一个纳税年度内截止上月止已申报的行权收入。<br>
					<span class="fw-6">规定月份数</span><br>
					指员工取得来源于中国境内的股票期权形式工资薪金所得的境内工作期间月份数，最长填写12个月。<br>
					<span class="fw-6">本年度累计已纳税额</span><br>
					本纳税年度股票期权行权收入累计已申报缴纳的税款。
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
				path: '/taxation/t720',
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
