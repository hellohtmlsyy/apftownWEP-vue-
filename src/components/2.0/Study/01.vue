<template>
	<div class="study01 industry">
		<div class="top_bg">一个班主任搞定所有培训事宜<br /><span class="fs-14 fw-7">两个负责人搞定所有会议细节</span></div>
		<div class="content">
			<div class="adv">
				<div class="tit mb-8">场地预定</div>
				<div class="advText tac">欢迎各培训机构及论坛主办单位的入驻<br /><span class="fw-7">小镇有会议室、教室、博物馆、酒店、民宿、餐厅等各种设施</span></div>
				<div class="field">
					<div class="left">举办 <span class="fw-7 fs-24">培训</span><img src="../../../../static/img/2.0/study/study1-2.png"
						 alt="举办培训" class="img-w81"></div>
					<div class="right">
						<small>您只需负责好课程、师资、学员教室、住宿、活动等工作交给我们</small><br /><br />
						<span class="fs-13 fw-7">派1个班主任<br />就能完成高品质培训教学</span>
					</div>
				</div>
				<div class="field field2">
					<div class="left">举办 <span class="fw-7 fs-24">会议</span><img src="../../../../static/img/2.0/study/study1-3.png"
						 alt="举办会议" class="img-w53"></div>
					<div class="right">
						<small>您只需要组织好日程、专家、参会者接站、会场、住宿、晚宴交给我们</small><br /><br />
						<span class="fs-13 fw-7">派2个会议负责人<br />即可举办顶级国际会议</span>
					</div>
				</div>
			</div>

			<div class="adv adv2 mb-15" id="classroom">
				<div class="clearfix t">
					<span class="tit mb-8">教室</span>
					<span class="fr">最舒适的培训环境，心灵安宁学习效率高</span>
				</div>
				<div class="advText"></div>
				<ul class="clearfix">
					<li :class="item.liclass" v-for="(item, index) in classroom" :key="index">
						<img :src="item.imgsrc" :alt="item.text1||item.text" :class="item.imgclass" v-preview="item.bigimgsrc"
						 preview-title-enable="true" preview-nav-enable="true">
						<div class="fs-13 col-333 fw-7 mb-8" v-show="item.text1">{{item.text1}}<small class="col-6bbe21 fw-4">　{{item.text2}}</small></div>
						<div class="fs-11">{{item.info}}</div>
					</li>
				</ul>
			</div>

			<div class="adv adv2 mb-15">
				<div class="clearfix t">
					<span class="tit mb-8">住宿</span>
					<span class="fr">精品民宿/时尚酒店/私家别墅，任您选择</span>
				</div>
				<div class="advText"></div>
				<div class="stay dis-fl">
					<div class="left">
						<img src="../../../../static/img/2.0/study/study1-11.jpg" alt="精品民宿" class="img-w143" v-preview="bigimg08"
						 preview-title-enable="true" preview-nav-enable="true">
						<small><span class="fw-7 col-333">64间精品民宿</span><br />乡村情怀的心灵归宿</small>
					</div>
					<div class="right">
						<img src="../../../../static/img/2.0/study/study1-12.jpg" alt="时尚酒店" class="img-w160" v-preview="bigimg09"
						 preview-title-enable="true" preview-nav-enable="true">
						<small class="mb-5"><span class="fw-7 col-333">64间时尚酒店　</span>国际风尚青春体验</small>
						<img src="../../../../static/img/2.0/study/study1-13.jpg" alt="私家别墅" class="img-w160" v-preview="bigimg10"
						 preview-title-enable="true" preview-nav-enable="true">
						<small><span class="fw-7 col-333">7栋私家别墅</span><br />隐居乡里的人文会所</small>
					</div>
				</div>
			</div>

			<div class="adv adv2">
				<div class="clearfix t">
					<span class="tit mb-8">服务</span>
					<span class="fr">最贴心的服务管家给您10项服务</span>
				</div>
				<div class="advText"></div>
				<div class="tac">
					<img src="../../../../static/img/2.0/study/study1-14.png" alt="10项服务" class="img-w276">
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
				classroom: [{
						liclass: 'mr-17',
						imgsrc: '../../../../static/img/2.0/study/study1-4.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/01-bigPicture.jpg',
						text1: '大教室',
						text2: '一层150人，8000元/天',
						imgclass: 'img-w150',
						info: '大礼堂一层核心位置,可为会议、培训、宴会服务,2块86寸互动教学电视、高级JBL音响及全套舞台灯光配套'
					},
					{
						liclass: '',
						imgsrc: '../../../../static/img/2.0/study/study1-5.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/02-bigPicture.jpg',
						text1: '中教室',
						text2: '二层64人，4000元/天',
						imgclass: 'img-w150',
						info: '位于大礼堂二层北侧，配备现代时尚课桌椅，86寸触屏互动教学电视享有300平方米户外茶歇露台区'
					},
					{
						liclass: 'mr-17',
						imgsrc: '../../../../static/img/2.0/study/study1-6.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/03-bigPicture.jpg',
						text1: '小教室',
						text2: '二层40人，2000元/天',
						imgclass: 'img-w150',
						info: '位于大礼堂二层西侧，配备现代时尚课桌椅，86寸触屏互动教学电视享有100平方米户外茶歇露台区'
					},
					{
						liclass: '',
						imgsrc: '../../../../static/img/2.0/study/study1-7.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/04-bigPicture.jpg',
						text1: '案例研讨室',
						text2: '二层10人，2000元/天',
						imgclass: 'img-w150',
						info: '位于大礼堂二层南侧，3间10人的小型研讨室,可分组进行团队案例研讨，享有独立户内及户外茶歇配套休息区'
					},
					{
						liclass: 'mr-17',
						imgsrc: '../../../../static/img/2.0/study/study1-8.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/05-bigPicture.jpg',
						text1: '金融实验室',
						text2: '36台设备，6000元/天',
						imgclass: 'img-w150',
						info: '位于大礼堂3层，后工业风设计，8个全球交易所终端，36台高性能计算机，可用于基金、期货等投资实验现场金融建模培训'
					},
					{
						liclass: '',
						imgsrc: '../../../../static/img/2.0/study/study1-9.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/06-bigPicture.jpg',
						text1: '金融展厅',
						text2: '1000平方米，8000元/天',
						imgclass: 'img-w150',
						info: '包括主题形象、私人影院、多媒体互动、小型影音室、留言合影，5大展示区域，还可以根据客户的需要，就金融、艺术、历史等题材定制策展'
					},
					{
						liclass: '',
						imgsrc: '../../../../static/img/2.0/study/study1-10.jpg',
						bigimgsrc: '../../../../static/img/2.0/study/07-bigPicture.jpg',
						text: '三月三广场',
						text1: '',
						text2: '',
						imgclass: 'img-w317',
						info: '地处小镇中央核心区域，1500平方米的户外大型广场可以用于大型会展、黄昏酒会、夜晚BBQ等活动'
					},

				],
				bigimg08: '../../../../static/img/2.0/study/08-bigPicture.jpg',
				bigimg09: '../../../../static/img/2.0/study/09-bigPicture.jpg',
				bigimg10: '../../../../static/img/2.0/study/10-bigPicture.jpg'
			}
		},
	}
