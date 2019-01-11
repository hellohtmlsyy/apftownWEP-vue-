<template>
	<div class="tc5 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t6" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/5-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">地税申报流程</div>
				<div class="fs-22">海南省税务局(原地税)网上申报系统介绍</div>
			</div>
		</div>
		<div class="content col-333">
			<div class="url">
				海南省税务局（原地税）网上税务局网址<br>
				<a href="http://sso.hitax.gov.cn:5555/sso" class="col-717bea">
					<img src="../../../static/img/taxation/content/5-2.png" alt="" class="img-w20">
					http://sso.hitax.gov.cn:5555/sso
				</a>
			</div>
			<div class="fs-26 lh-24 border-b pd-10">纳税人登录网站可完成增值税附加、工会、房产税、土地增值税、代扣代缴个人所得税、车船税、社保、残疾人保障金等各类税费申报、扣款等操作。</div>
			<div class="fs-24 lh-24">
				<p class="fs-26 pd-5 fw-6" id="01">系统登录页面</p>
				<p><img src="../../../static/img/taxation/content/5-3.png" alt="" class="w100 mb-5"></p>
				<div class="mb-30">
					<span class="fw-6 mr-10">登录</span>账号为注册时纳税人录入的手机号，<br>&nbsp;&nbsp;&nbsp;　　密码为注册时设置密码。<br>
					<span class="fw-6 mr-10">注册</span>首次使用本网站的纳税人可在网上快速注册。
				</div>
				<div class="mb-5" id="02">
					<span class="fs-30 fw-6">海南省税务局网上申报系统（原地税）系统登录</span><br>
					登录网上办税服务厅后选择【原地税网上申报系统】
				</div>
				<p><img src="../../../static/img/taxation/content/5-4.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">登录用户信息栏将展示当前用户手机号下绑定的所有纳税人信息，请根据需要申报的企业信息选择，点击【确认】进入系统即可申报。</p>
				<p class="mb-30"><img src="../../../static/img/taxation/content/5-5.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5" id="03">
					<span class="fs-30 fw-6">网上申报功能介绍</span><br>
					系统主页面包括三部分：标题区、功能菜单区、业务操作区<br>
					<span class="fw-6">标题区</span><br>
					显示网上申报系统标题（海南省税务局网上申报系统）<br>
					<span class="fw-6">功能菜单区</span><br>
					涉税通知、办税帮助、申报纳税（费）、税务登记、综合查询、发票管理及问题在线咨询、自然人自行申报注册等。<br>
					<span class="fw-6">操作区</span><br>
					用户进行业务操作。如点击【在线填写申报表（税）】菜单后，在主界面右侧会出现申报表页面，供用户填写。<br>
					<span class="fw-6">涉税通知</span><br>
					功能——税务局发布对于网上申报的变动通知<br>　　——企业可查询每月申报通知<br>本模块中的“纳税人信息同步”按钮，可同步更新变更。如：税种变更、三方协议等。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/5-6.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5" id="04">
					<span class="fs-30 fw-6">申报纳税(费)</span><br>
					<span class="fw-6">在线填写申报表(税)</span><br>
					可填写所有税种报表，纳税人根据所要填报种类相应填写
				</div>
				<p><img src="../../../static/img/taxation/content/5-7.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5">
					<span class="fw-6">附加税纳税申报</span><br>
					在其它税费中选择附加税（费）纳税申报表
				</div>
				<p><img src="../../../static/img/taxation/content/5-8.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">进入申报表，按当月业务实际发生额进行填写，最后点击【保存】</p>
				<p><img src="../../../static/img/taxation/content/5-9.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">报表保存成功后，提示“是否进行下一步【提交申报表】操作？”点击【现在进入】将进入到申报表提交的界面，如不想进入提交申报表，请点击【以后再说】。</p>
				<p class="tac"><img src="../../../static/img/taxation/content/5-10.png" alt="" class="img-w242 mb-5"></p>
				<p class="mb-5">进入网上委托扣缴税（费）界面，选择需要扣款的信息点击划款</p>
				<p><img src="../../../static/img/taxation/content/5-11.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">系统提示“您确实进行网上划款吗？”点击【确定】</p>
				<p class="tac"><img src="../../../static/img/taxation/content/5-12.png" alt="" class="img-w107 mb-5"></p>
				<p class="mb-30">系统提示划款成功即可</p>
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

	.img-w20 {
		width: 0.2rem;
	}

	.img-w107 {
		width: 1.07rem;
	}

	.img-w242 {
		width: 2.2rem;
	}

	.tc5 .title {
		background-image: linear-gradient(0deg,
			#7479ea 0%,
			#4494e8 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc5 .content {
		padding: 0.1rem 0.15rem 0.3rem 0.15rem;
	}

	.tc5 .content .url {
		border-radius: 3px;
		border: solid 1px #727aea;
		text-align: center;
		line-height: 0.24rem;
		font-size: 0.15rem;
		padding: 0.05rem 0;
	}
</style>
