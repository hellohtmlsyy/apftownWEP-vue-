<template>
	<div>
		<div class="act01">
			<div class="con">
				<div class="btn" @click="goNextpage">一探究竟</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data(){
			return {
				url: window.location.href,
			}
		},
		methods: {
			goNextpage(){
				window.location.href = this.$root.urlPath.M_APF + '/act/act2018080802';
			}
		},
		mounted(){
		    var winHeight = $(window).height(); //获取当前页面高度  
		    $('.act01').css('height', winHeight + 'px');     
		    //wx-share
		    var title = '2018海南优质项目对接会,三亚亚太金融小镇等你来';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '8月31日海棠湾，三亚市政府主办，汇聚国内外优势资本，对接海南岛优质项目';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
		created(){
		},
	}
</script>
<style scoped>
	.act01{
		background-image: url(../../../../static/img/act/20180808/bg01.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
	}
	.act01 .con{
		padding: 0 0.18rem;
		position: absolute;
		bottom: 0.44rem;
		left: 0;
	    right: 0;
	    margin: 0 auto;
	}
	.act01 .con .btn{
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;		
	}
</style>