<template>
	<div class="footer">
		<span class="f-box">
			<a href="/home" v-show="(selected!='Home')">
				<img slot="icon" src="../../../../static/img/2.0/footer-1.svg" class="img-w26" alt="首页">
				<p class="col-70">首页</p>
			</a>
			<a href="javascript:;" v-show="(selected=='Home')">
				<img slot="icon" src="../../../../static/img/2.0/footer-a-1.svg" class="img-w26" alt="首页">
				<p>首页</p>
			</a>
		</span>
		<span class="f-box">
			<a href="/introduce" v-show="(selected!='Introduction')">
				<img slot="icon" src="../../../../static/img/2.0/footer-2.svg" class="img-w26" alt="简介">
				<p class="col-70">介绍</p>
			</a>
			<a href="javascript:;" v-show="(selected=='Introduction')">
				<img slot="icon" src="../../../../static/img/2.0/footer-a-2.svg" class="img-w26" alt="简介">
				<p>介绍</p>
			</a>
		</span>
		<span class="f-box">
			<a href="/service" v-show="(selected!='Service')">
				<!-- <embed src="../../../../static/img/2.0/footer-3.svg" width="20" height="20" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /> -->
				<img slot="icon" src="../../../../static/img/2.0/footer-3.svg" class="img-w26" alt="服务">
				<p class="col-70">服务</p>
			</a>
			<a href="javascript:;" v-show="(selected=='Service')">
				<img slot="icon" src="../../../../static/img/2.0/footer-a-3.svg" class="img-w26" alt="服务">
				<p>服务</p>
			</a>
		</span>
		<span class="f-box">
			<a href="/user/center" v-show="(selected!='Usercenter')">
				<img slot="icon" src="../../../../static/img/2.0/footer-4.svg" class="img-w26" alt="我的">
				<p class="col-70">我的</p>
			</a>
			<a href="javascript:;" v-show="(selected=='Usercenter')">
				<img slot="icon" src="../../../../static/img/2.0/footer-a-4.svg" class="img-w26" alt="我的">
				<p>我的</p>
			</a>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'c-footer',
		props: ['selected'],
	}
</script>

<style>
	.footer .img-w26 {
		width: 0.2rem;
		height: 0.2rem;
		margin-bottom: 0.03rem;
	}

	.footer {
		background-color: #fff;
		color: #707070;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		box-shadow: 1px 1px 10px 1px #c9c9c9;
		height: 0.54rem;
		z-index: 1001;
		padding: 0.08rem 0.34rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer .f-box {
		font-size: 0.12rem;
		display: block;
		text-align: center;
	}

	.footer .f-box a {
		color: #333;
	}

	.footer .f-box a p {
		font-size: 0.11rem;
		-webkit-transform-origin-x: 0;
		-webkit-transform: scale(0.9);
		margin-left: 0.02rem;
	}
</style>
