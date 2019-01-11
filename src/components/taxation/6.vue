<template>
	<div class="tc6 tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a href="/taxation/t701" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/6-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">国税申报流程</div>
				<div class="fs-22">海南省税务局(原国税)网上申报系统介绍</div>
			</div>
		</div>
		<div class="content col-333">
			<div class="url mb-5">
				海南省税务局（原国税）网上税务局网址<br>
				<a href="http://sso.hitax.gov.cn:5555/sso" class="col-da3741">
					<img src="../../../static/img/taxation/content/6-2.png" alt="" class="img-w20">
					http://sso.hitax.gov.cn:5555/sso
				</a>
			</div>
			<div class="fs-24 lh-24">
				<p class="fs-26 pd-5 fw-6">系统登录页面</p>
				<p><img src="../../../static/img/taxation/content/5-3.png" alt="" class="w100 mb-5"></p>
				<p><span class="fw-6 mr-10">登录</span>账号为注册时纳税人录入的手机号，<br>&nbsp;&nbsp;&nbsp;　　密码为注册时设置密码。</p>
				<p class="mb-30"><span class="fw-6 mr-10">注册</span>首次使用本网站的纳税人可在网上快速注册。</p>
				<div class="mb-5" id="02">
					<span class="fs-30 fw-6">海南省税务局网上申报系统（原国税）系统登录</span><br>
					登录网上办税服务厅后选择“原地税网上申报系统”如下图所示
				</div>
				<p><img src="../../../static/img/taxation/content/6-3.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5" id="03">
					<span class="fs-30 fw-6">选择申报项目</span><br>
					登录成功后，系统会自动根据纳税人情况展示当前征期申报项目。 点击对应申报项目后【填写】按钮即可进入报表填写页面。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/6-4.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5" id="04">
					<span class="fs-30 fw-6">填写报表</span><br>
					进入报表填写界面后，系统根据申报项目和纳税人特定信息下发具体报表，并弹出报表选项。必填报表默认选中，不可取消。选填报表由纳税人根据实际经营情况选择是否填报。如选择错误，可点击报表列表上方的【选择】重选。
				</div>
				<p><img src="../../../static/img/taxation/content/6-5.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">选好后，系统展示相关报表，可直接填写。报表内绿格可填，灰格由系统自动计算或不可填。左侧为报表导航区，点击标题切换对应报表。</p>
				<p><img src="../../../static/img/taxation/content/6-6.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">填写后点击【完成】系统检查报表勾稽关系是否满足，如出错则弹出提示信息，可根据提示信息修改后重新点击【完成】</p>
				<p><img src="../../../static/img/taxation/content/6-7.png" alt="" class="w100 mb-5"></p>
				<div class="mb-5">
					<span class="fw-6">提交申报</span><br>
					如校验勾稽关系通过，系统提示【是否申报】
				</div>
				<p><img src="../../../static/img/taxation/content/6-8.png" alt="" class="w100 mb-5"></p>
				<p class="mb-30">点击确定，系统提交并提示申报结果。也可返回申报项目列表界面点击【申报】按钮提交。提示【申报成功】就代表申报已经完成。</p>
				<div class="mb-5" id="05">
					<span class="fs-30 fw-6">缴纳税款</span><br>
					点击【缴纳税款】菜单，进入缴纳税款界面。系统获取当前应缴纳税款列表展示在界面上。
				</div>
				<p><img src="../../../static/img/taxation/content/6-9.png" alt="" class="w100 mb-5"></p>
				<p class="mb-5">点击对应税款后面【扣款】弹出选择三方协议界面</p>
				<p class="tac"><img src="../../../static/img/taxation/content/6-10.png" alt="" class="img-w300 mb-5"></p>
				<p class="mb-5">选择要扣款的三方协议点击【确定】系统将发起扣款请求。请求提交后至缴款历史查看，缴款历史显示扣款成功即缴纳成功。</p>
				<p class="mb-30 tac"><img src="../../../static/img/taxation/content/6-11.png" alt="" class="img-w300 mb-5"></p>
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

	.img-w300 {
		width: 3rem;
	}

	.tc6 .title {
		background-image: linear-gradient(0deg,
			#d42935 0%,
			#f98980 100%),
			linear-gradient(#516eea,
			#516eea);
	}

	.tc6 .content {
		padding: 0.1rem 0.15rem 0.3rem 0.15rem;
	}

	.tc6 .content .url {
		border-radius: 3px;
		border: solid 1px #727aea;
		text-align: center;
		line-height: 0.24rem;
		font-size: 0.15rem;
		padding: 0.05rem 0;
	}
</style>
