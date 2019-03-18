<template>
	<div class="research01 industry">
		<div class="top_bg">促进金融研究 实现学术价值<br /><span class="fs-14 fw-7">打造中国特色的国际化研究基地</span></div>
		<div class="content">
			<div class="adv">
				<div class="tit mb-8">研究成果</div>
				<a href="../../../../static/file/2017亚太金融蓝皮书.pdf" target="_blank" class="book" v-if="cookies">
					<div class="download-i"><img src="../../../../static/img/2.0/research/research1-2.png" alt="2017亚太金融蓝皮书" class="img-w17"></div>
					<div class="col-fff">
						<span class="fs-20 fw-7">2017亚太金融蓝皮书</span><br />
						<small>Asia-Pacific Financial Blue Book, 2017</small>
					</div>
				</a>
				<a href="javascript:;" @click="download()" class="book" v-else>
					<div class="download-i"><img src="../../../../static/img/2.0/research/research1-2.png" alt="2017亚太金融蓝皮书" class="img-w17"></div>
					<div class="col-fff">
						<span class="fs-20 fw-7">2017亚太金融蓝皮书</span><br />
						<small>Asia-Pacific Financial Blue Book, 2017</small>
					</div>
				</a>
				<div class="advText tac">小镇与清华大学经济管理学院中国金融研究中心合作<br /><span class="col-0068b7">共同发布权威亚太金融蓝皮书</span></div>
			</div>

			<div class="adv mb-15">
				<div class="tit mb-15">政策汇编<br /><span class="fs-12">海南自由贸易港相关政策汇编</span></div>
				<div class="tac" v-if="cookies">
					<a href="../../../../static/file/国家支持战略.pdf" target="_blank">
						<span class="txt txt1 mb-30">国家支持战略<img src="../../../../static/img/2.0/research/research1-2.png" alt="国家支持战略"
							 class="img-h15"></span>
					</a>
					<a href="../../../../static/file/海南深化改革.pdf" target="_blank">
						<span class="txt txt2 mb-30">海南深化改革<img src="../../../../static/img/2.0/research/research1-2.png" alt="海南深化改革"
							 class="img-h15"></span>
					</a>
					<a href="../../../../static/file/三亚金融优惠.pdf" target="_blank">
						<span class="txt col-eb6100">三亚金融优惠<img src="../../../../static/img/2.0/research/research1-2.png" alt="三亚金融优惠"
							 class="img-h15"></span>
					</a>
				</div>
				<div class="tac" v-else>
					<a href="javascript:;" @click="download()">
						<span class="txt txt1 mb-30">国家支持战略<img src="../../../../static/img/2.0/research/research1-2.png" alt="国家支持战略"
							 class="img-h15"></span>
					</a>
					<a href="javascript:;" @click="download()">
						<span class="txt txt2 mb-30">海南深化改革<img src="../../../../static/img/2.0/research/research1-2.png" alt="海南深化改革"
							 class="img-h15"></span>
					</a>
					<a href="javascript:;" @click="download()">
						<span class="txt col-eb6100">三亚金融优惠<img src="../../../../static/img/2.0/research/research1-2.png" alt="三亚金融优惠"
							 class="img-h15"></span>
					</a>
				</div>
			</div>

			<div class="adv">
				<div class="tac"><img src="../../../../static/img/2.0/research/research1-3.png" alt="" class="img-w147-5"></div>
				<div class="fs-12 col-70 lh-20 m-13">
					<span class="fw-7">大数据建设</span><br />
					与中国经济信息社下属国家信息中心合作，建立数据终端<br /><br />
					<span class="fw-7">研究实验室</span><br />
					小镇建设完成亚太金融实验室<br />
					拥有一流的服务器和金融软件，可开展各种金融建模和运算<br /><br />
					机构专家可以快速发布研究成果<br />
					需求者可以选择所需文献资料
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
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				cookies: getCookie('APF_UID')
			}
		},
		methods: {
			download() {
				this.$layer.msg('未登录，请先登录！');
				var self = this;
				var t1 = window.setTimeout(function() {
					window.location.href = self.$root.urlPath.M_APF + '/login?returnUrl=/research/01';
				}, 800);
			}
		}
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.research01 .img-w17 {
		width: 0.17rem;
	}

	.research01 .img-h15 {
		height: 0.15rem;
		margin: 0 0 0.02rem 0.08rem;
	}

	.research01 .img-w147-5 {
		width: 1.475rem;
		margin: 0.2rem 0;
	}

	.research01 .top_bg {
		background-image: url('../../../../static/img/2.0/research/research1-1.jpg');
	}

	/* 研究成果 */
	.research01 .book {
		width: 3.17rem;
		height: 0.65rem;
		background-color: #0068b7;
		border-radius: 0.1rem;
		border: solid 1px #0088d5;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0.13rem 0.2rem;
	}

	.research01 .book .download-i {
		width: 0.42rem;
		border-radius: 50%;
		background-color: #fff;
		text-align: center;
		padding: 0.115rem 0;
		margin-right: 0.15rem;
	}

	.research01 .adv .advText {
		font-weight: 700;
		color: #333;
	}

	/* 政策汇编 */
	.research01 .adv .txt {
		width: 2.3rem;
		background-image: linear-gradient(#ffffff,
			#ffffff),
			linear-gradient(#ffffff,
			#ffffff);
		border-radius: 0.2rem;
		border: solid 1px #0068b7;
		font-size: 0.18rem;
		font-weight: 700;
		text-align: center;
		padding: 0.08rem 0;
	}

	.research01 .adv .txt1 {
		color: #a40000;
	}

	.research01 .adv .txt2 {
		color: #e5004f;
	}
</style>
