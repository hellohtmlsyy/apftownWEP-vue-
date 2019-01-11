<template>
	<div class="taxlist">
		<div class="left">
			<ul>
				<li class="li" :class="{ listbg: num==1 }" @click="tab_item(1)">税务备案登记</li>
				<li class="li" :class="{ listbg: num==2 }" @click="tab_item(2)">税种属性认定</li>
				<li class="li" :class="{ listbg: num==3 }" @click="tab_item(3)">签订三方协议</li>
				<li class="li" :class="{ listbg: num==4 }" @click="tab_item(4)">财务制度备案</li>
				<li class="li border-n">网上申报纳税</li>
				<li class="lia border-n" :class="{ listbg: num==5 }" @click="tab_item(5)" style="margin-top: -0.16rem;">地税申报流程</li>
				<li class="lia border-n" :class="{ listbg: num==6}" @click="tab_item(6)">国税申报流程</li>
				<li class="lia" :class="{ listbg: num==7 }" @click="tab_item(7)">个人税收申报</li>
				<li class="li border-n" :class="{ listbg: num==8 }" @click="tab_item(8)">代理记账及<br />后续服务</li>
			</ul>
		</div>
		<div class="right">
			<div>
				<div class="tit" v-show="(num==1)">—— <span class="fw-6">税务备案登记详细目录</span> ——</div>
				<div class="tit" v-show="(num==2)">—— <span class="fw-6">税种属性认定详细目录</span> ——</div>
				<div class="tit" v-show="(num==3)">—— <span class="fw-6">签订三方协议详细目录</span> ——</div>
				<div class="tit" v-show="(num==4)">—— <span class="fw-6">财务制度备案详细目录</span> ——</div>
				<div class="tit" v-show="(num==5)">—— <span class="fw-6">地税申报流程详细目录</span> ——</div>
				<div class="tit" v-show="(num==6)">—— <span class="fw-6">国税申报流程详细目录</span> ——</div>
				<div class="tit" v-show="(num==7)">—— <span class="fw-6">个人税收流程详细目录</span> ——</div>
				<div class="tit" v-show="(num==8)">—— <span class="fw-6">后续服务详细目录</span> ——</div>
				<div class="line"></div>
			</div>
			<div class="rcon col-333 fs-26">
				<ul v-show="(num==1)" class="mt-15"><li><router-link :to="{ path: '/taxation/t1' }" class="rtext fw-6 mt-15">税务备案登记信息<img :src="rightsrc" alt="" class="img-w6"></router-link></li></ul>
				<ul v-show="(num==2)" class="mt-15"><li><router-link :to="{ path: '/taxation/t2' }" class="rtext fw-6 mt-15">税种认定<img :src="rightsrc" alt="" class="img-w6"></router-link></li></ul>
				<ul v-show="(num==3)" class="mt-15"><li><router-link :to="{ path: '/taxation/t3' }" class="rtext fw-6 mt-15">签订三方协议<img :src="rightsrc" alt="" class="img-w6"></router-link></li></ul>
				<ul v-show="(num==4)" class="mt-15"><li><router-link :to="{ path: '/taxation/t4' }" class="rtext fw-6 mt-15">财务制度备案<img :src="rightsrc" alt="" class="img-w6"></router-link></li></ul>
				<ul v-show="(num==5)" class="mt-15">
					<li v-for="item in data.data5" class="rtext fw-6 mt-15" @click="toDetail(item.href)">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></li>
				</ul>
				<ul v-show="(num==6)" class="mt-15">
					<li v-for="item in data.data6" class="rtext fw-6 mt-15" @click="toDetail(item.href)">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></li>
				</ul>

				<ul v-show="(num==7)">
					<li><router-link :to="{ path: '/taxation/t701' }" class="rtit">系统相关<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data701"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>
					
					<li><router-link :to="{ path: '/taxation/t706' }" class="rtit">人员信息采集<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data702"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>

					<li><router-link :to="{ path: '/taxation/t13' }" class="rtit">报表填写<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data703"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>

					<li><router-link :to="{ path: '/taxation/t730' }" class="rtit">申报表报送<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data704"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>

					<li><router-link :to="{ path: '/taxation/t736' }" class="rtit">网上缴款<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data705"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>
					
					<li><router-link :to="{ path: '/taxation/t738' }" class="rtit">查询统计<img :src="brightsrc" alt="" class="img-w20"></router-link></li>

					<li><router-link :to="{ path: '/taxation/t739' }" class="rtit">备案表<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
					<li v-for="item in data.data706"><router-link :to="{ path: item.href }" class="rtext" :class="item.class">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></router-link></li>

					<li><router-link :to="{ path: '/taxation/t742' }" class="rtit">企业管理<img :src="brightsrc" alt="" class="img-w20"></router-link></li>
				</ul>

				<ul v-show="(num==8)" class="mt-15">
					<li v-for="item in data.data8" class="rtext fw-6" @click="toDetail(item.href)">{{item.text}}<img :src="rightsrc" alt="" class="img-w6"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				url: window.location.href,
				num: this.$route.query.num || 1,
				rightsrc: '../../../static/img/taxation/right.png',
				brightsrc: '../../../static/img/taxation/b-right.png',
				data: {
					data5:[
						{ href: '/taxation/t5', text: '系统登录', id: 't51' },
						{ href: '/taxation/t5#02', text: '地税登录', id: 't52' },
						{ href: '/taxation/t5#03', text: '网上申报功能介绍', id: 't53' },
						{ href: '/taxation/t5#04', text: '申报纳税（费）', id: 't54' },
					],
					data6:[
						{ href: '/taxation/t6', text: '系统登录', id: 't61' },
						{ href: '/taxation/t6#02', text: '国税登录', id: 't62' },
						{ href: '/taxation/t6#03', text: '选择申报项目', id: 't63' },
						{ href: '/taxation/t6#04', text: '填写报表', id: 't64' },
						{ href: '/taxation/t6#05', text: '缴纳税款', id: 't65' },
					],
					data701:[
						{ href: '/taxation/t701', text: '客户端运行环境', id: 't701', class: 'fw-6' },
						{ href: '/taxation/t702', text: '系统安装', id: 't702', class: 'fw-6' },
						{ href: '/taxation/t703', text: '系统初始化', id: 't703', class: 'fw-6' },
						{ href: '/taxation/t704', text: '系统登录', id: 't704', class: 'fw-6' },
						{ href: '/taxation/t705', text: '系统业务简介', id: 't705', class: 'fw-6' },
					],
					data702:[
						{ href: '/taxation/t706', text: '业务含义', id: 't706', class: 'fw-6' },
						{ href: '/taxation/t707', text: '软件操作', id: 't707', class: 'fw-6' },
						{ href: '/taxation/t708', text: '人员信息登记', id: 't708' },
						{ href: '/taxation/t709', text: '人员信息编辑', id: 't709' },
						{ href: '/taxation/t710', text: '人员报送登记', id: 't710' },
						{ href: '/taxation/t711', text: '人员信息查询', id: 't711' },
						{ href: '/taxation/t712', text: '更多操作', id: 't712' }
					],
					data703:[
						{ href: '/taxation/t713', text: '扣缴个人所得税报告表', class: 'fw-6' },
						{ href: '/taxation/t714', text: '正常工资薪金' },
						{ href: '/taxation/t715', text: '外籍人员正常工资薪金' },
						{ href: '/taxation/t716', text: '全年一次性奖金收入' },
						{ href: '/taxation/t717', text: '外籍人员数月奖金' },
						{ href: '/taxation/t718', text: '内退一次性补偿金' },
						{ href: '/taxation/t719', text: '个人股票期权行权收入' },
						{ href: '/taxation/t720', text: '提前退休一次性补贴' },
						{ href: '/taxation/t721', text: '年金领取' },
						{ href: '/taxation/t722', text: '劳务报酬' },
						{ href: '/taxation/t723', text: '特许权使用费所得' },
						{ href: '/taxation/t724', text: '利息股息红利所得' },
						{ href: '/taxation/t725', text: '股权转让所得' },
						{ href: '/taxation/t726', text: '其他财产转让所得' },
						{ href: '/taxation/t727', text: '偶然所得' },
						{ href: '/taxation/t728', text: '其他所得' },
						{ href: '/taxation/t729', text: '限售股转让所得报告表', class: 'fw-6' },
					],
					data704:[
						{ href: '/taxation/t730', text: '申报模式', class: 'fw-6' },
						{ href: '/taxation/t731', text: '发送申报', class: 'fw-6' },
						{ href: '/taxation/t732', text: '获取反馈', class: 'fw-6' },
						{ href: '/taxation/t733', text: '打印', class: 'fw-6' },
						{ href: '/taxation/t734', text: '申报更正', class: 'fw-6'},
						{ href: '/taxation/t735', text: '申报作废', class: 'fw-6' },
					],
					data705:[
						{ href: '/taxation/t736', text: '税款缴纳', class: 'fw-6' },
						{ href: '/taxation/t737', text: '历史查询', class: 'fw-6' },
					],
					data706:[
						{ href: '/taxation/t739', text: '个人取得股票期权或认购股票个人所得税分期备案', class: 'fw-6' },
						{ href: '/taxation/t740', text: '股权奖励个人所得税分期缴纳备案', class: 'fw-6' },
						{ href: '/taxation/t741', text: '转增股本个人所得税分期缴纳备案', class: 'fw-6' },
					],
					data8:[
						{ href: '/taxation/t8', text: '代理记账服务', id: 't81' },
						{ href: '/taxation/t8#03', text: '后续税务服务', id: 't83' },
					],

				}
			};
		},
		methods: {
			tab_item(num) {
				this.num = num;
			},
			toDetail(href){
				location.href = this.$root.urlPath.M_APF + href;
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');

	.listbg {
		background-color: #d2e5ff;
	}

	.img-w6 {
		width: 0.06rem;
	}
	
	.img-w20 {
		width: 0.2rem;
	}
	
	.taxlist .left,
	.taxlist .right {
		position: fixed;
		top: 0;
		bottom: 0;
		overflow: auto;
	}

	/*left*/
	.taxlist .left {
		background-color: #f7f6fb;
		width: 28%;
		padding-bottom: 0.44rem;
	}

	.taxlist .left .li {
		text-align: center;
		padding: 0.22rem 0;
		font-size: 0.13rem;
		color: #333;
		border-bottom: 1px solid #fff;
		line-height: 0.2rem;
	}

	.taxlist .left .lia {
		text-align: center;
		padding: 0.1rem 0;
		font-size: 0.12rem;
		color: #516eea;
		line-height: 0.2rem;
		border-bottom: 1px solid #fff;
	}

	/*right*/
	.taxlist .right {
		background-color: #fff;
		width: 72%;
		right: 0;
		padding: 0.03rem 0.02rem;
	}

	.taxlist .right .tit {
		color: #333;
		font-size: 0.15rem;
		background-color: #e7f1ff;
		text-align: center;
		padding: 0.1rem 0;
	}

	.taxlist .right .line {
		height: 2px;
		background-color: #e7f1ff;
		margin-top: 2px;
	}

	.taxlist .right .rcon {
		padding: 0 0.18rem 0.5rem;
	}
	
	.taxlist .rcon .rtit,
	.taxlist .rcon .rtext {
		justify-content: space-between;
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
	}
	
	.taxlist .rcon .rtit {
		line-height: 0.36rem;
		color: #516eea;
		font-size: 0.18rem;
		font-weight: 600;
		border-bottom: 2px solid #516eea;
		margin-top: 0.25rem;
	}
	
	.taxlist .rcon .rtext {
		border-bottom: 1px solid #c9c9c9;
		padding: 0.16rem 0;
		padding-right: 0.05rem;
	}
</style>
