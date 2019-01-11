<template>
	<div class="tc707 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">人员信息登记</span><br>
					把需要申报人员信息添加到软件中即是人员信息登记。<br>
					目前的添加方式有两种——单个【添加】或批量【导入】
				</div>
				<div class="mb-30">
					<span class="fw-6">单个【添加】</span><br>
					点击【添加】按钮，打开人员添加界面。按照人员信息采集方式，把相应信息录入正确后，点击【保存】按钮添加成功。单个添加人员业务场景，适合于单位人员信息较少情况。若单位人员信息比较多，单个添加效率较低，建议使用Excel批量导入人员信息到软件中。<br>
					<span class="fw-6">批量【导入】</span><br>
					本单位人员信息较多时，可以使用批量导入功能。把人员信息填写到Excel中，一次性导入软件。<br>
					点击导入>模板下载，可以下载软件中提供标准人员信息导入模板。按照模板格式，把人员信息填写到模板对应位置，然后再点击导入>导入文件，选择已经填写好文件，导入到软件中即可。<br>
					<span class="fw-6">报送及获取反馈</span><br>
					新增人员后，需要将自然人信息报送局端进行身份验证，身份验证通过后可继续办理相关业务。如身份验证不通过，需要对证照号码进行修改，必须重新添加人员信息。<br>
					<span class="fw-6">温馨提醒</span><br>
					进行人员信息采集时，若相关信息不符合规范，在【添加】或【导入】时会有对应提示。如—身份证号码不满足校验规则、姓名中不能有特殊字符等。在弹出相关提示时，需按照提示要求，更改相关信息为合法信息后，重新保存。
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
				path: '/taxation/t709',
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
