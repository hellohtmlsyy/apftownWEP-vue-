<template>
	<div class="tc719 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-15">提前退休一次性补贴</span><br>
					<span class="fw-6">业务简介</span><br>
					根据国家税务总局公告2011年第6号 《关于个人提前退休取得补贴收入个人所得税问题的公告》相关规定，本所得适用于提前退休一次性补贴所得。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-18.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">一次性补贴收入</span><br>
					对未达到法定退休年龄前、而正是办理提前退休手续，按照统一标准取得的单位给予员工的一次性补贴收入。<br>
					<span class="fw-6">分摊月份数</span><br>
					是指个人提前办理退休手续至法定退休年龄的实际月份数。<br>
				</div>
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
				path: '/taxation/t721',
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
</style>
