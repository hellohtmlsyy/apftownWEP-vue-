<template>
	<div class="subDetails subDetails_en conference">
		<div class="content">
			<div class="perInfo">
				<div class="tit"><span>{{type == 1? 'Participation fee': (type == 2? 'Exhibition fee': 'Sponsorship Fee')}}</span><span
					 class="tit-modify" @click="modify()">Modify</span></div>
				<div class="info">
					<div class="col-43 fs-12 mb-30 lh-24">
						<div class="dis-fl jcSb"><span>Contact</span><span class="fw-7" align="right">{{info.contactPerson}}&nbsp;&nbsp;&nbsp;&nbsp;{{info.contactMethod}}</span></div>
						<div class="dis-fl border-b-1-d2 jcSb"><span>{{type == 3? 'Sponsorship level': 'Reservation type'}}</span><span
							 class="fw-7">{{info.attendMsg}}</span></div>
						<div class="dis-fl jcSb">
							<span>Reference price</span>
							<div class="fw-7" align="right">
								<span class="dis-block" align="left">{{totalPrice[0]}}</span>
								<span class="dis-block" align="left">{{totalPrice[1]}}</span>
								<span class="dis-block" align="left">{{totalPrice[2]}}</span>
							</div>
						</div>
						<div class="dis-fl jcSb border-b-1-d2"><span>Discount</span><span class="fw-7 col-e5004f">{{info.discountMsg}}</span></div>
						<div class="dis-fl jcSb">
							<span>Total Price</span>
							<div class="col-e5004f fs-16 fw-7" align="right">
								<span class="dis-block" align="left">{{actualAmount[0]}}</span>
								<span class="dis-block" align="left">{{actualAmount[1]}}</span>
								<span class="dis-block" align="left">{{actualAmount[2]}}</span>
							</div>
						</div>
					</div>
					<div class="rec_code">
						<div class="code">
							<span class="mr-20 fw-7">{{info.checkAccountCode}}</span>
							<span class="copy copy1" v-clipboard:copy="info.checkAccountCode" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</span>
						</div>
					</div>
					<div class="payment">
						<img src="../../../../static/img/act/ee2019_en/payment.png" alt="" class="img-w300">
						<span class="copy copy2" v-clipboard:copy="accountNumber2" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</span>
						<span class="copy copy3" v-clipboard:copy="accountNumber" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</span>
					</div>
				</div>
			</div>
			<div class="contact">
				<img src="../../../../static/img/act/ee2019_en/concact.png" alt="" class="img-w100">
				<a href="tel:4006702139" class="tel">+86-400-670-2139</a>
				<div class="email">
					<a href="http://www.apftown.com" target="_blank">http://www.apftown.com</a><br />
					<a href="mailto:info@apftown.com">info@apftown.com</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				checkAccountCode: '',
				accountNumber: '78990188000266009',
				accountNumber2: '053173704838',
				info: [],
				totalPrice: [], //参考价
				actualAmount: [], //总价
				type: this.$route.query.type,
			}
		},
		methods: {
			modify() {
				// 修改
				if (this.type == 3) { //赞助跳转赞助页
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/sponsorReg_en?operate=modify';
				} else { // 参展参会跳转列表
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList_en?type=' + this.type;
				}
			},
			onCopy: function(e) {
				this.$layer.msg('Successful replication');
			},
			onError: function(e) {
				this.$layer.msg('copy failed');
			},
			getInfo() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/participants/prepay', { // 获取预付款信息
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						type: this.$route.query.type,
						language: 1,
					}
				}).then(res => {
					if (res.data.success) {
						this.info = res.data.data;
						this.totalPrice = res.data.data.totalPrice.split(',');
						this.actualAmount = res.data.data.actualAmount.split(',');
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				}).catch(err => {
					console.log(err)
				})
			}
		},
		created() {
			this.getInfo();
		},
	}
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	.subDetails .border-b-1-d2 {
		padding-bottom: .1rem;
		margin-bottom: .1rem;
	}

	.subDetails .col-e5004f {
		color: #E5004F;
	}

	.subDetails .img-w300 {
		width: 3rem;
	}

	/* content */
	.subDetails .content {
		width: 100%;
		padding: .2rem .15rem .5rem;
		margin: 0;
	}

	.subDetails .perInfo {
		padding-bottom: 0 !important;
	}

	.subDetails .perInfo .tit {
		background-color: #eb6100;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: .09rem;
		line-height: inherit;
	}

	.subDetails .perInfo .tit-modify {
		width: .5rem;
		height: .24rem;
		line-height: .24rem;
		font-size: .12rem;
		color: #eb6100;
		text-align: center;
		background-color: #fff;
		border-radius: .12rem;
		font-weight: 400;
	}

	.subDetails .content .info {
		padding: .17rem .22rem .3rem;
		border-radius: .1rem;
		background-color: #fff;
		margin-bottom: .2rem;
	}

	/* 对账码 */
  	.subDetails_en .content .rec_code {
		background-image: url('../../../../static/img/act/ee2019_en/rec_code.png');
		background-size: 100% 100%;
		height: 1.3rem;
		padding: .12rem .15rem .12rem .4rem;
		margin-bottom: .08rem;
	}

	.subDetails_en .content .rec_code .code {
		position: absolute;
		left: .43rem;
		top: .54rem;
		color: #333;
		font-size: .15rem;
	}

	.subDetails_en .rec_code>span {
		color: #71bff0;
	}

	/* 复制按钮 */
	.subDetails .info .copy {
		font-size: .14rem;
		color: #07a5ed;
		background-color: #fff;
		border: solid 1px #00a0e9;
		text-align: center;
	}

	.subDetails .info .copy1 {
		border-radius: .11rem;
		width: .45rem;
		height: .22rem;
		line-height: .22rem;
	}

	.subDetails .payment {
		position: relative;
		width: 100%;
	}

	.subDetails_en .payment .copy {
		position: absolute;
		right: .15rem;
		border-radius: .1rem;
		width: .45rem;
		height: .22rem;
		line-height: .22rem;
	}

	.subDetails_en .info .copy2 {
		top: 1.5rem;
	}

	.subDetails_en .info .copy3 {
		bottom: .15rem;
	}

	/* 联系我们 */
	.subDetails .contact {
		position: relative;
	}

	.subDetails .contact .tel,
	.subDetails .contact .email {
		position: absolute;
		opacity: 0;
	}

	.subDetails .contact .tel {
		left: .38rem;
		top: .8rem;
	}

	.subDetails .contact .email {
		left: .21rem;
		bottom: .2rem;
		line-height: .18rem;
	}
</style>
