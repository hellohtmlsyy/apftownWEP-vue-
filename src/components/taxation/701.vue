<template>
	<div class="tc701 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<span class="fs-36 fw-6 mb-5">系统相关</span><br>
				<span class="fs-30 fw-6">客户端运行环境</span><br>
				<span class="fw-6">操作系统</span>　Windows7/ Windows8/ Windows10中文操作系统<br>
				<span class="fw-6">分辨率　</span>　推荐1366×768<br>
				<span class="fw-6">系统日期</span>　必须设置成当天日期<br>
				<span class="fw-6">日期格式</span>　YYYY-MM-DD（以Windows 7为例：电脑桌面右下角点击日历>>更改日期和时间设置…>>更改日期和时间”中设置。）<br>
				<span class="fw-6">内　　存</span>　建议4G及以上<br>
				<span class="fw-6">硬　　盘</span>　建议硬盘合计大小500G及以上<br>
				<span class="fw-6">网　　络</span>　直接连接网络即可
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t702',
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
