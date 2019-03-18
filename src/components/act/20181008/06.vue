<template>
	<div>
		<div class="act_train06">
			<div class="charge">
				<div class="advance">预付定金</div>
				<div class="chargeCon">
					<div class="number fs-12 col-70">
						<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 22%;" class="fl">联系姓名</span><span style="text-align: right;font-weight: 600;"
							 class="fr">{{ info.contactPerson }}</span></div>
						<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 22%;" class="fl">联系手机</span><span style="text-align: right;font-weight: 600;"
							 class="fr">{{ info.mobile }}</span></div>
					</div>
					<div class="total pd-16">
						<span class="fs-12 col-70" style="width: 20%;">定金</span><span style="width: 80%;text-align: right;color: #e5004f;font-size: 0.16rem;font-weight: 600;">&yen;1000</span>
					</div>
					<div class="account_code pd-16">
						<span class="fs-12 col-70" style="width: 16%;">对账码</span><span style="width: 67%;font-weight: 600;font-size: 0.15rem;">{{ info.checkAccountCode }}</span><img
						 src="../../../../static/img/act/20180818/copy.png" style="width:0.5rem;vertical-align: top;" v-clipboard:copy="info.checkAccountCode"
						 v-clipboard:success="onCopy" v-clipboard:error="onError" />
					</div>
					<div align="right" class="fs-12 pd-16">
						<div class="col-70">您可选择以下缴费方式并在附言处写上您的对账码</div>
						<div style="color: #e60012;margin-top: 0.02rem;">对账码为资金对账唯一凭据，请务必填写</div>
					</div>
					<div class="pay clearfix" style="position: relative;">
						<img src="../../../../static/img/act/20180818/wxpay.png" alt="" style="width: 49%;margin-right: 2%;" class="fl" />
						<a href="https://qr.alipay.com/tsx05083hhll5w57sgvuo41"><img src="../../../../static/img/act/20180818/zfbpay.png"
							 alt="" style="width: 49%;" class="fl" /></a>
						<div>
							<img src="../../../../static/img/act/20180818/zhpay.png" alt="" style="width: 100%;margin-top: 0.1rem;" />
							<img src="../../../../static/img/act/20180818/copy.png" style="width:0.5rem;vertical-align: top;position: absolute;bottom: 0.28rem;right: 0.1rem;opacity: 0;"
							 v-clipboard:copy="accountNumber" v-clipboard:success="onCopy" v-clipboard:error="onError" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="share">
					<div class="share_con">
						<div style="width: 100%;">
							<iframe style="border-radius: 5px;" frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0545zct46r&tiny=0&auto=0"
							 allowfullscreen></iframe>
						</div>
						<div class="text">亚太金融小镇介绍视频</div>
						<div class="contact_us">
							<div class="title">联系我们</div>
							<ul class="contact_info">
								<li>联系电话&nbsp;&nbsp;400-670-2139</li>
								<li>联系地址&nbsp;&nbsp;海南省三亚市海棠湾亚太金融小镇3号楼</li>
								<li>电子邮箱&nbsp;&nbsp;info@apftown.com</li>
								<li>官方网址&nbsp;&nbsp;www.apftown.com</li>
							</ul>
						</div>
						<div class="share_btn" @click="share()"><span>立即分享给好友</span></div>
					</div>
				</div>
				<div class="return">
					<div class="btn" @click="goNextpage">返回</div>
				</div>
				<div class="lay" style="width: 100%;text-align: center;background-color: rgba(0,0,0,0.8);height:100%" v-show="shareLay"
				 @click="closeLay()">
					<img src="../../../../static/img/act/20181008/share.png" alt="" style="width: 75%;margin-top:0.2rem" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		wxShare,
		setCookie,
		getCookie,
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				shareLay: false,
				url: window.location.href,
				accountNumber: '78990188000266009',
				info: [],
			}
		},
		methods: {
			onCopy: function(e) {
				this.$layer.msg('复制成功');
				return;
			},
			onError: function(e) {
				this.$layer.msg('复制失败');
				return;
			},
			goNextpage() {
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018100801';
			},
			share() {
				this.shareLay = true;
			},
			closeLay() {
				this.shareLay = false;
			}
		},
		created() {
			this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/activityShareInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
						activityNo: 20181008,
					}
				})
				.then(res => {
					if (res.data.success) {
						this.info = res.data.data;
						//wx-share
						var title = '亚太金融小镇培训基地欢迎您';
						var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
						var desc = '白天面朝大海，夜晚仰望星空，上课金融学习，下课资本沙龙，来三亚度过一段难忘同窗时光';
						var golink = window.location.href;
						wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
					} else {

					}
				})
				.catch(err => {
					console.log(err)
				});
		},
	}
