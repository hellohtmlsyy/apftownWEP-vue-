<template>
	<div class="tc8 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/index" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/8-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">代理记账后续服务</div>
				<div class="fs-22">后续服务流程介绍</div>
			</div>
		</div>
		<div class="content">
			<div class="conBox">
				<div class="pd-adv">
					<div class="adv">
						<p class="col-fff fs-30 pd-5 fw-6 tac">小镇代理记账服务优势</p>
						<img src="../../../static/img/taxation/content/8-2.png" alt="" class="w100">
						<div class="advCon">
							<span class="col-22ac38">代理记账资质</span>&nbsp;&nbsp;小镇已获取代理记账许可证书
							<span class="col-22ac38">多年从业经验</span>&nbsp;&nbsp;各类型公司账务处理方法丰富
							<span class="col-22ac38">办事效率超高</span>&nbsp;&nbsp;与税务/银行/社保等部门关系良好
							<span class="col-22ac38">可全方位服务</span>&nbsp;&nbsp;与会计师事务所/律师事务所战略合作
						</div>
					</div>
				</div>
				<div class="text" id="02">代理记账流程</div>
				<div class="fs-24 col-333 lh-20 pd-con">
					<span class="Btit">01 签订协议</span><br>
					签订代理记账协议、确定开始时间<br>
					<span class="Btit">02 票据交接</span><br>
					税务网上服务厅绑定企业<br>
					<span class="fs-24">注：需法人或是财务负责人接收短信验证通过</span><br>
					<span class="Btit">03 提供资料</span><br>
					客户每月1日寄来原始凭证<br><br>
					<span class="fw-6">凭证明细</span><br>
					1. 现金单据<br>
					如办公费/差旅费/房租费/通讯费/业务招待费/运输费等<br>
					2. 银行单据<br>
					如提现/转账/贷记凭证/电汇/进账单/借款单等<br>
					3. 发票<br>
					当月1日——31日期间的所有发票<br>
					4. 员工信息<br>
					公司员工姓名、性别、身份证号码、月工资额等<br>
					5. 其他原始单据<br>
					<span class="Btit">04 账务处理</span><br>
					整理审核凭证，录入财务系统<br>
					<span class="Btit">05 纳税申报</span><br>
					每月15日申报纳税<br>
					<span class="Btit">06 信息反馈</span><br>
					交接电子版财务表、申报纳税记录<br>注：确认无误后，原始凭证装订完整，寄回企业
					<div class="download"><a href="../../../static/download/Agency_Accounting_Agreement.doc">下载代理记账协议书</a></div>
				</div>
				<div class="text" id="03">后续税务服务</div>
				<div class="service">
					<div class="dis-flex jc-space-around mb-15"><span>税务逾期</span><span>税务变更</span></div>
					<div class="dis-flex jc-space-around mb-15"><span>申购发票</span><span>银行服务</span></div>
					<div class="dis-flex jc-space-around mb-15"><span>现场涉税</span><span>社保服务</span></div>
				</div>
			</div>
			<div class="dis-flex pd-contact">
				<div><img src="../../../static/img/taxation/content/8-3.png" alt="" class="img-w57"></div>
				<div class="fs-36 col-22ac38 lh-36">具体后续税务服务联系人<br>李经理　18976711787</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			};
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

	.col-22ac38 {
		color: #22ac38;
	}

	.pd-con {
		padding: 0.1rem 0.2rem;
	}

	.pd-contact {
		padding: 0.15rem 0.20rem;
	}

	.pd-adv {
		padding: 0.2rem 0.18rem;
	}

	.img-w57 {
		width: 0.57rem;
		margin-right: 0.3rem;
	}

	.img-w295 {
		width: 2.95rem;
	}

	.tc8 .title {
		background-image: linear-gradient(0deg,
			#009944 0%,
			#7fc269 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc8 .content .conBox {
		padding: 0;
	}

	.tc8 .content .adv {
		background-color: #8fc31f;
		border-radius: 0.05rem;
		border: solid 1px #8fc31f;
	}

	.tc8 .content .advCon {
		background-color: #fff;
		border-radius: 0.05rem;
		padding: 0.07rem 0.05rem;
		font-size: 0.12rem;
		color: #333;
		line-height: 0.2rem;
		margin: 0.03rem 0.02rem;
	}

	.tc8 .content .text {
		border-width: 1px 0 1px 0;
		border-color: #a0a0a0;
		border-style: solid;
		padding: 0.1rem 0;
		text-align: center;
		font-size: 0.24rem;
		color: #069b46;
		margin-bottom: 0.15rem;
	}

	.tc8 .content .Btit {
		color: #fff;
		background-color: #069b46;
		border-radius: 3px;
		padding: 0.01rem 0.06rem;
		margin: 0.05rem 0;
	}

	.tc8 .content .download {
		background-color: #579dea;
		border-radius: 0.16rem;
		color: #fff;
		font-size: 0.16rem;
		line-height: 0.36rem;
		text-align: center;
		margin: 0.2rem 0;
	}

	.tc8 .content .service {
		padding: 0.25rem 0.15rem;
	}

	.tc8 .content .service span {
		background-color: #22ac38;
		border-radius: 3px;
		color: #fff;
		font-size: 0.18rem;
		line-height: 0.36rem;
		padding: 0 0.2rem;
	}
</style>
