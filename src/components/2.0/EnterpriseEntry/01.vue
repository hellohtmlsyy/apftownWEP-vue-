<template>
	<div class="entEntry01 industry">
		<div class="top_bgimg"></div>
		<div class="con tac">
			<div class="adv adv1">
				<div class="view_tit">小镇视频简介</div>
				<div style="width: 100%;">
					<iframe style="border-radius: 5px;" frameborder="0" width="100%" src="https://v.qq.com/iframe/player.html?vid=n0545zct46r&tiny=0&auto=0"
					 allowfullscreen></iframe>
				</div>
			</div>

			<div class="adv adv2">
				<div class="view_tit">小镇概览</div>
				<div class="fs-15 col-31"><span class="fw-7 fs-18">致力于打造海上丝绸之路金融总部基地</span><br />亚太金融（基金）小镇</div>
				<div><img src="../../../../static/img/2.0/enterpriseEntry/1-2.jpg" alt="亚太金融(基金）小镇" class="img-w295"></div>
				<div class="fs-15 lh-27">
					作为海南第一个金融小镇<br />
					<span class="col-eb6100 fw-7">享受三亚市优惠税收政策<br /> 地处卓越自然环境海棠湾</span><br />
					<span class="fs-12">拥有——天时地利人和三大要素</span>
				</div>

				<div class="view_box">
					<span class="view_box_tit">天时 - <span class="fw-7">绿色通道</span></span>
					<div class="lh-27">
						2017年4月，海南省三亚市设立亚太金融小镇<br />
						<span class="fw-7 fs-15 col-3ab512">金融类公司注册绿色通道</span><br />
						并以 <span class="fw-7 col-333">当天核名，次日颁发执照</span> 的效率<br />
						为入驻企业提供全方位服务
					</div>
					<div><img src="../../../../static/img/2.0/enterpriseEntry/1-3.jpg" alt="天时 - 绿色通道" class="img-w300"></div>
				</div>
				<div class="view_box">
					<span class="view_box_tit">地利 - <span class="fw-7">卓越环境</span></span>
					<div class="lh-27">
						拥有国际高端酒店群、301医院养生圈<br />
						人大附中教育带、CDF离岛免税店等配套设施<br />
						<span class="fw-7 col-333">从居住、医疗、教育等方面<br />形成卓越的品质生活服务体</span>
					</div>
					<div><img src="../../../../static/img/2.0/enterpriseEntry/1-4.jpg" alt="地利 - 卓越环境" class="img-w300"></div>
				</div>
				<div class="view_box">
					<span class="view_box_tit">人和 - <span class="fw-7">优惠政策</span></span>
					<div class="lh-27">
						<span class="col-333 fw-7">三亚市政府出台文件<br />为入驻小镇企业提供十年税收优惠<br />并且提供5年办公室免租优惠</span><br />
						企业也可以选择异地办公
					</div>
					<div><img src="../../../../static/img/2.0/enterpriseEntry/1-5.jpg" alt="人和 - 优惠政策" class="img-w300"></div>
				</div>
			</div>
		</div>
		<div class="navs">
			<a href="/home">首页</a>
			<a href="javascript:;" @click="enter()">立即入驻</a>
			<a href="/contactUs" class="border-0">联系我们</a>
		</div>
	</div>
</template>
<script>
	import {
		setCookie,
		getCookie,
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			}
		},
		methods: {
			enter() {
				// 是否登录
				this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
						params: {
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if (res.data.success) { //已登录
							//是否提交
							this.$axios.get(this.$root.urlPath.NEW + '/wap/company/settledIn/submitAlready', {
									params: {
										APF_UID: getCookie('APF_UID'),
									}
								})
								.then(res => {
									if (res.data.data != false) { //已提交
										this.$layer.msg('您已提交，不能重复提交!');
										var self = this;
										window.setTimeout(function() {
											window.location.href = self.$root.urlPath.M_APF + '/EnterpriseEntry/03';
										}, 2000)
									} else { //未提交
										window.location.href = this.$root.urlPath.M_APF + '/EnterpriseEntry/02';
									}
								})
								.catch(err => {
									console.log(err)
								})
						} else { //未登录
							window.location.href = this.$root.urlPath.M_APF + '/login?returnUrl=/EnterpriseEntry/02';
						}
					})
					.catch(err => {
						console.log(err)
					});
			}
		},
		created() {
			//wx-share
			var title = '亚太金融小镇欢迎您，诚邀各基金入驻';
			var desc = '面朝大海春暖花开，快速基金注册，轻松三亚培训，惬意海棠生活 ';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.entEntry01 .img-w295 {
		width: 2.95rem;
		border-radius: 3px;
		border: solid 2px #ff9a00;
		margin: 0.17rem 0 0.2rem;
	}

	.entEntry01 .img-w300 {
		width: 3rem;
		margin-top: 0.18rem;
	}

	.entEntry01 .top_bgimg {
		background-image: url('../../../../static/img/2.0/enterpriseEntry/1-1.jpg');
		background-size: 100% 100%;
		height: 2rem;
	}

	.entEntry01 .con {
		width: 100%;
		margin-top: -0.55rem;
		padding: 0 0.08rem 0.5rem;
	}

	.entEntry01 .con .adv1 {
		position: relative;
		padding: 0.27rem 0.14rem 0.16rem;
		margin: 0;
		margin-bottom: 0.34rem;
	}

	.entEntry01 .con .adv2 {
		position: relative;
		padding: 0.3rem 0.11rem 0.18rem;
	}

	.entEntry01 .adv .view_tit {
		position: absolute;
		top: -0.15rem;
		left: 50%;
		margin-left: -0.7rem;
		width: 1.4rem;
		height: 0.3rem;
		color: #fff;
		font-size: 0.15rem;
		background-image: linear-gradient(0deg,
			#0068b7 0%,
			#00b7ee 100%),
			linear-gradient(#ffffff,
			#ffffff);
		border-radius: 0.15rem;
		line-height: 0.3rem;
	}

	.entEntry01 .adv2 .view_tit {
		background-image: linear-gradient(0deg,
			#eb6100 0%,
			#f7b551 100%),
			linear-gradient(#ffffff,
			#ffffff);
	}

	.entEntry01 .adv .view_box {
		margin-top: 0.35rem;
		background-image: linear-gradient(#ffffff,
			#ffffff),
			linear-gradient(#00479d,
			#00479d);
		border-radius: 3px;
		border: solid 2px #00a0e9;
		position: relative;
		padding: 0.38rem 0 0.14rem;
		color: #434343;
		font-size: 0.13rem;
	}

	.entEntry01 .adv .view_box_tit {
		position: absolute;
		width: 1.54rem;
		height: 0.41rem;
		top: -0.205rem;
		left: 50%;
		margin-left: -0.77rem;
		background-image: linear-gradient(173deg,
			#00a0e9 0%,
			#003bb2 100%),
			linear-gradient(#00479d,
			#00479d);
		border-radius: 0.05rem;
		color: #fff;
		font-size: 0.18rem;
		line-height: 0.41rem;
	}

	.entEntry01 .navs {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .5rem;
		background-color: #fff;
		box-shadow: 1px 1px 4px 1px #aaa;
		display: flex;
		text-align: center;
		line-height: .3rem;
		padding: 0.1rem;
	}

	.entEntry01 .navs a {
		font-size: .16rem;
		color: #333;
		border-right: 1px solid #bfbfbf;
		flex: 1;
	}
</style>
