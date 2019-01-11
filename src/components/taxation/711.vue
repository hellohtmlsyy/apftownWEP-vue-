<template>
	<div class="tc710 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">人员信息查询</span><br>
					人员信息查询是广义查询概念。包括软件查询、导出到Excel查询及打印功能。
				</div>
				<div class="mb-5">
					<span class="fw-6">展开查询条件</span><br>
					软件中的查询功能，是指人员众多情况下，需要查找某个人员具体信息时，可以点击【展开查询条件】按钮来展开具体的查询条件，而后按钮名字变成【收折查询条件】。<br>
					可通过工号、姓名、证照类型、证照号码等，模糊查找相应人员信息。也可以根据人员状态、是否残疾烈属孤老、是否股东投资者、是否雇员、更新时间来筛选。<br>
					<span class="fw-6">导出</span><br>
					可以通过【导出】按钮，把人员信息导出到Excel中进行查看。
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-2-4.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t712',
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
