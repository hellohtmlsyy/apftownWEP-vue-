<template>
	<div class="tc711 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-15">更多操作</span><br>
					主要包括修改、删除、批量修改、自定义显示列、隐藏非正常人员、异常身份证处理等功能。
				</div>
				<div class="mb-5">
					<span class="fw-6">修改</span><br>
					选中单个/多个人员信息，点击【修改】，可修改/批量修改人员信息。<br>
					<span class="fw-6">删除</span><br>
					选中单个/多个人员信息，点击【删除】，可删除/批量删除人员信息。<br>
					<span class="fw-6">批量修改</span><br>
					多个人员存在相同信息，可通过批量修改功能，一键完成。包括：<br>
					—工号 可以对所有员工进行编号。定义一个工号规则，通过批量修改工号功能，对所有员工进行编号。<br>
					—人员状态 当存在多个人员离职时，可以同时把多个人员改成【非正常】状态。<br>
					其他更多批量修改功能，请用户自行查阅。<br>
					<span class="fw-6">自定义显示列</span><br>
					人员信息采集列表中，显示常用人员信息。高级用户可自定义列表展示信息。例：<br>
					不想看到【性别】信息，可以取消勾选<br>
					想把【国籍】信息排到靠前的位置，可以向前移动。如下图
				</div>
				<p class="mb-5 tac"><img src="../../../static/img/taxation/content/7/7-2-5.png" alt="" class="img-w220"></p>
				<div class="mb-5">
					<span class="fw-6">隐藏非正常人员</span><br>
					当人员变动较多时，界面显示多个已离职人员，即状态为【非正常】人员。离职人员无需申报个税，通过本功能，可隐藏已离职人员。隐藏后，该按钮会变成【显示非正常人员】，再次点击可找回【非正常】人员。<br>
					<span class="fw-6">异常身份证处理</span><br>
					用于添加存在公安系统的异常身份证人员，在使用前需在税局办税 大厅对该纳税人进行人员登记。如下图
				</div>
				<p class="mb-30 tac"><img src="../../../static/img/taxation/content/7/7-2-6.png" alt="" class="img-w220"></p>
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
				path: '/taxation/t713',
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

	.img-w220 {
		width: 2.2rem;
	}
</style>
