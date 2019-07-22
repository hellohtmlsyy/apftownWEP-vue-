<template>
	<div class="park03 industry">
		<div class="top_bg">欢迎来亚太金融小镇做客<br /><span class="fs-14 fw-7">期待你度过美好的一天</span></div>
		<div class="content">
			<div class="adv fs-12">
				<div class="tit mb-10">参观小镇</div>
				<div class="tac"><img :src="imgsrc1" class="img-w317" v-preview="imgsrc1" preview-title-enable="true"
					 preview-nav-enable="true"></div>
				<div class="advText"></div>
				<div class="m-13 col-70 lh-20">小镇拥有金融博物馆、金融图书馆、金融教室、金融实验室、金融联合办公室、金融精品酒店等设施</div>
				<div class="tac mt-20"><img :src="imgsrc2" alt="亚太金融小镇导览图" class="img-w317" v-preview="imgsrc2"
					 preview-title-enable="true" preview-nav-enable="true"></div>
				<div class="advText"></div>
				<div class="m-13 fw-7 tac col-70 ">亚太金融小镇导览图</div>
			</div>
		</div>
		<div class="contactus-btn">
			<a href="/contactUs">
				<img src="../../../../static/img/2.0/contactus.png" alt="联系我们" class="img-w66">
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				imgsrc1: '../../../../static/img/2.0/park/park3-2.jpg',
				imgsrc2: '../../../../static/img/2.0/park/park3-3.jpg',
			}
		}
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.park03 .top_bg {
		background-image: url('../../../../static/img/2.0/park/park3-1.jpg');
	}

	.park03 .adv2 {
		padding-top: 0.2rem;
	}
</style>
