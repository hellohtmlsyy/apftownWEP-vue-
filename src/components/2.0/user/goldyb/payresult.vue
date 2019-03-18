<template>
	<div class="payresult m">
		<div class="content">
			<img src="../../../../../static/img/2.0/user/icon-pay.png" alt="" class="img-w62">
			<div class="col-333 mb-134" style="font-size: 0.24rem;">{{result}}成功</div>
			<a href="/user/bill" class="btn" v-show="(result == '支付')">完成</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				result: this.$route.query.result == 0 ? '支付' : '核销',
			}
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.m').css('height', winHeight + 'px');
		},
	}
</script>

<style>
	@import url("../../../../assets/css/town2.0.css");

	.mb-134 {
		margin-bottom: 1.34rem;
	}

	.payresult .img-w62 {
		width: 0.62rem;
		margin-bottom: 0.15rem;
	}

	.payresult {
		padding: 0.58rem 0.28rem 0;
	}

	.payresult .content {
		padding: 0.61rem 0.4rem 0.49rem;
	}

	.payresult .content .btn {
		height: 0.4rem;
		background-color: #22ac38;
		border-radius: 0.2rem;
		color: #fff;
		font-size: 0.18rem;
		line-height: 0.4rem;
		display: block;
	}
</style>
