<template>
	<div class="introduce industry">
		<div class="top_bg">亚太金融小镇诚邀各基金企业入驻<br /><span class="fs-14 fw-7">小镇介绍</span></div>
		<div class="content">
			<div class="adv fs-12">
				<div class="tit">产业服务</div>
				<div class="dis-fl jcSb">
					<a href="/industry/01"><img src="../../../../static/img/2.0/introduce/icon-1.png" alt="小镇优势" class="img-w105"></a>
					<a href="/industry/02"><img src="../../../../static/img/2.0/introduce/icon-2.png" alt="金融支持" class="img-w105"></a>
					<a href="/industry/03"><img src="../../../../static/img/2.0/introduce/icon-3.png" alt="注册流程" class="img-w105"></a>
				</div>
			</div>
			<div class="adv fs-12">
				<div class="tit">学习服务</div>
				<div class="dis-fl jcSb">
					<a href="/study/01"><img src="../../../../static/img/2.0/introduce/icon-4.png" alt="场地预定" class="img-w105"></a>
					<a href="/study/02"><img src="../../../../static/img/2.0/introduce/icon-5.png" alt="金融培训" class="img-w105"></a>
					<a href="/study/03"><img src="../../../../static/img/2.0/introduce/icon-6.png" alt="金融会议" class="img-w105"></a>
				</div>
			</div>
			<div class="adv fs-12">
				<div class="tit">研究服务</div>
				<div class="dis-fl jcSb">
					<a href="/research/01"><img src="../../../../static/img/2.0/introduce/icon-7.png" alt="研究成果" class="img-w105"></a>
					<a href="/research/02"><img src="../../../../static/img/2.0/introduce/icon-8.png" alt="合作机构" class="img-w105"></a>
					<a href="/research/03"><img src="../../../../static/img/2.0/introduce/icon-9.png" alt="金融专家" class="img-w105"></a>
				</div>
			</div>
			<div class="adv fs-12">
				<div class="tit">园区到访</div>
				<div class="dis-fl jcSb">
					<a href="/park/01"><img src="../../../../static/img/2.0/introduce/icon-10.png" alt="小镇住宿" class="img-w105"></a>
					<a href="/park/02"><img src="../../../../static/img/2.0/introduce/icon-11.png" alt="办公物业" class="img-w105"></a>
					<a href="/park/03"><img src="../../../../static/img/2.0/introduce/icon-12.png" alt="参观小镇" class="img-w105"></a>
				</div>
			</div>
		</div>
		<c-footer :selected="selected"></c-footer>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				selected: 'Introduction',
			};
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.introduce .img-w105 {
		width: 1.05rem;
		height: 0.505rem;
	}

	.introduce .top_bg {
		background-image: url('../../../../static/img/2.0/introduce/introduce1-1.jpg');
	}

	.introduce .content .adv {
		padding: .09rem .17rem .15rem;
	}

	.introduce .content .adv .tit {
		padding: 0;
		margin-bottom: 0.13rem;
	}
</style>
