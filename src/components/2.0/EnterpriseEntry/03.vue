<template>
	<div class="entEntry03 industry">
		<div class="top_bg"></div>
		<div class="content">
			<div class="adv fs-12">
				<div class="tac fs-16 col-333">
					<img src="../../../../static/img/2.0/enterpriseEntry/3-1.png" alt="提交成功" class="img-w29">
					<div class="lh-27">您已成功提交入驻申请<span class="fw-7">工作人员将在<span class="col-23ac38">2个工作日内</span>联系您</span></div>
				</div>
				<div class="tac entEntry03-download">
					<a href="../../../../static/file/亚太金融（基金）小镇入驻申请书.docx" target="_blank" class="txt mb-30">
						<img src="../../../../static/img/2.0/enterpriseEntry/3-2.png" alt="亚太金融小镇入驻申请书" class="img-w15">
						<span>下载《亚太金融小镇入驻申请书》</span>
					</a>
					<div>
						<a href="/EnterpriseEntry/01" class="btn-item btn-return">返回</a>
						<a href="/home" class="btn-item btn-index">首页</a>
					</div>
				</div>
				<div class="advText"></div>
				<div class="contact">
					<p>
						<img src="../../../../static/img/2.0/contactUs/icon-1.png" alt="网址" class="img-w14">
						<span class="fw-7 mr-10">官方网址</span>
						<a href="http://www.apftown.com" class="col-00a0e9">http://www.apftown.com</a>
					</p>
					<p>
						<img src="../../../../static/img/2.0/contactUs/icon-2.png" alt="电话" class="img-w14">
						<span class="fw-7 mr-10">联系电话</span>
						<a href="tel:4006702139" class="col-00a0e9">400-670-2139</a>
					</p>
					<p>
						<img src="../../../../static/img/2.0/contactUs/icon-3.png" alt="邮箱" class="img-w14">
						<span class="fw-7 mr-10">联系邮箱</span>
						<a href="mailto:info@apftown.com" class="col-00a0e9">info@apftown.com</a>
					</p>
					<p>
						<img src="../../../../static/img/2.0/contactUs/icon-4.png" alt="地址" class="img-w14">
						<span class="fw-7 mr-10">联系地址</span>
						<a href="javascript:;" class="col-70"> 海南省三亚市海棠区亚太金融小镇</a>
					</p>
				</div>
				<div class="tac col-70">
					<a href="http://f.amap.com/pYfR_0605gGE" target="_blank"><img src="../../../../static/img/2.0/contactUs/contact1-3.jpg"
						 alt="小镇地址" class="img-w317"></a>
					<span>点击查看小镇地址</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		getCookie,
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
			}
		},
		created() {
			//wx-share
			var title = '亚太金融小镇欢迎您，诚邀各基金入驻';
			var desc = '面朝大海春暖花开，快速基金注册，轻松三亚培训，惬意海棠生活 ';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			// 是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) { //已登录
						this.userinfo.mobile = res.data.data.mobile;
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
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.entEntry03 .img-w14 {
		width: .14rem;
		margin-right: .09rem;
	}

	.entEntry03 .img-w15 {
		width: .15rem;
		margin-right: .05rem;
		margin-top: -0.02rem;
	}

	.entEntry03 .img-w29 {
		width: .29rem;
		margin-bottom: .15rem;
	}

	.entEntry03 .img-w90 {
		width: .9rem;
	}

	.entEntry03 .img-w317 {
		width: 3.17rem;
		margin-bottom: .1rem;
	}

	.entEntry03 .top_bg {
		background-image: url('../../../../static/img/2.0/enterpriseEntry/3-1.jpg');
	}

	.entEntry03 .content {
		margin-top: -0.7rem !important;
	}

	.entEntry03 .content .adv {
		padding: .34rem .08rem .25rem;
	}

	/* 下载 */
	.entEntry03 .entEntry03-download .txt {
		display: inline-block;
		padding: .09rem .1rem;
		margin: .2rem 0 .4rem;
		background-color: #fff;
		border-radius: .2rem;
		border: solid 1px #00b7ee;
		font-size: .14rem;
		color: #00a1e9;
		font-weight: 700;
	}

	.entEntry03 .entEntry03-download .btn-item {
		display: inline-block;
		width: 1rem;
		height: .34rem;
		line-height: .34rem;
		border-radius: .17rem;
		color: #fff;
		font-size: .15rem;
		margin-bottom: .2rem;
	}

	.entEntry03 .entEntry03-download .btn-return {
		background-color: #00a1e9;
		margin-right: .54rem;
	}

	.entEntry03 .entEntry03-download .btn-index {
		background-color: #f39800;
	}

	.entEntry03 .contact {
		margin-left: .31rem;
		color: #707070;
		font-size: .13rem;
		line-height: .3rem;
		margin-bottom: .2rem;
	}
</style>
