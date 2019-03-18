<template>
	<div>
		<div class="mob_home">
			<div class="header">
				<div class="logo">
					<a href="javascript:;"><img src="../../../static/img/home/logo_head.png" alt="" class="logo_firstimg"></a>
				</div>
			</div>
			<div class="wrapper">
				<div class="imgs">
					<div class="banner">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<a href="javascript:;"><img src="../../../static/img/home/banner.jpg" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fund">
					<div class="fund_con">
						<div class="fund_zh">金融业态</div>
						<div class="fund_en">THE FINANCIAL FORMAT</div>
						<div class="con_bot clearfix">
							<div class="con_botl fl fund_img">
								<img src="../../../static/img/home/fund1.jpg" alt="">
								<img src="../../../static/img/home/fund2.jpg" alt="">
							</div>
							<div class="con_botr fl">
								<div class="con_botrBox mb-15">
									<span>绿色注册通道</span>
									<p>为海南省金融基金类公司</p>
									<p>提供快速绿色注册通道</p>
								</div>
								<div class="con_botrBox mb-15">
									<span>一站式综合PB服务</span>
									<p>联合银行、证券等机构提供</p>
									<p>工商注册、银行开户、税务登记系列服务</p>
								</div>
								<div class="con_botrBox">
									<span>助力基金投融资</span>
									<p>小镇互联网平台促进入驻企业</p>
									<p>基金开展投融资活动</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="education">
					<div class="education_con">
						<div class="education_zh">教育业态</div>
						<div class="education_en">THE EDUCATION FORMAT</div>
						<div class="con_bot clearfix">
							<div class="con_botl fl education_img">
								<img src="../../../static/img/home/education1.jpg" alt="">
								<img src="../../../static/img/home/education2.jpg" alt="">
							</div>
							<div class="con_botr fl">
								<div class="con_botrBox mb-15">
									<span>十个装备齐全的金融教室</span>
								</div>
								<div class="con_botrBox mb-15">
									<span>百间国际化公寓培训住宿</span>
								</div>
								<div class="con_botrBox mb-15">
									<span>全球首个亚太金融EMBA</span>
									<p>小镇与美国著名商学院（德克萨斯大学惠灵顿UTA商学院）联合创办</p>
								</div>
								<div class="con_botrBox">
									<span>一流培训体系</span>
									<p>小镇与清华、北大等高校院所机构合作聚焦金融专业学科，打造一流培训体系 每年开展五千人次的培训</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="research">
					<div class="research_con">
						<div class="research_zh">科研业态</div>
						<div class="research_en">THE RESEARCH FORMAT</div>
						<div class="con_bot clearfix">
							<div class="con_botl fl research_img">
								<img src="../../../static/img/home/research1.jpg" alt="">
								<img src="../../../static/img/home/research2.jpg" alt="">
							</div>
							<div class="con_botr fl">
								<div class="con_botrBox mb-15">
									<span>发布《亚太金融蓝皮书》</span>
									<p>根据金融行业发展趋势，小镇与相关金融科研院所合作，针对基金行业开展研究，并与清华大学、北京大学两校年度共同发布《亚太金融蓝皮书》</p>
								</div>
								<div class="con_botrBox">
									<span>亚太金融C＆C千人嘉年华</span>
									<p>小镇每年12月举办亚太金融C&amp;C（资本与创新Capital &amp; &amp; Creative）千人嘉年华 两日思维激荡高端论坛 铁人十项全能赛及公司高尔夫对抗赛 亚太金融精英的年度派对</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="con_head">
					<p>联系我们 <span>&nbsp;CONTACT US</span></p>
				</div>
				<div class="contact">
					<div class="con_num">
						<span class="con_tit">联系电话</span>
						<ul class="clearfix">
							<li>
								<a href="javascript:;">24小时服务热线</a>
							</li>
							<li>
								<a href="javascript:;">24小时固定电话</a>
							</li>
							<li>
								<a href="tel:4006702139">400-670-2139 </a>
							</li>
							<li>
								<a href="tel:089831002721">0898-31002721</a>
							</li>
						</ul>
					</div>
					<div class="con_svsp">
						<span class="con_tit">服务平台</span>
						<ul class="clearfix">
							<li><img src="../../../static/img/home/service.jpg" alt=""></li>
							<li><img src="../../../static/img/home/subscribe.jpg" alt=""></li>
						</ul>
					</div>
					<div class="con_email">
						<span class="con_tit">邮箱地址</span>
						<div class="email_con">
							<span>邮箱：info@apftown.com</span><br>
							<span>地址：海南省三亚市海棠区亚太金融小镇</span>
						</div>
					</div>
				</div>
				<div class="mfooter">
					<span>健壮的IT系统和强大的数据库结构<br>确保每位用户的信息保密性与安全性</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from '../../../static/swiper/swiper-3.4.2.min.js';
	export default {
		data() {
			return {
				actUrl: 'https://mp.weixin.qq.com/s/hONsO6xMSH5gt9TutWv8wQ',
			}
		},
	}
