<template>
	<div class="taxation">
		<div class="tit dis-flex">
			<div><img src="../../../static/img/taxation/1-2.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="fs-11">企业工商注册完成，取得银行开户许可证后提供</div>
				<div class="fs-15">税务流程相关服务</div>
			</div>
		</div>
		<ul class="int">
			<li class="clearfix li" @click="toDetail('/taxation/t1')">
				<div class="fl"><img src="../../../static/img/taxation/1-icon-1.png" class="icon" /><span class="fs-16 col-333">税务备案登记</span></div>
				<div class="fr col-70 fs-12">股东及注册信息登记</div>
			</li>
			<li class="clearfix li" @click="toDetail('/taxation/t2')">
				<div class="fl"><img src="../../../static/img/taxation/1-icon-2.png" class="icon" /><span class="fs-16 col-333">税种属性认定</span></div>
				<div class="fr col-70 fs-12">添加国税/地税种</div>
			</li>
			<li class="clearfix li" @click="toDetail('/taxation/t3')">
				<div class="fl"><img src="../../../static/img/taxation/1-icon-3.png" class="icon" /><span class="fs-16 col-333">签订三方协议</span></div>
				<div class="fr col-70 fs-12">公司/税务局/银行共同签订</div>
			</li>
			<li class="clearfix li" @click="toDetail('/taxation/t4')">
				<div class="fl"><img src="../../../static/img/taxation/1-icon-4.png" class="icon" /><span class="fs-16 col-333">财务制度备案</span></div>
				<div class="fr col-70 fs-12">填制备案报告书</div>
			</li>
			<li class="li">
				<div class="clearfix">
					<div class="fl"><img src="../../../static/img/taxation/1-icon-5.png" class="icon" /><span class="fs-16 col-333">网上申报纳税</span></div>
					<div class="fr col-70 fs-12">申报纳税操作流程</div>
				</div>
				<div class="online jc-space-around dis-flex">
					<a href="/taxation/t5"><img src="../../../static/img/taxation/1-icon-7.png" /></a>
					<a href="/taxation/t6"><img src="../../../static/img/taxation/1-icon-8.png" /></a>
					<a href="/taxation/t701"><img src="../../../static/img/taxation/1-icon-9.png" /></a>
				</div>
			</li>
			<li class="clearfix li border-n" @click="toDetail('/taxation/t8')">
				<div class="fl"><img src="../../../static/img/taxation/1-icon-6.png" class="icon" /><span class="fs-16 col-333">代理记账后续服务</span></div>
				<div class="fr col-70 fs-12">后续服务流程介绍</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			};
		},
		methods: {
			toDetail(url) {
				location.href = this.$root.urlPath.M_APF + url;
			}
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.taxation').css('height', winHeight + 'px');

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

	.taxation {
		background-image: url('../../../static/img/taxation/1-bg.jpg');
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		padding: 0 0.2rem;
	}

	.taxation .tit {
		padding: 0.3rem 0 0.25rem;
	}

	.taxation .tit .tit-img {
		width: 0.71rem;
		margin-right: 0.11rem;
	}

	.taxation .int {
		background-color: #fff;
		box-shadow: 0px 3px 3px 0px rgba(66, 135, 206, 0.1);
		border-radius: 4px;
		padding: 0 0.05rem;
	}

	.taxation .int .li {
		line-height: 0.4rem;
		border-bottom: 1px solid #d2d2d2;
		padding: 0.1rem 0.18rem;
	}

	.taxation .li>.online img {
		width: 0.8rem;
		height: 0.49rem;
	}

	.taxation .int .icon {
		width: 0.16rem;
		height: 0.16rem;
		vertical-align: text-bottom;
		margin-right: 0.07rem;
	}
</style>
