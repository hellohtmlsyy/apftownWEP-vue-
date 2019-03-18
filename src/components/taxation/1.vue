<template>
	<div class="tc1 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t2" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/1-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">税务备案登记</div>
				<div class="fs-11">股东及注册信息税务备案登记所需资料</div>
			</div>
		</div>
		<div class="content">
			<ul class="conBox">
				<li class="dis-flex border-b">
					<div><img src="../../../static/img/taxation/content/1-2.png" alt="" class="img-w54" /></div>
					<div class="fs-14 col-333 lh-24">营业执照原件<br />营业执照复印件<span class="col-70">(加盖公章)</span></div>
				</li>
				<li class="border-b">
					<div class="dis-flex mb-10">
						<div><img src="../../../static/img/taxation/content/1-3.png" alt="" class="img-w54" /></div>
						<div class="fs-14 col-333 lh-24">股东信息<br />公司股权分配比例</div>
					</div>
					<div class="col-70 lh-18 col-24">— 股东是公司，需要股东公司营业执照复印件加盖公章<br />— 股东是自然人，需要自然人身份证复印件</div>
				</li>
				<li class="dis-flex">
					<div><img src="../../../static/img/taxation/content/1-4.png" alt="" class="img-w54" /></div>
					<div class="fs-14 col-333 lh-24">经办人身份证原件<br />法人和财务负责人身份证复印件<br />法人和财务负责人电话号码</div>
				</li>
			</ul>
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
				url: window.location.href,
			};
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

	.img-w54 {
		width: 0.54rem;
		margin-right: 0.13rem;
	}

	.tc1 .title {
		background-image: linear-gradient(0deg, #f39700 0%, #f9bb5e 100%), linear-gradient(#516eea, #516eea);
	}

	.tc1 .conBox li {
		padding: 0.25rem 0 0.25rem 0.2rem;
	}
</style>
