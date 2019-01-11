<template>
	<div class="tc702 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fs-30 fw-6">系统安装</span><br>
					各地在自然人税收管理系统上线时，会通过各种方式通知到用户下载安装包，一般在各地税务局网站可下载当地安装包。具体下载地址，请留意税局通知。
					<br><span class="fw-6">系统安装步骤</span><br>
					双击安装包程序后，点击【立即安装】，即可安装扣缴客户端到本地电脑，点击【自定义安装目录】选择安装路径。
				</div>
				<p class="mb-30 tac"><img src="../../../static/img/taxation/content/7/7-1-1.png" alt="" class="img-w290"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t703',
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

	.img-w290 {
		width: 2.9rem;
	}
</style>
