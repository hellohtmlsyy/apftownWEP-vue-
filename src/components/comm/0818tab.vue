<template>
	<div class="tab">
		<ul class="clearfix">
			<li @click="go_page('1')"><img :src="src" alt="" class="imgs"/>国际金融周</li>
			<li @click="go_page('2')"><img :src="src" alt="" class="imgs"/>论坛日程</li>
			<li @click="go_page('3')"><img :src="src" alt="" class="imgs"/>活动概览</li>
			<li @click="go_page('4')"><img :src="src" alt="" class="imgs"/>小镇设施</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'tab-0818',
		data() {
			return {
				src: this.$root.urlPath.M_APF + '/static/img/act/20180818/tab.png',
				src_atcive: this.$root.urlPath.M_APF + '/static/img/act/20180818/tab-active.png',
				invitationCode: this.$route.query.invitationCode,
			}
		},
		methods: {
			go_page(page){
				if( this.invitationCode && this.invitationCode != '' && this.invitationCode != 'undefined' && this.invitationCode != 'null' ){
					window.location.href = this.$root.urlPath.M_APF + '/act/act201808180' + page + '?invitationCode=' + this.invitationCode;
				}else{
					window.location.href = this.$root.urlPath.M_APF + '/act/act201808180' + page;
				}
			}
		},
		mounted(){
			var str = this.$route.path;
			var num = str.slice(str.length-1,str.length);
			if( num == 1 ){
				$('.imgs:eq(0)').attr('src',this.src_atcive)
			}else if( num == 2 ){
				$('.imgs:eq(1)').attr('src',this.src_atcive)
			}else if( num == 3 ){
				$('.imgs:eq(2)').attr('src',this.src_atcive)
			}else if( num == 4 ){
				$('.imgs:eq(3)').attr('src',this.src_atcive)
			}else{
				
			}
		}
	}
</script>

<style>
	
	/*清除浮动*/
	.clearfix {
	    clear: both;
	    *zoom: 1;
	}
	.clearfix:after {
	    display: block;
	    clear: both;
	    content: "\0020";
	    visibility: hidden;
	    height: 0;
	}

	.tab {
		width: 100%;
		height: 0.5rem;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.tab ul {
		padding: 0.15rem;
	    padding-right: 0;
	}
	.tab ul li{
		width: 25%;
		float: left;
		color: #333;
		font-size: 0.11rem;
		list-style: none;
	}
	.tab ul li a{
		color: #333;
	}
	.tab ul li img{
		width: 0.2rem;
		margin-right: 0.05rem;
		vertical-align: middle;
	}
</style>