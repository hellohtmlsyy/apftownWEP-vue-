<template>
	<div>
		<div class="act02">
			<div class="conImg">
				<div class="imgBox">
					<img src="../../../../static/img/act/20180808/02con.png"/>
				</div>
				<div class="imgBox mr-t14-">
					<a href="http://f.amap.com/pYfR_0605gGE" target="_blank">
						<img src="../../../../static/img/act/20180808/02con2.png" style="margin-top:0.2rem"/>
					</a>
				</div>
				<div class="imgBox mr-t14- telBox">
					<img src="../../../../static/img/act/20180808/02con3.png" style="margin-top:0.25rem;margin-bottom: 0.25rem;"/>
					<div class="tel">
						<a href="tel:13810923597">13810923597</a>
						<a href="tel:18911882352">18911882352</a>
					</div>
				</div>
			</div>
			<div class="con">
				<div class="btn cp" @click="goNextpage">立即参加</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { wxShare,getCookie } from '@/assets/commonjs/util.js';
	export default {
		data(){
			return {
				url: window.location.href,
				test: false,
				enroll: false,
			}
		},
		methods: {
			goNextpage(){
				if( !this.test ){
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018080803';
				}else{
					if( !this.enroll ){
						window.location.href = this.$root.urlPath.M_APF + '/act/act2018080804';
					}else{
						window.location.href = this.$root.urlPath.M_APF + '/act/act2018080805';
					}
				}
			}
		},
		created(){
			//wx-share
		    var title = '2018海南优质项目对接会,三亚亚太金融小镇等你来';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '8月31日海棠湾，三亚市政府主办，汇聚国内外优势资本，对接海南岛优质项目';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
			
			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo',{
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			} )
			.then(res=>{
				if(res.data.success){
					this.test = true;
				}
			})
			.catch(err=>{console.log(err)});
			
			this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/actAlready', {
				params: {
					activityNo: 20180808,
					APF_UID: getCookie('APF_UID'),
				}
			} )
			.then(res=>{
				if(res.data.data){
					this.enroll = true;
				}
			})
			.catch(err=>{console.log(err)})
		},
	}
</script>
<style scoped>
	.mr-t14-{
		margin-top: -0.14rem;
	}
	.act02{
		background-image: url(../../../../static/img/act/20180808/bg02.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
	}
	.act02 .conImg{
		padding: 0 0.18rem;
	}
	.act02 .conImg img{
		width: 100%;
	}
	.act02 .conImg .telBox{
		position: relative;
	}
	.act02 .conImg .telBox .tel{
		position: absolute;
	    top: 0.88rem;
   		left: 1.2rem;
	}
	.act02 .conImg .telBox .tel a{
		font-size: 0.12rem;
		text-decoration: none;
		display: block;
		margin-bottom: 0.07rem;
		opacity: 0;
	}
	.act02 .con{
		padding: 0 0.18rem;
		left: 0;
	    right: 0;
	    bottom: 0;
	    margin: 0 auto;
	}
	.act02 .con .btn{
		width: 100%;
		height: 0.41rem;
		margin-bottom: 0.44rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;
	}
</style>