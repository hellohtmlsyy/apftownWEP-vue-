<template>
	<div>
		<div class="act_2019041801">
			<img src="../../../../static/img/act/20190418/1-1.png" alt="" class="conImg" />
			<div class="" style="padding: 0 .29rem;margin-top: .2rem;">
				<a href="http://f.amap.com/pYfR_0605gGE" target="_blank">
					<img src="../../../../static/img/act/20190418/1-2.png" alt="" class="conImg" />
				</a>
			</div>
			<div class="book book1">
				<div class="bookBox">
					<span class="btn" @click="book('villa')">预订别墅</span>
					<span class="btn" @click="book('travel')">预订亲子游</span>
				</div>
			</div>

			<div class="book book2">
				<div class="bookBox">
					<span class="btn" @click="book('villa')">预订别墅</span>
					<span class="btn" @click="book('travel')">预订亲子游</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		wxShare,
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			}
		},
		methods: {
			book(type) {
				//是否登录
				this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
						params: {
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if (res.data.success) {
							//是否报名
							this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
									params: {
										activityNo: '20190418',
										APF_UID: getCookie('APF_UID'),
									}
								})
								.then(res => {
									if (res.data.data != false) {
										this.$layer.msg('您已预订，不能重复预订!');
										var self = this;
										window.setTimeout(function() {
											window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107?data=0&book=' + type;
										}, 2000)
									} else {
										window.location.href = this.$root.urlPath.M_APF + '/act/act2018103106?data=0&book=' + type;
									}
								})
								.catch(err => {
									console.log(err)
								})
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018103105??data=0&book=' + type;
						}
					})
					.catch(err => {
						console.log(err)
					});
			},
		},
		created() {
			//wx-share
			var title = '海棠花居，三亚最浪漫的民宿';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '美丽三亚，浪漫天涯，来海棠花居，住海棠湾最浪漫的花园民宿';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");

	.act_2019041801 {
		width: 100%;
		position: relative;
		padding-bottom: 1.09rem;
		background-color: #fff;
	}

	.act_2019041801 .conImg {
		width: 100%;
	}

	/* 预订按钮 */
	.act_2019041801 .book {
		position: absolute;
		left: 0;
		width: 100%;
	}

	.act_2019041801 .book1 {
		top: 4.02rem;
	}

	.act_2019041801 .book2 {
		bottom: .5rem;
	}

	.act_2019041801 .book .bookBox {
		display: flex;
		justify-content: space-around;
	}

	.act_2019041801 .book .btn {
		width: 1.3rem;
		height: .34rem;
		line-height: .33rem;
		box-shadow: 2px 3px 2px 0px rgba(17, 26, 40, 0.44);
		border-radius: .17rem;
		font-size: .16rem;
		letter-spacing: 1px;
		text-align: center;
	}

	.act_2019041801 .book1 .btn {
		background-image: linear-gradient(90deg,
			#ff519d 0%,
			#ff043f 100%),
			linear-gradient(#ffffff,
			#ffffff);
		box-shadow: 2px 3px 2px 0px rgba(17, 26, 40, 0.44);
		color: #fff;
	}

	.act_2019041801 .book2 .btn {
		background-color: #ffffff;
		box-shadow: 2px 3px 9px 0px rgba(17, 26, 40, 0.19);
		border: solid 1px #ff4d99;
		color: #ff043f;
	}
</style>