</script>
<style scoped>
	.act_train06 .pd-16 {
		padding: 0.16rem 0;
	}

	.act_train06 {
		background-color: #eee;
		height: 100%;
		width: 100%;
		padding: 0.25rem 0.18rem;
		position: relative;
	}

	.act_train06 .lay {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		font-size: 0;
		z-index: 100000;
	}

	.act_train06 .share .share_con {
		background-color: #fff;
		border-radius: 10px;
		padding: 0.15rem 0.2rem;
		box-shadow: 6px 6px 8px 0px rgba(42, 56, 30, 0.15);
		border: solid 2px #6bbe21;
	}

	.act_train06 .share .share_con .text {
		font-size: 0.12rem;
		color: #333;
		text-align: center;
		margin-top: 0.05rem;
	}

	.act_train06 .share .share_con .tit {
		font-size: 0.24rem;
		color: #6bbe21;
		text-align: center;
		margin-bottom: 0.13rem;
	}

	.act_train06 .share_con .contact_us {
		margin-top: 0.15rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #d5e0c9;
	}

	.act_train06 .share_con .contact_us .title {
		color: #fff;
		background-color: #6bbe21;
		font-size: 0.15rem;
		padding: 0.08rem 0.1rem;
		border-radius: 5px 5px 0 0;
	}

	.act_train06 .contact_us ul {
		padding: 0.1rem 0.1rem;
	}

	.act_train06 .contact_us ul li {
		font-size: 0.12rem;
		color: #333;
		line-height: 0.2rem;
	}

	.act_train06 .share .share_con .share_btn {
		width: 100%;
		text-align: center;
		margin-top: 0.15rem;
	}

	.act_train06 .share .share_con .share_btn span {
		font-size: 0.15rem;
		color: #fff;
		width: 1.3rem;
		height: 0.35rem;
		line-height: 0.35rem;
		display: inline-block;
		border-radius: 5px;
		background-color: #6bbe21;
	}

	.act_train06 .return {
		width: 100%;
		margin: 0.2rem 0;
	}

	.act_train06 .btn {
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;
		background-color: #ffffff;
		border: solid 1px #707070;
		color: #6bbe21;
	}

	/*预付定金*/
	.act_train06 .charge {
		width: 100%;
		border-radius: 10px;
		box-shadow: 6px 6px 8px 0px rgba(42, 56, 30, 0.15);
		border: solid 2px #6bbe21;
		background-color: #ffffff;
		margin-bottom: 0.11rem;
		position: relative;
	}

	.act_train06 .charge .chargeCon {
		width: 100%;
		padding: 0.15rem 0.2rem;
	}

	.act_train06 .charge .advance {
		width: 1rem;
		height: 0.24rem;
		background-color: #ffffff;
		border-radius: 0.12rem;
		border: solid 2px #6bbe21;
		position: absolute;
		left: 50%;
		top: -0.12rem;
		margin-left: -0.5rem;
		font-size: 0.15rem;
		color: #6bbe21;
		text-align: center;
	}

	.act_train06 .chargeCon .pay {
		background: #fff !important;
		padding: 0;
	}

	.act_train06 .chargeCon .pay img {
		display: inline-block;
	}

	.act_train06 .chargeCon .number,
	.act_train06 .chargeCon .total,
	.act_train06 .chargeCon .account_code {
		border-bottom: 1px solid #d2d2d2;
	}

	.act_train06 .chargeCon .copy {
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #00a0e9;
		color: #07a5ed;
		font-size: 0.15rem;
		text-align: center;
		width: 16%;
		padding: 0.01rem 0;
	}
</style>
