<template>
	<div class="ee201901">
		<div class="nav">
			<div>
				<img src="../../../../static/img/act/ee2019/nav-01.png" alt="" class="img-w20">
				<img src="../../../../static/img/act/ee2019/nav-logo.png" alt="" class="img-w89">
			</div>
			<img src="../../../../static/img/act/ee2019/nav-03.png" alt="" class="img-h23">
		</div>
		<div class="con">
			<img src="../../../../static/img/act/ee2019/1-1.png" alt="" class="img-w100">
			<div class="tel">
				<a href="tel:13810923597">+86-13810923597</a><br />
				<a href="tel:18911882352">+86-18911882352</a>
			</div>
			<div class="email">
				<a href="http://www.apftown.com" target="_blank">www.apftown.com</a><br />
				<a href="mailto:info@apftown.com">info@apftown.com</a>
			</div>
		</div>
		<div class="signUp" @click="goSignUp()">
			<img src="../../../../static/img/act/ee2019/btn.png" alt="立即报名" />
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
				url: window.location.href,
			}
		},
		methods: {
			goSignUp() {
				window.location.href = this.$root.urlPath.M_APF + '/ee2019/02';
			},
		},
		created() {
			//wx-share
			var title = '寒冷的2018即将过去，来三亚开启你温暖幸运的2019';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '凛冬骤降，亚太金融小镇新年礼包等你来，点击开启你的三亚温暖之旅';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>

<style>
	.ee201901 .img-w20 {
		width: .2rem;
		height: .19rem;
		margin-right: .24rem;
	}

	.ee201901 .img-h23 {
		width: .235rem;
		height: .23rem;
	}

	.ee201901 .img-w89 {
		width: .89rem;
		height: .23rem;
	}

	.ee201901 .img-w100 {
		width: 100%;
	}

	.ee201901 {
		padding-top: .39rem;
		width: 100%;
		position: relative;
	}
	/* 导航 */
	.ee201901 .nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #313131;
		padding: .085rem .15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;
	}
	/* 内容 */
	.ee201901 .con {
		position: relative;
	}
	
	.ee201901 .con .tel,
	.ee201901 .con .email {
		position: absolute;
		opacity: 0;
	}
	
	.ee201901 .con .tel {
		left: 1.3rem;
		bottom: 2.15rem;
		line-height: .75rem;
	}

	.ee201901 .con .email {
		left: .48rem;
		bottom: 1.42rem;
		line-height: .24rem;
	}
	/* 立即报名按钮 */
	.ee201901 .signUp {
		position: fixed;
		right: 0.2rem;
		top: 4.8rem;
	}
	
	.ee201901 .signUp img {
		width: .66rem;
		height: .66rem;
	}
</style>
