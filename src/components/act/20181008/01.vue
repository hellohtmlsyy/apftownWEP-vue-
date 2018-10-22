<template>
	<div>
		<div class="act_train01" :style="{backgroundImage: 'url(' + bgurl + ')' }">
			<img src="../../../../static/img/act/20181008/1-btn.png" alt="" class="btn" :style="{bottom: bot}" @click="goSignUp" />
		</div>
	</div>
</template>
<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data(){
			return {
				url: window.location.href,
				bgurl: this.$root.urlPath.M_APF + '/static/img/act/20181008/1-1.jpg',
				bot: '0.15rem',
			}
		},
		methods: {
			goSignUp(){
				window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100802';
			},
		},
		created(){
			//wx-share
		    var title = '亚太金融小镇培训基地欢迎您';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '白天面朝大海，夜晚仰望星空，上课金融学习，下课资本沙龙，来三亚度过一段难忘同窗时光';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
		mounted(){
		    var winHeight = $(window).height(); //获取当前页面高度  
			if( winHeight >680 ){
				this.bgurl = this.$root.urlPath.M_APF + '/static/img/act/20181008/1-1-1.jpg';
				this.bot = '0.45rem';
			}
			$('.act_train01').css('height', winHeight + 'px'); 
		},
	}
</script>
<style scoped>
	.act_train01{
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		/*position: relative;*/
	}
	.act_train01 .btn{
		width:0.32rem;
		position: absolute;
		right: 0.3rem;
	}
</style>