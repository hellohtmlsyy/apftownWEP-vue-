<template>
	<div>
		<div class="mob_home">
			<div class="wrapper">
				<div class="imgs">
					<div class="banner">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<a href="/industry/03"><img src="../../../../static/img/2.0/home/banner.jpg" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ul class="service dis-fl ">
					<li v-for="(item, index) in serviceDate" :key="index">
						<a :href="item.href">
							<img :src="item.src" alt="" class="img-w44">
							<span class="col-333">{{item.text}}</span>
						</a>
					</li>
				</ul>

				<!-- <section class="news mar aic">
					<div class="title-box tac">
						<span class="bg-img"></span>
						<h1 class="title fs-10">特区新闻</h1>
					</div>
					<div class="list">
						<ul>
							<li class="fs-12">
								三亚亚太金融小镇入驻基金企业84家，促进海南实体经济发展
							</li>
						</ul>
					</div>
					<div>
						<span class="ico"></span>
					</div>
				</section>

				<section class="swiperMy mar">
					<mt-swipe :auto="40000">
						<mt-swipe-item>
							<a href="javascript:;">
								<div class="block df">
									<div>
										<h1 class="fs-18">全新上线<strong>税务流程服务</strong></h1>
										<p class="col-aaa fs-12">详细解读小镇税务服务流程</p>
									</div>
									<div>
										<img src="../../../../static/img/2.0/home/icon6.png" />
									</div>
								</div>
							</a>
						</mt-swipe-item>
						<mt-swipe-item>
							<a href="javascript:;"><img src="../../../../static/img/2.0/home/icon6.png" /></a>
						</mt-swipe-item>
					</mt-swipe>
				</section> -->
				<!-- 产品服务 -->
				<section class=" mar service1">
					<div class="title fs-13 df aic">
						<span class="line line-bgcolor"></span>
						产业服务
					</div>
					<div class="df">
						<div class="block1" @click="toDetail('/industry/01')">
							<h1 class="fs-18">小镇优势</h1>
							<h2 class="fwN col-aaa fs-12">一键了解小镇优势</h2>
							<img src="../../../../static/img/2.0/home/industry1.jpg" alt="">
						</div>
						<div class="right">
							<div class="block2 df jcSb" @click="toDetail('/industry/02')">
								<div>
									<h1 class="fs-15">金融支持</h1>
									<h2 class="fwN col-aaa fs-12">全方位PB服务</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/industry2.jpg" alt="">
								</div>
							</div>
							<div class="block3 df jcSb" @click="toDetail('/industry/03')">
								<div>
									<h1 class="fs-135">注册流程</h1>
									<h2 class="fwN col-aaa fs-11">流程详解一目了然</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/industry3.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- 学习服务 -->
				<section class="study mar service1">
					<div class="title fs-13 df aic">
						<span class="line line-bgcolor"></span>
						学习服务
					</div>
					<div class="df">
						<div class="block1" @click="toDetail('/study/01')">
							<h1 class="fs-18">场地预定</h1>
							<h2 class="fwN col-aaa fs-12">全流程接待省心省力</h2>
							<img src="../../../../static/img/2.0/home/learning1.jpg" alt="">
						</div>
						<div class="right">
							<div class="block2 df jcSb" @click="toDetail('/study/02')">
								<div>
									<h1 class="fs-15">金融培训</h1>
									<h2 class="fwN col-aaa fs-12">教师住宿全配套</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/learning2.jpg" alt="">
								</div>
							</div>
							<div class="block3 df jcSb" @click="toDetail('/study/03')">
								<div>
									<h1 class="fs-135">金融会议</h1>
									<h2 class="fwN col-aaa fs-11">精彩活动等你来</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/learning3.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- 研究服务 -->
				<section class="research mar service1">
					<div class="title fs-13 df aic">
						<span class="line line-bgcolor"></span>
						研究服务
					</div>
					<div class="df">
						<div class="block1" @click="toDetail('/research/01')">
							<h1 class="fs-18">研究成果</h1>
							<h2 class="fwN col-aaa fs-12">发布权威亚太金融蓝皮书</h2>
							<img src="../../../../static/img/2.0/home/research1.jpg" alt="">
						</div>
						<div class="right">
							<div class="block2 df jcSb" @click="toDetail('/research/02')">
								<div>
									<h1 class="fs-15">合作机构</h1>
									<h2 class="fwN col-aaa fs-12">免费设施与住宿</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/research2.jpg" alt="">
								</div>
							</div>
							<div class="block3 df jcSb" @click="toDetail('/research/03')">
								<div>
									<h1 class="fs-135">金融专家</h1>
									<h2 class="fwN col-aaa fs-11">汇聚行业专家库</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/research3.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- 园区到访 -->
				<section class="park mar service1">
					<div class="title fs-13 df aic">
						<span class="line line-bgcolor"></span>
						园区到访
					</div>
					<div class="df">
						<div class="block1" @click="toDetail('/park/01')">
							<h1 class="fs-18">小镇住宿</h1>
							<h2 class="fwN col-aaa fs-12">开启你的三亚金融之旅</h2>
							<img src="../../../../static/img/2.0/home/park1.jpg" alt="">
						</div>
						<div class="right">
							<div class="block2 df jcSb" @click="toDetail('/park/02')">
								<div>
									<h1 class="fs-15">办公物业</h1>
									<h2 class="fwN col-aaa fs-12">贴心服务管家</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/park2.jpg" alt="">
								</div>
							</div>
							<div class="block3 df jcSb" @click="toDetail('/park/03')">
								<div>
									<h1 class="fs-135">参观小镇</h1>
									<h2 class="fwN col-aaa fs-11">小镇地址指引</h2>
								</div>
								<div>
									<img src="../../../../static/img/2.0/home/park3.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="share_layer" v-show="share_layer">
				<div class="share_layer_box">
					<div class="fles-1 mr-5">
						<div class="fs-11"><span class="fs-20 fw-7 mr-17">{{layerinfo.spreader}}</span>邀请你来亚太金融小镇</div>
						<a class="call" :href="('tel:' + layerinfo.spreaderContact)">
							<img src="../../../../static/img/2.0/home/call.png" alt="" class="img-w16">
							<span>{{layerinfo.spreaderContact}}</span>
						</a>
					</div>
					<div class="tac">
						<div id="qrcode" ref="qrcode"></div>
						<span class="small-font">推荐给好友</span>
					</div>
					<div class="close" @click="layer()"></div>
				</div>
			</div>
			<c-footer :selected="selected"></c-footer>
		</div>
	</div>