</script>
<style>
	@import url("../../../assets/css/town2.0.css");

	.study01 .img-w53 {
		width: 0.53rem;
		margin-top: 0.05rem;
	}

	.study01 .img-w81 {
		width: 0.81rem;
		margin-top: 0.1rem;
	}

	.study01 .img-w143 {
		width: 1.43rem;
		margin-bottom: 0.08rem;
	}

	.study01 .img-w150 {
		width: 1.5rem;
		margin-bottom: 0.1rem;
	}

	.study01 .img-w160 {
		width: 1.6rem;
		margin-bottom: 0.05rem;
	}

	.study01 .img-w276 {
		width: 2.76rem;
		margin-bottom: 0.1rem;
	}

	.study01 .img-w317 {
		width: 3.17rem;
		margin-bottom: 0.1rem;
	}

	.study01 .top_bg {
		background-image: url('../../../../static/img/2.0/study/study1-1.jpg');
	}

	/* 场地 */
	.study01 .field {
		display: flex;
		margin: 0.1rem 0.1rem 0;
	}

	.study01 .field .left {
		flex: 1;
		font-size: 0.18rem;
		color: #1b1b1b;
		text-align: center;
		padding: 0.05rem 0 0.02rem;
		background-color: rgba(34, 172, 56, 0.1);
	}

	.study01 .field2 .left {
		background-color: rgba(0, 158, 150, 0.1);
	}

	.study01 .field .right {
		flex: 1.5;
		background-color: #22ac38;
		color: #fff;
		font-size: 0.12rem;
		line-height: 0.18rem;
		padding: 0.11rem 0.08rem;
	}

	.study01 .field2 .right {
		background-color: #009e96;
	}

	.study01 .adv .t {
		display: flex;
		align-items: baseline;
		padding-right: 0.1rem;
	}

	.study01 .adv .t .tit {
		flex: 1;
	}

	.study01 .adv .t .fr {
		font-size: 0.12rem;
		color: #6bbe21;
	}

	.study01 .content .adv2 .advText {
		border-top: 1px solid #6bbe21;
	}

	/* 教室 */
	.study01 .adv2 ul {
		margin: 0 0.13rem;
		width: 3.17rem;
	}

	.study01 .adv2 li {
		width: 1.5rem;
		color: #707070;
		font-size: 0.12rem;
		line-height: 0.18rem;
		float: left;
		margin-bottom: 0.15rem;
	}

	.study01 .adv2 li:last-child {
		width: 3.17rem;
		margin-bottom: 0;
	}

	/* 住宿 */
	.study01 .stay {
		margin: 0 0.13rem;
		font-size: 0.12rem;
		color: #707070;
		line-height: 0.18rem;
	}

	.study01 .stay .left {
		margin-right: 0.12rem;
	}

	.study01 small {
		width: 114%;
	}

	.study01 #classroom small {
		display: inline
	}
</style>
