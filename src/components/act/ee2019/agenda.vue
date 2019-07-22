<template>
	<div class="ee2019 ee201906">
		<div class="con">
			<img :src="('../../../../static/img/act/ee2019/' + conImgSrc + '.png')" alt="" class="img-w100">
			<div class="ee-tab">
				<span @click="tab_conImgSrc('6-1-1')">11月28日<br />星期四</span>
				<span @click="tab_conImgSrc('6-2-1')">11月29日<br />星期五</span>
				<span @click="tab_conImgSrc('6-3-1')">11月30日<br />星期六</span>
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
				conImgSrc: '6-1-1', // 默认展示内容图
			}
		},
		methods: {
			tab_conImgSrc(val) {
				// 切换对应内容图
				this.conImgSrc = val;
			},
		},
		mounted() {
			var winHeight = $(window).height() - 40; // 获取当前页面高度
			if (winHeight > 680) {
				$('.ee201906').css('height', winHeight + 'px');
			}
		},
	}
</script>

<style>
	.ee201906 .ee-tab {
		position: absolute;
		top: .85rem;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.ee201906 .ee-tab span {
		width: .88rem;
		height: .88rem;
		font-size: .15rem;
		color: #fff;
		background-color: red;
		text-align: center;
		padding: .22rem 0;
		border-radius: 50%;
		opacity: 0;
	}
</style>