</script>
<style>
	@import url("../../../static/swiper/swiper-3.4.2.min.css");

	.mob_home .swiper-pagination-bullet {
		background: #aaa;
		opacity: 1;
		-webkit-box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);
		box-shadow: 0 0 1px 1px rgba(130, 130, 130, .7);
	}

	.mob_home .swiper-pagination-bullet-active {
		background: #fff;
	}

	.mb-15 {
		margin-bottom: 0.15rem;
	}

	/* imgs */
	.mob_home .imgs img,
	.contact {
		width: 100%;
	}

	.contact {
		margin-left: auto;
		margin-right: auto;
		padding: 0 0.235rem;
	}

	.con_head {
		height: 0.35rem;
		width: 100%;
		line-height: 0.35rem;
		padding-left: 0.1rem;
		color: #626262;
		border-bottom: 1px solid rgb(220, 220, 220);
	}

	.con_head p {
		font-size: 0.14rem;
		font-weight: 500;
	}

	.con_head span {
		display: inline;
		font-weight: 400;
		border-left: 0.01rem solid rgb(150, 150, 150);
	}

	.con_num,
	.con_svsp,
	.con_email {
		background: #fff;
		margin-top: 0.3rem;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		border-radius: 0.1rem;
		border: 1px solid rgb(210, 210, 210);
		padding: 0 0.25rem;
	}

	.con_num .con_tit,
	.con_svsp .con_tit,
	.con_email .con_tit {
		position: absolute;
		font-size: 0.14rem;
		width: 0.7rem;
		height: 0.22rem;
		border-radius: 0.08rem;
		top: -0.1rem;
		left: 50%;
		margin-left: -0.4rem;
		background: #fff;
		text-align: center;
		line-height: 0.2rem;
		font-weight: 500;
		color: rgb(52, 52, 52)
	}

	.con_num .con_tit {
		border: 1px solid #f8b551;
	}

	.con_svsp .con_tit {
		border: 1px solid #8fc31f;
	}

	.con_email .con_tit {
		border: 1px solid #00a0e9;
	}


	/* 联系电话 */
	.con_num ul,
	.con_svsp ul,
	.email_con {
		width: 100%;
		margin: 0.24rem 0 0.15rem 0;
	}

	.con_num ul li,
	.con_svsp ul li {
		float: left;
		width: 50%;
		padding-bottom: 0.1rem;
	}

	.con_num ul li a {
		font-size: 0.12rem;
		font-weight: 500;
		color: #000;
	}

	.con_num ul li:nth-child(even) {
		text-align: right;
	}

	.con_svsp ul {
		text-align: center;
	}

	.email_con span,
	.mfooter span {
		font-size: 0.12rem;
		color: #333;
		line-height: 0.2rem;
	}

	.mfooter {
		width: 100%;
		margin-top: 0.4rem;
		background: #fff;
		text-align: center;
		padding: 0.1rem;
	}

	/* 业态通用 -----*/
	.fund,
	.education,
	.research {
		width: 100%;
		padding: 0.15rem 0.1rem;
	}

	.fund .fund_con,
	.education .education_con,
	.research .research_con {
		background: #fff;
		padding-top: 0.1rem;
	}

	.fund .fund_con .fund_zh,
	.education .education_con .education_zh,
	.research .research_con .research_zh {
		font-size: 0.22rem;
		border-bottom: 0.01rem solid #d2d2d2;
	}

	.fund .fund_con .fund_en,
	.education .education_con .education_en,
	.research .research_con .research_en {
		height: 0.15rem;
		line-height: 0.15rem;
		background: #eeeeee;
	}

	.fund .fund_con img,
	.education .education_con img,
	.research .research_con img {
		width: 0.8rem;
	}

	.fund_con .con_bot,
	.education_con .con_bot,
	.research_con .con_bot {
		padding: 0.25rem 0.1rem;
	}

	.fund_con .con_bot .con_botl,
	.education_con .con_bot .con_botl,
	.research_con .con_bot .con_botl {
		width: 34%;
	}

	.fund_con .con_bot .con_botr,
	.education_con .con_bot .con_botr,
	.research_con .con_bot .con_botr {
		width: 66%;
	}

	.fund_con .fund_img img:first-child,
	.education_con .education_img img:first-child,
	.research_con .research_img img:first-child {
		margin-bottom: 0.4rem;
	}

	.fund_con .con_bot .con_botr span,
	.education_con .con_bot .con_botr span,
	.research_con .con_bot .con_botr span {
		font-size: 0.12rem;
		border-radius: 0.09rem;
		color: #fff;
		padding: 0.02rem 0.04rem;
		margin-bottom: 0.03rem;
	}

	.fund_con .con_bot .con_botr p,
	.education_con .con_bot .con_botr p,
	.research_con .con_bot .con_botr p {
		line-height: 0.18rem;
		font-size: 0.1rem;
		margin-bottom: 0;
		color: #8f8f94;
	}

	/* fund */
	.fund {
		background: #e99100;
	}

	.fund .fund_con {
		box-shadow: 8px 6px 50px 0px rgba(135, 84, 0, 0.27);
	}

	.fund .fund_con .fund_zh,
	.fund .fund_con .fund_en {
		color: #eb6100;
		text-align: center;
	}

	.fund_con .con_bot .con_botr span {
		background: #eb6100;
	}

	/* education */
	.education {
		background: #8cbf1d;
	}

	.education .education_con .education_zh,
	.education .education_con .education_en {
		color: #007130;
		text-align: center;
	}

	.education_con .con_bot .con_botr span {
		background: #009944;
	}

	/* research */
	.research {
		background: #0096da;
	}

	.research .research_con .research_zh,
	.research .research_con .research_en {
		color: #00479d;
		text-align: center;
	}

	.research_con .con_bot .con_botr span {
		background: #00a0e9;
	}
</style>
