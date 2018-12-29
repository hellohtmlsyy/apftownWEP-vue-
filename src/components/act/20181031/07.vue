<template>
	<div>
		<div class="act_stay07">
			<div class="charge">
				<div class="advance">预付定金</div>
				<div class="chargeCon">
					<div class="info col70 fs-24" style="background-color: #f4f7fa;">
						<div class="number">
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">联系姓名</span><span style="font-weight: 600;">{{ info.contactPerson }}</span></div>
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">联系手机</span><span style="font-weight: 600;">{{ info.mobile }}</span></div>
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">预订别墅</span><span style="font-weight: 600;">{{ info.numberOfSelfSelection }}栋</span></div>
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">住宿时间</span><span style="font-weight: 600;">{{ info.period }}</span></div>
						</div>
						<div style="padding: 0.1rem 0;">
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">优惠</span><span style="text-align: right;font-weight: 600;color: red;" class="fr">{{ info.discountMsg }}</span></div>
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">参考总价</span><span style="text-align: right;font-weight: 600;" class="fr">&yen;{{ info.totalPrice }}</span></div>
							<div style="margin-bottom: 0.08rem;" class="clearfix"><span style="width: 25%;" class="fl">折扣价</span><span style="text-align: right;font-weight: 600;color: red;" class="fr">&yen;{{ info.discountPrice }}</span></div>
						</div>
					</div>
					<div style="padding: 0 0.08rem 0.15rem 0.08rem;">
						<div class="total pd-16">
							<span class="fs-24 col70" style="width: 20%;">预付定金</span><span style="width: 80%;text-align: right;color: #e5004f;font-size: 0.16rem;font-weight: 600;">&yen;1000</span>
						</div>
						<div class="account_code pd-16">
							<span class="fs-24 col70" style="width: 16%;">对账码</span><span style="width: 67%;font-weight: 600;font-size: 0.15rem;">{{ info.checkAccountCode }}</span><img src="../../../../static/img/act/20180818/copy.png" style="width:0.5rem;vertical-align: top;" v-clipboard:copy="info.checkAccountCode" v-clipboard:success="onCopy" v-clipboard:error="onError"/>
						</div>
						<div align="right" class="fs-24 pd-16">
							<div class="col70">您可选择以下缴费方式并在附言处写上您的对账码</div>
							<div style="color: #e60012;margin-top: 0.02rem;">对账码为资金对账唯一凭据，请务必填写</div>
						</div>
						<div class="pay clearfix" style="position: relative;">
							<img src="../../../../static/img/act/20180818/wxpay.png" alt="" style="width: 49%;margin-right: 2%;" class="fl"/>
							<a href="https://qr.alipay.com/tsx05083hhll5w57sgvuo41"><img src="../../../../static/img/act/20180818/zfbpay.png" alt="" style="width: 49%;" class="fl"/></a>
							<div>
								<img src="../../../../static/img/act/20180818/zhpay.png" alt="" style="width: 100%;margin-top: 0.1rem;"/>
								<img src="../../../../static/img/act/20180818/copy.png" style="width:0.5rem;vertical-align: top;position: absolute;bottom: 0.28rem;right: 0.1rem;opacity: 0;" v-clipboard:copy="accountNumber" v-clipboard:success="onCopy" v-clipboard:error="onError"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="share">
					<div class="share_con">
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
				<div class="lay" style="width: 100%;text-align: center;background-color: rgba(0,0,0,0.8);height:100%" v-show="shareLay" @click="closeLay()">
					<img src="../../../../static/img/act/20181008/share.png" alt="" style="width: 75%;margin-top:0.2rem" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { wxShare,setCookie,getCookie, } from '@/assets/commonjs/util.js';
	export default {
		data(){
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
			goNextpage(){
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018103101';
			},
			share(){
				this.shareLay = true;
			},
			closeLay(){
				this.shareLay = false;
			}
		},
		created(){
      // 预付定金信息
			this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/activityShareInfo',{
				params: {
					APF_UID: getCookie('APF_UID'),
					activityNo: '20181031',
				}
			} )
			.then(res=>{
				if(res.data.success){
					this.info = res.data.data;
					//wx-share
				    var title = '寒冷的2018即将过去，来三亚开启你温暖幸运的2019';
				    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
				    var desc = '凛冬骤降，亚太金融小镇新年礼包等你来，点击开启你的三亚温暖之旅';
				    var golink = window.location.href;
					wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
				}else{

				}
			})
      .catch(err=>{console.log(err)});
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");
	.act_stay07{
		background-color: #fff;
		height: 100%;
		width: 100%;
		padding: 0.25rem 0.18rem;
		position: relative;
	}
	.act_stay07 .lay{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		font-size: 0;
		z-index: 100000;
	}
	.act_stay07 .share .share_con{
		background-color: #fff;
		border-radius: 10px;
		border: solid 1px #d5e0c9;
	}
	.act_stay07 .share .share_con .tit{
		font-size: 0.24rem;
		color: #6bbe21;
		text-align: center;
		margin-bottom: 0.13rem;
	}
	.act_stay07 .share_con .contact_us{
		background-color: #ffffff;
		border-radius: 5px;
	}
	.act_stay07 .share_con .contact_us .title{
		color: #fff;
		background-color: #00a0e9;
		font-size: 0.15rem;
		padding: 0.04rem 0.1rem;
		border-radius: 5px 5px 0 0;
	}
	.act_stay07 .contact_us ul{
		padding: 0.1rem;
	}
	.act_stay07 .contact_us ul li{
		font-size: 0.12rem;
		color: #333;
		line-height: 0.2rem;
	}
	.act_stay07 .share .share_con .share_btn{
		width: 100%;
		text-align: center;
		margin: 0.05rem 0 0.15rem 0;
	}
	.act_stay07 .share .share_con .share_btn span{
		font-size: 0.15rem;
		color: #fff;
		width: 1.3rem;
		height: 0.35rem;
		line-height: 0.35rem;
		display: inline-block;
		border-radius: 6px;
		background-color: #00A0E9;
	}
	.act_stay07 .return {
		width: 100%;
		margin: 0.2rem 0;
	}
	.act_stay07 .btn{
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;
		background-color: #ffffff;
		border: solid 1px #707070;
		color: #00a0e9;
	}
	/*预付定金*/
	.act_stay07 .charge{
		width: 100%;
		border-radius: 10px;
		box-shadow: 4px 4px 0px 0px rgba(30, 45, 56, 0.2);
		border: solid 1px #368aab;
		background-color: #ffffff;
		margin-bottom: 0.11rem;
		position: relative;
	}
	.act_stay07 .charge .chargeCon{
		width: 100%;
		padding: 0.08rem 0.12rem;
	}
	.act_stay07 .charge .advance{
		width: 1rem;
		height: 0.24rem;
		background-color: #ffffff;
		border-radius: 0.12rem;
		border: solid 2px #1a80a4;
		position: absolute;
		left: 50%;
		top: -0.12rem;
		margin-left: -0.5rem;
		font-size: 0.15rem;
		color: #1a80a4;
		text-align: center;
	}
	.act_stay07 .chargeCon .info{
		padding: 0.07rem 0.08rem 0 0.08rem;
		border-radius: 5px;
	}
	.act_stay07 .chargeCon .pay img{
		display: inline-block;
	}
	.act_stay07 .chargeCon .number,.act_stay07 .chargeCon .total,.act_stay07 .chargeCon .account_code{
		border-bottom: 1px solid #d2d2d2;
	}
	.act_stay07 .chargeCon .copy{
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #00a0e9;
		color: #07a5ed;
		font-size: 0.15rem;
		text-align: center;
		width: 16%;
		padding: 0.01rem 0;
	}
	.fs-24{
		font-size: 0.12rem;
	}
	.col70{
		color: #707070;
	}
	.pd-16{
		padding: 0.16rem 0;
	}
</style>
