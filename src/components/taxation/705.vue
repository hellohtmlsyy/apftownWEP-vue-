<template>
	<div class="tc705 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30 ">系统业务简介</span><br>
					《扣缴客户端》用于扣缴义务人为在职员工申报个人所得税。对应申报表《个人所得税基础信息表（A表）》和《扣缴个人所得税报告表》。为降低报表填写难度，《扣缴客户端》对报表填写做了拆分处理。<br>
					申报主体流程如下
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-1-8.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">人员信息采集</span><br>
					人员信息采集信息对应《个人所得税基础信息表(A表）》，系统采用先报送登记人员，再填写报表的方式<br>
					<span class="fw-6">报送登记及获取反馈</span><br>
					将人员信息报送至局端进行验证并获取结果<br>
					<span class="fw-6">报表填写</span><br>
					报表填写包括《扣缴个人所得税报告表》、《限售股转让所得扣缴个人所得税报告表》、
					《特定行业个人所得税年度申报表》三张报表常用《扣缴个人所得税报告表》，包含工资薪金所得、劳务报酬所得、稿酬所得等税法规定的相关所得。每个所得单独填写，统一申报<br>
					<span class="fw-6">申报表报送</span><br>
					把填写完整的《扣缴个人所得税报告表》、《限售股转让所得扣缴个人所得税报告表》、《特定行业个人所得税年度申报表》申报到税局。普通单位一般只需要申报《扣缴个人所得税报告表》即可<br>
					<span class="fw-6">网上缴款</span><br>
					申报完成后，需根据所申报税款，通过【网上缴款】功能缴纳税款<br>
				</div>
				<div class="mb-5">
					<span class="fw-6 fs-30">软件主界面分四个区域</span><br>
					<span class="fw-6">左侧功能菜单</span><br>
					对应各功能菜单，通过菜单可以打开具体功能<br>
					<span class="fw-6">常用功能区</span><br>
					显示系统常用功能，可直接通过首页快捷按钮进入功能页面<br>
					<span class="fw-6">税务通知区</span><br>
					展示最新个税政策，可点击查看详细信息<br>
					<span class="fw-6">税款所属月份</span><br>
					税款所属月份为当前时间上月<br>
					例：当前时间为2017年8月10日，则税款所属月份为2017年7月，8月15日前可以申报7月份个人所得税。可点击税款所属月份右边图标，切换税款所属月份到历史月份，补报以前月份税款。
					<div class="fs-22">温馨提醒　各地补报历史月份税款政策不同。<br>　　　　　可能会产生滞纳金，具体以当地税局政策为准
					</div>
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-1-9.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t706',
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