</template>
<script>
	import Swiper from '../../../../static/swiper/swiper-3.4.2.min.js';
	import QRcode from 'qrcodejs2';
	import {
		wxShare,
		setCookie,
		getCookie,
		isDevice
	} from '@/assets/commonjs/util.js';
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui';
	export default {
		components: {
			Swipe,
			SwipeItem
		},
		data() {
			return {
				url: window.location.href,
				actUrl: 'https://mp.weixin.qq.com/s/hONsO6xMSH5gt9TutWv8wQ',
				serviceDate: [{
						src: '../../../../static/img/2.0/home/icon1.png',
						text: '企业入驻',
						href: '/EnterpriseEntry/01'
					},
					{
						src: '../../../../static/img/2.0/home/icon2.png',
						text: '税务服务',
						href: '/taxation/index'
					},
					{
						src: '../../../../static/img/2.0/home/icon3.png',
						text: '培训场地',
						href: '/act/act2018100801'
					},
					{
						src: '../../../../static/img/2.0/home/icon4.png',
						text: '金融民宿',
						href: '/act/act2018103101'
					}
				],
				selected: 'Home',
				share_layer: false,
				spreadCode: this.$route.query.spreadCode,
				layerinfo: [],
				title: '亚太金融小镇欢迎您，诚邀各基金入驻',
				desc: '面朝大海春暖花开，快速基金注册，轻松三亚培训，惬意海棠生活 ',
			}
		},
		methods: {
			toDetail(path) {
				location.href = this.$root.urlPath.M_APF + path;
			},
			layer() {
				this.share_layer = !this.share_layer;
			},
			qrcode() { //生成二维码
				let text = this.$root.urlPath.M_APF + '/home?spreadCode=' + this.spreadCode;
				let qrcode = new QRcode('qrcode', {
					width: 70,
					height: 70,
					text: text, //二维码扫描跳转地址
				})
			},
		},
		created() {
			this.$nextTick(function() {
				this.qrcode(); //生成二维码
			})
			//wx-share
			var title = '亚太金融小镇欢迎您，诚邀各基金入驻';
			var desc = '面朝大海春暖花开，快速基金注册，轻松三亚培训，惬意海棠生活 ';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			let operatingSystem = '';
			let u = navigator.userAgent;
			let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			isAndroid ? operatingSystem = 'android' : operatingSystem = 'ios'
			if (getCookie('APF_SPR_CODE')) {
				this.$axios.get(this.$root.urlPath.NEW + '/wap/spread/spreaderInfo', {
						params: {
							apfSprCode: getCookie('APF_SPR_CODE')
						}
					})
					.then(res => {
						if (res.data.success) {
							this.share_layer = true;
							this.layerinfo = res.data.data;
							this.spreadCode = res.data.data.spreadCode;
							// this.title = res.data.data.spreader + '邀请你来亚太金融小镇，欢迎各基金入驻三亚';
						} else {}
					})
					.catch(err => {
						console.log(err)
					});
			} else {
				if (this.spreadCode == '' || this.spreadCode == 'null' || this.spreadCode == 'undefined') return;
				let params = {
					spreadCode: this.spreadCode,
					operatingSystem: operatingSystem,
				}
				getCookie('APF_UID') ? (params['APF_UID'] = getCookie('APF_UID')) : '',
					console.log(params)
				this.$axios.get(this.$root.urlPath.NEW + '/wap/spread/spreadBySales', {
						params: params
					})
					.then(res => {
						if (res.data.success) {
							this.share_layer = true;
							setCookie('APF_SPR_CODE', res.data.data.apfSprCode, 30);
							this.layerinfo = res.data.data;
							this.spreadCode = res.data.data.spreadCode;
						} else {}
					})
					.catch(err => {
						console.log(err)
					});
			}

		},
	}
