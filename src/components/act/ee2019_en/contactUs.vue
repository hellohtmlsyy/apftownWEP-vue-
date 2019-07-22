<template>
	<div class="ee2019 ee201909">
		<div class="con">
			<img src="../../../../static/img/act/ee2019_en/9-1.png" alt="" class="img-w100">
			<div class="info">
				<div class="mb-15">
					<a href="http://f.amap.com/pYfR_0605gGE" target="_blank">
						<img src="../../../../static/img/act/ee2019_en/9-3.png" alt="" class="img-w100">
					</a>
				</div>
				<div class="contact">
					<img src="../../../../static/img/act/ee2019_en/9-2.png" alt="">
					<div class="tel">
						<a href="tel:13810923597">+86-13810923597</a><br />
						<a href="tel:18911882352">+86-18911882352</a>
					</div>
					<div class="email">
						<a href="http://www.apftown.com" target="_blank">http://www.apftown.com</a><br />
						<a href="mailto:info@apftown.com">info@apftown.com</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			var winHeight = $(window).height() - 40; // 获取当前页面高度
			// if(winHeight > 680) {
			$('.ee201909').css('height', winHeight + 'px');
			// }
		},
	}
</script>

<style>
	.ee201909 .img-w90 {
		width: .9rem;
		height: .9rem;
		margin-bottom: .13rem;
	}

	.ee201909 .con .info {
		position: absolute;
		top: 1.08rem;
		left: 0;
		width: 100%;
		padding: 0 .2rem;
	}

	.ee201909 .info .contact img {
		width: 2.955rem;
	}

	/* 内容 */
	.ee201909 .contact {
		position: relative;
	}

	.ee201909 .contact .tel,
	.ee201909 .contact .email {
		position: absolute;
		opacity: 0;
		font-size: .13rem;
	}

	.ee201909 .contact .tel {
		left: 1.25rem;
		bottom: .77rem;
		line-height: .98rem;
	}

	.ee201909 .contact .email {
		left: 0;
		bottom: -.04rem;
		line-height: .24rem;
	}
</style>
