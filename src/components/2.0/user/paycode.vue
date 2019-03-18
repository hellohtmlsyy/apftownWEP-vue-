<template>
	<div class="paycode m">
		<div class="content">
			<div class="textbox">
				<span class="fs-18 mb-10">小镇金元宝支付码</span>
				<div class="fs-12">请把二维码出示给工作人员核销</div>
			</div>
			<div id="qrcode" ref="qrcode" class="dis-fl"></div>
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
				qrCode: '',
			}
		},
		methods: {
			ewm() {
				//获取token 五分钟一次
				setInterval(() => {
					this.$axios.post(this.$root.urlPath.NEW + '/town/coin/getQrCodeToken', (
							qs.stringify({
								APF_UID: getCookie('APF_UID')
							})
						))
						.then(res => {
							if (res.data.success) {
								this.qrCode = res.data.data;
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						})
						.catch(err => {
							console.log(err)
						});
				}, 300000)

				// 获取结果 3秒钟一次
				this.$axios.post(this.$root.urlPath.NEW + '/town/coin/qrCodeResult', (
						qs.stringify({
							APF_UID: getCookie('APF_UID'),
							qrCodeToken: this.qrCode
						})
					))
					.then(res => {
						if (!res.data.success) {
							setInterval(() => {
								this.$axios.post(this.$root.urlPath.NEW + '/town/coin/qrCodeResult', (
										qs.stringify({
											APF_UID: getCookie('APF_UID'),
											qrCodeToken: this.qrCode
										})
									))
									.then(res => {
										if (res.data.success) {
											location.href = this.$root.urlPath.M_APF + '/user/payresult?result=0';
										}
									})
									.catch(err => {
										console.log(err)
									});
							}, 3000)
						}
					})
					.catch(err => {
						console.log(err)
					});

			},
			qrcode() { //生成二维码
				let text = this.$root.urlPath.M_APF + '/user/pay?qrCodeToken=' + this.qrCode;
				let qrcode = new QRcode('qrcode', {
					width: 183,
					height: 183,
					text: text, //二维码扫描跳转地址
				})
			},
		},
		created() {
			this.$axios.post(this.$root.urlPath.NEW + '/town/coin/getQrCodeToken', (
					qs.stringify({
						APF_UID: getCookie('APF_UID')
					})
				))
				.then(res => {
					if (res.data.success) {
						this.qrCode = res.data.data;
						this.$nextTick(function() {
							this.qrcode(); //生成二维码
						})
						this.ewm()
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.m').css('height', winHeight + 'px');
		},
	}
</script>

<style>
	@import url("../../../assets/css/town2.0.css");

	.paycode {
		padding: 0.58rem 0.28rem 0;
	}

	.paycode .content {
		padding: 0 0.125rem;
	}

	.paycode .content .textbox {
		padding: 0.3rem 0;
		border-bottom: 1px solid #dcdcdc;
	}

	.paycode .dis-fl {
		padding: 0.5rem 0;
		justify-content: center;
	}
</style>
