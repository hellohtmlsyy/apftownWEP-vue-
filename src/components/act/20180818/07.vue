<template>
	<div>
		<div class="act07">
			<div class="con">
				<div class="forward">
					<img src="../../../../static/img/act/20180818/7-1.png" alt="" />
					<div class="text tac">
						<div class="tit">恭喜您报名成功！</div>
						<div class="pos">您成为亚太金融周第 <span>{{ info.no }}</span> 位报名成功的用户！</div>
					</div>
					<div class="forbtn tac">
						<button type="button" @click="share()">立即转发</button>
					</div>
				</div>
				<div class="charge">
					<div class="chargeCon">
						<div class="number fs-24 col70">
							<div style="margin-bottom: 0.08rem;"><span style="width: 22%;">参会人数</span><span style="width: 15%;font-weight: 600;">{{ info.numberOfParticipants }}人</span><span style="width: 35%;text-align: right;">{{ info.discountMsg }}</span><span style="width: 28%;text-align: right;font-weight: 600;">&yen; {{ info.priceOfParticipants }}</span></div>
							<div style="margin-bottom: 0.08rem;"><span style="width: 22%;">考察人数</span><span style="width: 15%;font-weight: 600;">{{ info.numberOfSelfSelection }}人</span><span style="width: 35%;text-align: right;">{{ info.discountMsg }}</span><span style="width: 28%;text-align: right;font-weight: 600;">&yen; {{ info.priceOfSelfSelection }}</span></div>
						</div>
						<div class="total pd-16">
							<span class="fs-24 col70" style="width: 20%;">总计</span><span style="width: 80%;text-align: right;color: #e5004f;font-size: 0.16rem;font-weight: 600;">&yen;{{ info.totalPrice }}</span>
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
			<div class="back">
				<div class="btn" @click="goNextpage">返回</div>
			</div>
			<div class="lay" style="width: 100%;" v-show="shareLay"><img src="../../../../static/img/act/20180818/18layer.png" alt="" style="width: 100%;height: 100%;" @click="closeLay()"/></div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import Clipboard from 'clipboard';
	import { setCookie,getCookie,wxShare } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	var time = null;
	export default {
		data(){
			return {
				activityNo: 20180818,//活动编号 
				activityDesc: '2019三亚国际金融周',//活动描述
				url: window.location.href,
				shareLay: false,
				accountNumber: '78990188000266009',
				info: [],
				invitationCode: this.$route.query.invitationCode,
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
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018081801?invitationCode=' + this.invitationCode;
			},
			share(){
				this.shareLay = true;
			},
			closeLay(){
				this.shareLay = false;
			},
		},
		created(){
			this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/financialWeeklyShareInfo',{
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			} )
			.then(res=>{
				if(res.data.success){
					var data = res.data.data;
					this.info = data;
					//wx-share
				    var title = '2019三亚国际金融周-资本项目对接会';
				    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
				    var desc = '抛弃论坛大模式 对接资金好项目 头脑风暴等着你 十项全能挑战你——一场酣畅淋漓的金融精英嘉年华';
				    var golink = window.location.href;
					wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
				}else{
					
				}
			})
			.catch(err=>{console.log(err)});
			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			})
			.then(res => {
				if(res.data.success) {
					//是否报名
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: '20180818',
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if(res.data.data!=false) {
							
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018081806?invitationCode=' + this.invitationCode;
						}
					})
					.catch(err => {
						console.log(err)
					})
				}else{
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018081801?invitationCode=' + this.invitationCode;
				}
			})
			.catch(err => {
				console.log(err)
			});
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");
	.fs-24{
		font-size: 0.12rem;
	}
	.col70{
		color: #707070;
	}
	.tac{
		text-align: center;
	}
	.pd-16{
		padding: 0.16rem 0;
	}
	.act07{
		background-image: url(../../../../static/img/act/20180818/bg-7.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		padding: 0.16rem 0 0.34rem 0;
		position: relative;
	}
	.act07 .lay{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		font-size: 0;
		z-index: 100000;
	}
	.act07 .con{
		width: 100%;
	}
	.act07 .con .forward{
		position: relative;
		width: 100%;
		margin-bottom: 0.2rem;
	}
	.act07 .con .forward img{
		width: 100%;
	}
	.act07 .con .forward .text {
	    position: absolute;
	    left: auto;
	    top: 0.12rem;
	    width: 100%;
	}
	.act07 .forward .text .tit{
		font-size: 0.21rem;
		color: #e5004f;
		font-weight: 600;
		margin-bottom: 0.14rem;
	}
	.act07 .forward .text .pos{
		font-size: 0.14rem;
		color: #707070;
		margin-bottom: 0.16rem;
	}
	.act07 .forward .text .pos span{
		color: #e5004f;
	}
	.act07 .forward .forbtn{
		width: 100%;
		position: absolute;
		bottom: 0.12rem;
		left: auto;
	}
	.act07 .forward .forbtn button{
		width: 1.2rem;
		height: 0.32rem;
		border-radius: 5px;
		border: solid 1px #e5004f;
		font-size: 0.16rem;
		line-height: 0.32rem;
		color: #e5004f;
		background-color: rgba(255,255,255,0);
	}
	
	.act07 .con .charge{
		width: 100%;
		padding: 0 0.18rem;
	}
	.act07 .con .charge .chargeCon{
		width: 100%;
		background-color: #ffffff;
		border-radius: 5px;
		padding: 0.18rem;
	}
	.act07 .chargeCon .pay img{
		display: inline-block;
	}
	.act07 .chargeCon .number,.act07 .chargeCon .total,.act07 .chargeCon .account_code{
		border-bottom: 1px solid #d2d2d2;
	}
	.act07 .chargeCon .copy{
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #00a0e9;
		color: #07a5ed;
		font-size: 0.15rem;
		text-align: center;
		width: 16%;
		padding: 0.01rem 0;
	}
	.act07 .back{
		padding: 0 0.18rem;
		margin-top: 0.2rem;
	}
	.act07 .back .btn{
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;		
		border: none;
		color: #1b1b1b;
		padding: 0;
	}
</style>