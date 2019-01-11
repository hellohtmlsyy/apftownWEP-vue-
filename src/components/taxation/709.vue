<template>
	<div class="tc708 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">人员信息编辑</span><br>
					人员信息编辑指已登记人员【修改】和【删除】等相关操作。当人员信息登记到软件后，发现人员信息存在错误信息，需要【修改】人员信息，或【删除】人员信息后重新登记。
				</div>
				<div class="mb-30">
					<span class="fw-6">什么场景下用【修改】或【删除】呢？</span><br>
					当该人员已经申报过相关报表，即已经存在历史记录，则不允许删除该人员信息，只能使用【修改】功能。<br>
					新登记人员，可【删除】后重新登记，也可直接【修改】错误信息。<br>
					<span class="fw-6">人员信息【修改】</span><br>
					已存在申报记录的情况下，关键信息修改。<br>
					证照类型/证照号码—此信息不允许修改。若录入错误，可把人员状态改为【非正常】，重新登记正确人员信息。<br>
					姓名—可修改，请谨慎操作。若姓名录入错误，并已经申报过个税，修改姓名后，会在税局系统中形成两种记录。一种是修改姓名前的申报记录，一种是修改姓名后的申报记录。若将来该员工需要去税局打印完税证明，则首先需要做自然人信息变更登记。否则修改姓名前所申报数据，无法打印到完税证明记录中。<br>
					其他人员信息，都可以修改。<br>
					<span class="fw-6">人员信息【删除】</span><br>
					新登记人员，若未申报过个税数据，可任意删除。已有申报记录的，则无法删除。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t710',
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
