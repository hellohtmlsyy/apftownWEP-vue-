<template>
	<div>
		<div class="act_train06">
			<div class="share">
				<div class="share_con">
					<div class="tit">恭喜您预订成功！</div>
					<div style="width: 100%;">
						<iframe frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0545zct46r&tiny=0&auto=0" allowfullscreen></iframe>
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
			<div class="lay" style="width: 100%;text-align: center;background-color: rgba(0,0,0,0.8);height:100%" v-show="shareLay" @click="closeLay()">
				<img src="../../../../static/img/act/20181008/share.png" alt="" style="width: 75%;margin-top:0.2rem" />
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
			}
		},
		methods: {
			goNextpage(){
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018100801';
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
		    $('.act_train06').css('height', winHeight + 'px');     
		},
		created(){
		    //wx-share
		    var title = '亚太金融小镇培训基地欢迎您';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '白天面朝大海，夜晚仰望星空，上课金融学习，下课资本沙龙，来三亚度过一段难忘同窗时光';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
			
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");
	.act_train06{
		background-color: #eee;
		height: 100%;
		width: 100%;
		padding: 0.25rem 0.18rem;
		position: relative;
	}
	.act_train06 .lay{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		font-size: 0;
		z-index: 100000;
	}
	.act_train06 .share .share_con{
		background-color: #fff;
		border-radius: 10px;
		padding: 0.15rem 0.2rem;
		box-shadow: 6px 6px 8px 0px rgba(42, 56, 30, 0.15);
		border: solid 2px #6bbe21;
	}
	.act_train06 .share .share_con .text{
		font-size: 0.12rem;
		color: #333;
		text-align: center;
		margin-top: 0.05rem;
	}
	.act_train06 .share .share_con .tit{
		font-size: 0.24rem;
		color: #6bbe21;
		text-align: center;
		margin-bottom: 0.13rem;
	}
	.act_train06 .share_con .contact_us{
		margin-top: 0.15rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #d5e0c9;
	}
	.act_train06 .share_con .contact_us .title{
		color: #fff;
		background-color: #6bbe21;
		font-size: 0.15rem;
		padding: 0.08rem 0.1rem;
		border-radius: 5px 5px 0 0;
	}
	.act_train06 .contact_us ul{
		padding: 0.1rem 0.1rem;
	}
	.act_train06 .contact_us ul li{
		font-size: 0.12rem;
		color: #333;
		line-height: 0.2rem;
	}
	.act_train06 .share .share_con .share_btn{
		width: 100%;
		text-align: center;
		margin-top: 0.15rem;
	}
	.act_train06 .share .share_con .share_btn span{
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
		position: absolute;
		bottom: 0.2rem;
		left: 0;
		width: 100%;
		padding: 0 0.18rem;
	}
	.act_train06 .btn{
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
</style>