<template>
	<div class="ticketsCode ee2019">
		<div class="con">
			<img src="../../../../static/img/act/ee2019/tickets.jpg" alt="" class="img-w100">
			<div class="code">
				<div class="mb-15 col-fff lh-24"><span class="fs-18 fw-7">Admission ticket for {{type == 2? 'Exhibitor' : (type == 3? 'Sponsor' : (type == 4? 'Participants' : 'Meeting'))}}</span><br /><span
					 class="fs-12">limited personal use</span></div>
				<span id="qrcode" ref="qrcode"></span>
			</div>
		</div>
	</div>
</template>

<script>
	import QRcode from 'qrcodejs2';
	import qs from 'qs';
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				type: this.$route.query.type,
			}
		},
		methods: {
			qrcode() { // 生成二维码
				let text = this.$root.urlPath.M_APF + '/ee2019/home_en';
				let qrcode = new QRcode('qrcode', {
					width: 113,
					height: 113,
					text: text, // 二维码扫描跳转地址
				})
			},
		},
		created() {
			this.$nextTick(function() {
				this.qrcode(); //生成二维码
			})
		},
		mounted() {
			var winHeight = $(window).height() - 40; // 获取当前页面高度
			$('.ticketsCode').css('height', winHeight + 'px');
		},
	}
</script>

<style>
	.ticketsCode .con .code {
		width: 100%;
		position: absolute;
		top: 2.61rem;
		left: 0;
		text-align: center;
	}

	.ticketsCode .con #qrcode {
		padding: .05rem;
		background-color: #fff;
		border-radius: .05rem;
	}
</style>