</script>
<style>
	@import url("../../../../static/swiper/swiper-3.4.2.min.css");
	@import url("../../../assets/css/town2.0.css");

	.mob_home .img-w16 {
		width: .16rem;
		height: .16rem;
		margin-right: .03rem;
		margin-top: -.03rem;
	}

	.mob_home .img-w44 {
		width: .44rem;
		margin-bottom: .08rem;
	}

	.mob_home {
		background-color: #eee;
		padding-bottom: .5rem;
	}

	.mob_home .swiper-pagination-bullet {
		background: #aaa;
		opacity: 1;
		-webkit-box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);
		box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);
	}

	.mob_home .swiper-pagination-bullet-active {
		background: #fff;
	}

	/* imgs */
	.mob_home .imgs img,
	.mob_home .service {
		width: 100%;
	}

	.mob_home .service {
		padding: .11rem;
		font-size: .12rem;
		color: #333;
		text-align: center;
		background-color: #fff;
	}

	.mob_home .bg-img {
		background: url("../../../../static/img/2.0/home/icon5.png");
		background-size: 100%;
		width: .3rem;
		height: .28rem;
	}

	.mob_home .news {
		display: flex;
		padding: .09rem .245rem;
	}

	.mob_home .news .title-box {
		margin-right: .125rem;
		flex: 0 0 .4rem;
	}

	.mob_home .news .title {
		font-weight: normal;
		color: #448aca;
	}

	.mob_home .news ul {
		margin: 0 .125rem;
	}

	.mob_home .news ul li {
		list-style: disc;
	}

	.mob_home .news .icon {
		color: #aaaaaa;
	}

	.mob_home .news .ico {
		background: url("../../../../static/img/2.0/user/right.png");
		background-size: 100%;
		width: .06rem;
		height: .1rem;
	}

	/* swiper */
	.mob_home .swiperMy {
		width: 3.75rem;
		height: .9rem;
	}

	.mob_home .swiperMy h1 {
		color: #000;
		margin-bottom: .08rem;
	}

	.mob_home .swiperMy strong {
		color: #00a0e9;
	}

	.mob_home .swiperMy .block {
		justify-content: space-between;
		padding: .1rem .25rem;
	}

	.mob_home .swiperMy img {
		width: 1.1rem;
		height: .7rem;
	}

	.mob_home .swiperMy .mint-swipe-indicators .mint-swipe-indicator {
		width: 15px;
		height: 10px;
		background: #bfbfbf;
		opacity: 1;
	}

	.mob_home .swiperMy .mint-swipe-indicators .is-active {
		background: #f39800;
	}

	/* 产业 */
	.mob_home .line {
		width: .03rem;
		height: .09rem;
		margin-right: .06rem;
	}

	.mob_home .line-bgcolor {
		background-color: #00a0e9;
	}

	.mob_home .service1 .title {
		padding: .1rem .12rem;
		border-bottom: 1px solid #f3f3f3;
	}

	.mob_home .service1 .block1 {
		padding: .115rem 0 .115rem .245rem;
		flex: 1;
	}

	.mob_home .service1 .block1 h2 {
		margin: .05rem 0 .13rem;
	}

	.mob_home .service1 .block1 img {
		width: 1.31rem;
		height: .435rem;
	}

	.mob_home .service1 .right {
		padding-right: .13rem;
		flex: 1;
		border-left: 1px solid #f3f3f3;
	}

	.mob_home .service1 .block2 {
		border-bottom: 1px solid #f3f3f3;

	}

	.mob_home .service1 .block2,
	.block3 {
		padding: .115rem;
	}

	.mob_home .service1 .block2 img {
		width: .4rem;
		height: .4rem;
	}

	.mob_home .service1 .block2 h1 {
		line-height: .25rem;

	}

	.mob_home .service1 .block3 img {
		width: .32rem;
		height: .4rem;
	}

	.mob_home .service1 .block3 h1 {
		line-height: .25rem;

	}

	/* 学习服务 */
	.mob_home .study .line-bgcolor {
		background-color: #22ac38;
	}

	.mob_home .study .block1 img {
		width: 1.5rem;
		height: .5rem;
	}

	.mob_home .study .block3 img {
		width: .4rem;
		height: .3rem;
	}

	/* 研究 */
	.mob_home .research .block1 img {
		width: 1.5rem;
		height: .5rem;
	}

	.mob_home .research .block2 img {
		width: .4rem;
		height: .31rem;
	}

	.mob_home .research .block3 img {
		width: .4rem;
		height: .31rem;
	}

	/* 园区到访 */
	.mob_home .park .line-bgcolor {
		background-color: #f39800;
	}


	/* 分享信息 */
	.mob_home .share_layer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: .69rem;
	}

	.mob_home .share_layer .share_layer_box {
		background-image: url('../../../../static/img/2.0/home/share-bg.png');
		background-size: 100% 100%;
		height: 1.275rem;
		width: 3.565rem;
		margin: auto;
		color: #1ca5f5;
		padding: .17rem .44rem 0 .27rem;
		align-items: center;
		text-align: left;
		display: flex;
		position: relative;
	}

	.mob_home .share_layer .call {
		width: 55%;
		background-color: #1ca5f5;
		margin-top: .12rem;
		border-radius: .12rem;
		padding: .04rem .05rem;
		color: #fff;
		font-size: .12rem;
		display: block;
	}

	.mob_home .share_layer .close {
		width: .23rem;
		height: .23rem;
		position: absolute;
		top: .1rem;
		right: .03rem;
	}

	.mob_home .share_layer .small-font {
		margin-left: .06rem;
		margin-top: .03rem;
	}
</style>
