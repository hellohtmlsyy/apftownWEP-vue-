<template>
	<div class="subDetails subDetails_zh conference">
		<div class="content">
			<div class="perInfo">
				<div class="tit"><span>{{type == 1? '参会': (type == 2? '参展': '赞助')}}费用</span><span class="tit-modify" @click="modify()">修改</span></div>
				<div class="info">
					<div class="col-43 fs-12 mb-30 lh-24">
						<div class="dis-fl"><span class="w64">联系人</span><span class="fw-7">{{info.contactPerson}}&nbsp;&nbsp;&nbsp;&nbsp;{{info.contactMethod}}</span></div>
						<div class="dis-fl border-b-1-d2"><span class="w64">{{type == 3? '赞助级别': '预订类型'}}</span><span class="fw-7">{{info.attendMsg}}</span></div>

						<div class="dis-fl jcSb">
							<span>参考价</span>
							<div class="fw-7" align="right">
								<span class="dis-block" align="left">{{totalPrice[0]}}</span>
								<span class="dis-block" align="left">{{totalPrice[1]}}</span>
								<span class="dis-block" align="left">{{totalPrice[2]}}</span>
							</div>
						</div>
						<div class="dis-fl jcSb border-b-1-d2"><span>优惠</span><span class="fw-7 col-e5004f">{{info.discountMsg}}</span></div>

						<div class="dis-fl jcSb">
							<span>总价</span>
							<div class="col-e5004f fs-16 fw-7" align="right">
								<span class="dis-block" align="left">{{actualAmount[0]}}</span>
								<span class="dis-block" align="left">{{actualAmount[1]}}</span>
								<span class="dis-block" align="left">{{actualAmount[2]}}</span>
							</div>
						</div>
					</div>
					<div class="rec_code">
						<span>对账码</span>
						<div class="border-b-1-d2 dis-fl jcSb aic">
							<span class="fs-15 fw-7 col-333">{{info.checkAccountCode}}</span>
							<span class="copy copy1" v-clipboard:copy="info.checkAccountCode" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
						</div>
						<div class="fs-12 col-70">您可选下缴费方式并在附言处写上您的对账码</div>
					</div>
					<p class="exp">对账码为资金对账唯一凭据，请务必填写</p>
					<div class="payment">
						<img src="../../../../static/img/act/ee2019/payment.png" alt="" class="img-w300">
						<span class="copy copy2" v-clipboard:copy="accountNumber" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
						<span class="copy copy3" v-clipboard:copy="accountNumber2" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</span>
					</div>
				</div>
			</div>
			<div class="contact">
				<img src="../../../../static/img/act/ee2019/concact.png" alt="" class="img-w100">
				<a href="tel:4006702139" class="tel">400-670-2139</a>
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
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/sponsorReg?operate=modify';
				} else { // 参展参会跳转列表
					window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=' + this.type;
				}
			},
			onCopy: function(e) {
				this.$layer.msg('复制成功');
			},
			onError: function(e) {
				this.$layer.msg('复制失败');
			},
			getInfo() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/participants/prepay', { // 获取预付款信息
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						type: this.$route.query.type,
						language: 0,
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

	.subDetails .w64 {
		width: .64rem;
	}

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
		font-size: .16rem;
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
  .subDetails_zh .content .rec_code {
		background-color: #fff;
		border-radius: .1rem;
		border: solid 1px #d2d2d2;
		padding: .12rem .13rem .19rem .4rem;
	}

  .subDetails_zh .rec_code>span {
    padding: 0 .06rem;
    color: #fff;
  }

	.subDetails_zh .info .exp {
		font-size: .15rem;
		color: #e5004f;
		font-weight: 700;
		letter-spacing: .01rem;
		text-align: center;
		margin: .04rem 0 .29rem;
	}

	/* 复制按钮 */
	.subDetails .info .copy {
		font-size: .14rem;
		color: #00a0e9;
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

	.subDetails_zh .payment .copy {
		position: absolute;
		right: .15rem;
		border-radius: .03rem;
		width: .5rem;
		height: .2rem;
		line-height: .2rem;
	}

	.subDetails_zh .info .copy2 {
		top: .84rem;
	}

	.subDetails_zh .info .copy3 {
		bottom: .16rem;
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
