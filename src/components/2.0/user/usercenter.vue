<template>
	<div class="usercenter m">
		<div class="head mb-8">
			<div class="dis-fl">
				<img :src="userInfo.headImgUrl || headImg" alt="" class="img-w65">
				<div class="head-r">
					<p>{{userName | subStr(15)}}</p>
					<span>金粉</span>
				</div>
			</div>
		</div>
		<!-- <div class="act">
			点击查看初五迎财神金融庙会活动
		</div> -->
		<div>
			<div class="iBox clearfix" v-for="(item, index) in itemDate" :key="index" @click="toDetail(item.detUrl)">
				<div class="left"><img :src="item.icon" alt="" class="img-w18"></div>
				<div class="clearfix">
					<span class="fl col-000">{{item.text}}</span>
					<div class="fr">
						<span class="col-eb6100">{{item.rtext}}</span>
						<img src="../../../../static/img/2.0/user/right.png" alt="" class="img-w8">
					</div>
				</div>
			</div>
		</div>

		<c-footer :selected="selected"></c-footer>
	</div>
</template>

<script>
	import {
		isDevice,
		wxShare,
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				selected: 'Usercenter',
				itemDate: [{
						icon: '../../../../static/img/2.0/user/icon1.png',
						rtext: '888金元宝',
						text: '小镇镇民',
						detUrl: '/user/bill',
					},
					{
						icon: '../../../../static/img/2.0/user/icon2.png',
						rtext: ' ',
						text: '企业入驻',
						detUrl: '/EnterpriseEntry/01',
					},
					{
						icon: '../../../../static/img/2.0/user/icon4.png',
						rtext: ' ',
						text: '民宿预订',
						detUrl: '/act/act2018103101',
					},
					{
						icon: '../../../../static/img/2.0/user/icon5.png',
						rtext: ' ',
						text: '培训预订',
						detUrl: '/act/act2018100801',
					},
					{
						icon: '../../../../static/img/2.0/user/icon6.png',
						rtext: ' ',
						text: '培训天地',
						detUrl: '/user/trainingWorld',
					},
				],
				userName: '',
				headImg: '../../../../static/img/2.0/user/head.jpg',
				userInfo: [],
			};
		},
		methods: {
			toDetail(url) {
				location.href = this.$root.urlPath.M_APF + url;
			},
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度  
			$('.m').css('height', winHeight + 'px');
		},
		created() {
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) {
						this.userInfo = res.data.data;
						this.userName = this.userInfo.userName;
					} else {
						// this.$layer.msg('未登录，请先登录');
						location.href = this.$root.urlPath.M_APF + '/login?returnUrl=/user/center';
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
	}
</script>

<style>
	@import url("../../../assets/css/town2.0.css");

	.usercenter .img-w8 {
		width: .08rem;
		height: .14rem;
		margin-left: .15rem;
	}

	.usercenter .img-w18 {
		width: .18rem;
		margin-top: -0.03rem;
	}

	.usercenter .img-w65 {
		width: .65rem;
		height: .65rem;
		margin-right: .17rem;
		border-radius: .05rem;
	}

	/* head */
	.usercenter .head {
		background-color: #fff;
		padding: .25rem .25rem .3rem;
	}

	.usercenter .head-r p {
		font-size: .24rem;
		color: #333;
		margin-bottom: .14rem;
	}

	.usercenter .head-r span {
		width: .4rem;
		height: .18rem;
		background-image: linear-gradient(0deg,
			#cd8815 0%,
			#ffbf55 100%),
			linear-gradient(#f39800,
			#f39800);
		border-radius: .09rem;
		border: solid 1px #facd89;
		color: #fff;
		font-size: .12rem;
		text-align: center;
	}

	/* act */
	/* .usercenter .act {
		background-color: #fffde6;
		color: #eb6100;
		font-size: 0.14rem;
		height: 0.4rem;
		line-height: 0.4rem;
		padding: 0 0.18rem 0 0.23rem;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	} */

	/* item */
	.usercenter .iBox {
		background-color: #fff;
		height: .6rem;
		line-height: .6rem;
		padding-left: .18rem;
		font-size: .15rem;
		position: relative;
	}

	.usercenter .iBox .left {
		position: absolute;
		left: .18rem;
		top: 0;
	}

	.usercenter .iBox:first-child {
		margin-bottom: .08rem;
	}

	.usercenter .iBox .clearfix {
		margin-left: .33rem;
		border-bottom: 1px solid #e3e3e3;
		padding-right: .18rem;
		height: .6rem;
	}

	.usercenter .iBox:first-child .clearfix,
	.usercenter .iBox:last-child .clearfix {
		border: none;
	}
</style>
