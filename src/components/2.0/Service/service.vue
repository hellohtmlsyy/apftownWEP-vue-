<template>
	<div class="service industry">
		<div class="top_bg">亚太金融小镇竭诚为您服务<br /><span class="fs-14 fw-7">小镇服务</span></div>
		<div class="content">
			<div class="adv adv1">
				<div class="fs-18 tac">
					<img src="../../../../static/img/2.0/service/service1-2.png" alt="小镇简介" class="img-w30"><br />
					企业<span class="fw-7">入驻</span>
				</div>
				<div class="right">
					<small>天时地利人和三大优势</small><br />
					<a href="/EnterpriseEntry/01" class="detail">了解详情</a>
				</div>
			</div>

			<div class="adv adv2 mb-15">
				<div class="fs-18 tac">
					<img src="../../../../static/img/2.0/service/service1-4.png" alt="小镇简介" class="img-w30"><br />
					金融<span class="fw-7">民宿</span>
				</div>
				<div class="right">
					<small>体验海子的诗歌田园</small><br />
					<a href="/act/act2018103101" class="detail">立即预订</a>
				</div>
			</div>

			<div class="adv adv3 mb-15">
				<div class="fs-18 tac">
					<img src="../../../../static/img/2.0/service/service1-6.png" alt="小镇简介" class="img-w33"><br />
					培训<span class="fw-7">场地</span>
				</div>
				<div class="right">
					<small>国际金融培训基地</small><br />
					<a href="/act/act2018100801" class="detail">立即预订</a>
				</div>
			</div>

			<div class="adv adv4 mb-15">
				<div class="fs-18 tac">
					<img src="../../../../static/img/2.0/service/service1-8.png" alt="小镇简介" class="img-w30"><br />
					税务<span class="fw-7">服务</span>
				</div>
				<div class="right">
					<small>详尽税务全方位服务介绍</small><br />
					<a href="/taxation/index" class="detail">了解详情</a>
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
				selected: 'Service',
			};
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.service .img-w30 {
		width: 0.3rem;
	}

	.service .img-w33 {
		width: 0.335rem;
	}

	.service .img-w30,
	.service .img-w33 {
		height: 0.3rem;
		margin-bottom: 0.1rem;
	}

	.service .top_bg {
		background-image: url('../../../../static/img/2.0/service/service1-1.jpg');
	}

	.service .content .adv {
		padding: 0.15rem;
		display: flex;
		align-items: center;
	}

	.service .adv1 .right {
		background: url('../../../../static/img/2.0/service/service1-3.jpg');
	}

	.service .adv2 .right {
		background: url('../../../../static/img/2.0/service/service1-5.jpg');
	}

	.service .adv3 .right {
		background: url('../../../../static/img/2.0/service/service1-7.jpg');
	}

	.service .adv4 .right {
		background: url('../../../../static/img/2.0/service/service1-9.jpg');
	}

	.service .adv .right {
		flex: 1;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-left: 0.3rem;
		height: 0.7rem;
		padding: 0.08rem 0.1rem;
		text-align: right;
		color: #fff;
	}

	.service .adv .right .detail {
		width: 0.97rem;
		height: 0.32rem;
		background-color: #fff;
		border-radius: 0.16rem;
		font-size: 0.15rem;
		color: #0e6ced;
		text-align: center;
		line-height: 0.33rem;
		font-weight: 700;
		margin-top: 0.05rem;
		display: inline-block;
	}

	.service .adv2 .right .detail {
		color: #13b5b1;
	}

	.service .adv3 .right .detail {
		color: #32b16c;
	}

	.service .adv4 .right .detail {
		color: #5d7dec;
	}

	.service .adv small {
		margin-right: -0.2rem;
		width: 100%;
	}
</style>
