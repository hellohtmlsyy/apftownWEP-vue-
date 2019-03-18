<template>
	<div class="tc704 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fs-15 fw-6">系统登录</span><br>
					初始化注册完成后，点击【立即体验】按钮，即可进入软件登录界面。使用注册第四步设置的登录密码，登录进入软件即可。
					<div class="fs-11">
						注意事项：<br>
						· 如注册时没有设置登录密码，则不会弹出登录界面，直接登录进入软件<br>
						· 忘记登录密码，请点击登录下方【忘记登录密码】按钮，可重置登录密码。
					</div>
				</div>
				<p class="mb-30 tac"><img src="../../../static/img/taxation/content/7/7-1-7.png" alt="" class="img-w235"></p>
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
				path: '/taxation/t705',
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

	.img-w235 {
		width: 2.35rem;
	}
</style>
