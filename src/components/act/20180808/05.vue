<template>
	<div>
		<div class="act05">
			<div class="share">
				<div class="share_con">
					<div class="tit">恭喜您报名成功！</div>
					<div style="width: 100%;">
						<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0545zct46r&tiny=0&auto=0" allowfullscreen></iframe>
					</div>
					<div class="int"> 三亚·亚太金融小镇作为海南的第一个金融小镇，第一期2.8万平方米已经建成，地处国家海岸海棠湾，享有三亚税收返还政策优惠，与301医院及人大附中近在咫尺。小镇以海上丝绸之路总部基地，亚太金融资本合作平台为宗旨，致力于打造产学研三位一体的金融平台。</div>
					<div class="share_btn" @click="share()"><span>立即分享给好友</span></div>
				</div>
			</div>
			<div class="con">
				<div class="btn" @click="goNextpage">返回</div>
			</div>
			<div class="lay" style="width: 100%;" v-show="shareLay"><img src="../../../../static/img/act/shareLay.png" alt="" style="width: 100%;height: 100%;" @click="closeLay()"/></div>
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
			}
		},
		methods: {
			goNextpage(){
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018080801';
			},
			share(){
				this.shareLay = true;
			},
			closeLay(){
				this.shareLay = false;
			}
		},
		mounted(){
		    var winHeight = $(window).height(); //获取当前页面高度  
		    $('.act05').css('height', winHeight + 'px');     
		},
		created(){
		    //wx-share
		    var title = '2018海南优质项目对接会,三亚亚太金融小镇等你来';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '8月31日海棠湾，三亚市政府主办，汇聚国内外优势资本，对接海南岛优质项目';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
			//是否登录
			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo',{
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			} )
			.then(res=>{
				if(res.data.success){
					this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: 20180808,
							APF_UID: getCookie('APF_UID'),
						}
					} )
					.then(res=>{
						if(res.data.data){
							
						}else{
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018080804';
						}
					})
					.catch(err=>{console.log(err)})
				}else{
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018080801';
				}
			})
			.catch(err=>{console.log(err)});
		},
	}
</script>
<style scoped>
	.act05{
		background-image: url(../../../../static/img/act/20180808/bg05.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
	}
	.act05 .lay{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		font-size: 0;
		z-index: 100000;
	}
	.act05 .share{
		padding: 0.45rem 0.18rem 0;
	}
	.act05 .share .share_con{
		background-color: #fff;
		border-radius: 10px;
		padding: 0.26rem 0.26rem 0.32rem 0.26rem;
	}
	.act05 .share .share_con .tit{
		font-size: 0.24rem;
		color: #e5004f;
		text-align: center;
		margin-bottom: 0.23rem;
	}
	.act05 .share .share_con .int{
		font-size: 0.12rem;
		color: #1c232b;
		text-indent: 2em;
		letter-spacing: -0.5px;
		line-height: 0.18rem;
		margin-top: 0.18rem;
	}
	.act05 .share .share_con .share_btn{
		width: 100%;
		text-align: center;
		margin-top: 0.23rem;
	}
	.act05 .share .share_con .share_btn span{
		font-size: 0.15rem;
		color: #e5004f;
		width: 1.3rem;
		height: 0.33rem;
		line-height: 0.33rem;
		display: inline-block;
		border-radius: 5px;
		border: solid 1px #ec6841;
	}
	.act05 .con{
		padding: 0 0.18rem;
		position: absolute;
		bottom: 0.44rem;
		left: 0;
	    right: 0;
	    margin: 0 auto;
	}
	.act05 .con .btn{
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;		
	}
</style>