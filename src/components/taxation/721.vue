<template>
	<div class="tc720 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-30">年金领取</span><br>
					用于填写个人达到国家规定的退休年龄，在财税【2013】103号《国家税务总局关于企业年金职业年金个人所得税有关问题的通知》之后，按月领取的年金；<br>
					企业年金，是指根据《企业年金试行办法》（原劳动和社会保障部令第20号）的规定，企业及其职工在依法参加基本养老保险的基础上，自愿建立的补充养老保险制度。<br>
					职业年金是指根据《事业单位职业年金试行办法》（国办发〔2011〕37号）的规定，事业单位及其工作人员在依法参加基本养老保险的基础上，建立的补充养老保险制度。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-3-19.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t722',
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
