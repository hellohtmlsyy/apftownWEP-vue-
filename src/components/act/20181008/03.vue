<template>
	<div>
		<div class="act_train03">
			<img src="../../../../static/img/act/20181008/3-1.jpg" alt="" class="conImg"/>
			<div class="signUp" @click="goSignUp()">
				<img src="../../../../static/img/act/20181008/3-btn.png" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
	import { wxShare,setCookie, getCookie } from '@/assets/commonjs/util.js';
	export default {
		data(){
			return {
				url: window.location.href,
			}
		},
		methods: {
			goSignUp(){
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
								activityNo: '20181008',
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if(res.data.data!=false) {
								this.$layer.msg('您已预订，不能重复预订!');
								var self = this;
								window.setTimeout(function(){
									window.location.href = self.$root.urlPath.M_APF + '/act/act2018100806';
								},2000)
							} else {
								window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100805';
							}
						})
						.catch(err => {
							console.log(err)
						})
					}else{
						window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100804';
					}
				})
				.catch(err => {
					console.log(err)
				});
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
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");
	.act_train03{
		background: #eee;
	}
	.act_train03 .conImg{
		width: 100%;
	}
	.signUp{
		position: fixed;
		right:0.2rem;
		top: 4.8rem;
	}
	.signUp img{
		width: 1.23rem;
	}
</style>