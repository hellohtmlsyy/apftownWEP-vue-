<template>
	<div class="park01 industry">
		<div class="top_bg">开启你的三亚金融之旅<br /><span class="fs-14 fw-7">吃住行全栈服务随心游</span></div>
		<div class="content">
			<div class="adv">
				<div class="tit">住宿预订</div>
				<div class="stay">
					<div class="stay-img">
						<img src="../../../../static/img/2.0/park/park1-2.jpg" alt="酒店" class="img-w100">
						<span>酒店</span>
					</div>
					<div class="stay-img">
						<img src="../../../../static/img/2.0/park/park1-3.jpg" alt="民宿" class="img-w100">
						<span>民宿</span>
					</div>
					<div class="stay-img">
						<img src="../../../../static/img/2.0/park/park1-4.jpg" alt="别墅" class="img-w100">
						<span>别墅</span>
					</div>
				</div>
				<div class="advText"></div>
				<div class="col-70 lh-20 m-13">
					<span class="fw-7">住房类型</span>　64间精品酒店、64间金融民宿、7栋金融别墅<br />
					<span class="fw-7">配套设施</span>　金融图书馆、私人影院等<br />
					注册成为小镇居民，即有一个专属ID<br />
					通过微信扫码或自主绑定门禁卡，可自由出入相应区域
				</div>
			</div>

			<div>
				<div class="picture" v-for="(item, index) in picData" :key="index">
					<div class="pic-top">
						<img :src="item.imgsrc1" :alt="item.alt" class="img-w243" v-preview="item.imgsrc1" preview-title-enable="true"
						 preview-nav-enable="true">
						<div class="pic-inv" :class="item.textclass">{{item.text1}}<br />{{item.text2}}</div>
						<div class="pic-text"><span class="fw-7">{{item.text3}}</span><br />{{item.text4}}</div>
					</div>
					<div class="dis-fl">
						<div>
							<img :src="item.imgsrc2" :alt="item.alt" class="img-w143-5" v-preview="item.imgsrc2" preview-title-enable="true"
							 preview-nav-enable="true">
						</div>
						<div>
							<img :src="item.imgsrc3" :alt="item.alt" class="img-w173-5 mb-10" v-preview="item.imgsrc3" preview-title-enable="true"
							 preview-nav-enable="true">
							<img :src="item.imgsrc4" :alt="item.alt" class="img-w173-5" v-preview="item.imgsrc4" preview-title-enable="true"
							 preview-nav-enable="true">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="contactus-btn">
			<a href="/contactUs">
				<img src="../../../../static/img/2.0/contactus.png" alt="联系我们" class="img-w66">
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				picData: [{
						imgsrc1: '../../../../static/img/2.0/park/park1-5.jpg',
						imgsrc2: '../../../../static/img/2.0/park/park1-6.jpg',
						imgsrc3: '../../../../static/img/2.0/park/park1-7.jpg',
						imgsrc4: '../../../../static/img/2.0/park/park1-8.jpg',
						alt: '住宿餐饮',
						text1: '客房',
						text2: '餐厅',
						text3: '住宿',
						text4: '餐饮',
						textclass: 'pic-inv-bg1',
					},
					{
						imgsrc1: '../../../../static/img/2.0/park/park1-9.jpg',
						imgsrc2: '../../../../static/img/2.0/park/park1-10.jpg',
						imgsrc3: '../../../../static/img/2.0/park/park1-11.jpg',
						imgsrc4: '../../../../static/img/2.0/park/park1-12.jpg',
						alt: '园区配套',
						text1: '图书馆',
						text2: '电影院',
						text3: '园区',
						text4: '配套',
						textclass: 'pic-inv-bg2',
					},
					{
						imgsrc1: '../../../../static/img/2.0/park/park1-13.jpg',
						imgsrc2: '../../../../static/img/2.0/park/park1-14.jpg',
						imgsrc3: '../../../../static/img/2.0/park/park1-15.jpg',
						imgsrc4: '../../../../static/img/2.0/park/park1-16.jpg',
						alt: '社交圈子',
						text1: '三亚BBQ',
						text2: '北京沙龙',
						text3: '社交',
						text4: '圈子',
						textclass: 'pic-inv-bg3',
					}
				],
			}
		}
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.park01 .img-w100 {
		width: 1rem;
	}

	.park01 .img-w143-5 {
		width: 1.435rem;
		margin-right: 0.12rem;
	}

	.park01 .img-w173-5 {
		width: 1.735rem;
	}

	.park01 .img-w243 {
		width: 2.43rem;
		margin-bottom: 0.12rem;
	}

	.park01 .pic-inv-bg1 {
		background-color: #eb6100;
	}

	.park01 .pic-inv-bg2 {
		background-color: #009e96;
	}

	.park01 .pic-inv-bg3 {
		background-color: #5f52a0;
	}

	.park01 .top_bg {
		background-image: url('../../../../static/img/2.0/park/park1-1.jpg');
	}

	.park01 .content {
		padding: 0 0 .5rem !important;
	}

	.park01 .content .adv {
		margin: -0.15rem 0.08rem 0.15rem;
	}

	/* 住宿预订 */
	.park01 .adv .stay {
		margin: 0 0 0.2rem 0.05rem;
	}

	.park01 .adv .stay-img {
		margin-right: 0.13rem;
		position: relative;
		display: inline-block;
	}

	.park01 .adv .stay-img:last-child {
		margin: 0;
	}

	.park01 .adv .stay-img span {
		position: absolute;
		bottom: 0.05rem;
		color: #fff;
		font-size: 0.13rem;
		left: 50%;
		margin-left: -0.13rem;
	}

	/* 展示图片 */
	.park01 .picture {
		background: #fff;
		padding: 0.15rem 0.23rem;
		margin-bottom: 0.12rem;
	}

	.park01 .picture:last-child {
		margin: 0;
	}

	.park01 .picture .pic-top {
		position: relative;
	}

	.park01 .picture .pic-inv {
		width: 0.7rem;
		font-size: 0.12rem;
		color: #fff;
		line-height: 0.16rem;
		text-align: center;
		padding: 0.03rem 0;
		position: absolute;
		top: -0.15rem;
		right: 0;
	}

	.park01 .picture .pic-text {
		position: absolute;
		bottom: 0.12rem;
		right: 0;
		font-size: 0.3rem;
		color: #1b1b1b;
		line-height: 0.32rem;
	}
</style>
