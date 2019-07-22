<template>
	<div class="eeIndex">
		<div class="nav">
			<div>
				<img src="../../../../static/img/act/ee2019/nav-01.png" alt="" class="img-w20" @click="menuShow()">
				<a href="/home"><img src="../../../../static/img/act/ee2019/nav-logo.png" alt="" class="img-w89"></a>
			</div>
			<div>
				<select id="language" v-model="language_selected" @change="switchLanguage()">
					<option v-for="(item, index) in languages" :value="item" :key="index">{{item}}</option>
				</select>
				<a href="/ee2019/contactUs"><img src="../../../../static/img/act/ee2019/nav-03.png" alt="" class="img-h23"></a>
			</div>
		</div>
		<router-view></router-view>
		<div v-show="isMenu">
			<div class="menu">
				<div class="info">
					<img :src="headInfo.logo" alt="头像" class="logo" />
					<div class="lh-20" v-show="!isLogin">
						<div class="col-fff fs-13 fw-7">{{ headInfo.name }}</div>
						<div class="col-aaa fs-12">{{ headInfo.companyName }}</div>
					</div>
					<div class="lh-20" v-show="isLogin"><a href="/login?returnUrl=/ee2019/home" class="col-aaa fs-15">点击登录</a></div>
				</div>

				<ul class="list">
					<li><a href="/ee2019/presenceMeeting">出席会议</a></li>
					<li><a href="/ee2019/attendExhibition">参与展览</a></li>
					<li><a href="/ee2019/sponsors">会议支持</a></li>
					<li><a href="/ee2019/attendMeeting">列席会议</a></li>
					<li><a href="/ee2019/agenda">会议日程</a></li>
					<li><a href="/ee2019/mediaChannel">媒体通道</a></li>
					<li><a href="/ee2019/venueInfo">会场信息</a></li>
					<li><a href="/ee2019/contactUs">联系我们</a></li>
				</ul>

				<div class="coupon" @click="getTicket()"><span>获取入场券</span></div>
			</div>
			<div @click="menuShow()" class="layer"></div>
		</div>
	</div>
</template>

<script>
	import {
		wxShare,
		getCookie,
		setCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				isLogin: getCookie('APF_UID') ? false : true,
				url: window.location.href,
				isMenu: false,
				headInfo: {
					name: '',
					logo: '../../../../static/img/act/ee2019/upload_logo.png',
					companyName: ''
				},
				language_selected: '中',
				languages: ['中', 'EN'],
			}
		},
		methods: {
			switchLanguage() { //切换中英文
				let url = this.$route.fullPath;
				let url2 = url.split('?');
				let reg = RegExp(/_en/);
				if (reg.test(url)) { //英文页面
					setCookie('APF_LAN', 0);
					url2 = url2.length > 1 ? (url2[0].replace('_en', '') + '?' + url2[1]) : url2[0].replace('_en', '');
					window.location.href = this.$root.urlPath.M_APF + url2;
				} else { //中文页面
					setCookie('APF_LAN', 1);
					url2 = url2.length > 1 ? (url2[0] + '_en?' + url2[1]) : url2[0] + '_en';
					window.location.href = this.$root.urlPath.M_APF + url2;
				}
			},
			menuShow() { // 显示侧边栏菜单
				this.isMenu = !this.isMenu;
			},
			getHeadinfo() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/personal', { // 获取菜单展开信息
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						language: 0,
					}
				}).then(res => {
					if (res.data.success && res.data.data) {
						this.headInfo = res.data.data;
					} else {
						this.headInfo['name'] = '姓名：';
						this.headInfo['companyName'] = '公司：';
					}
				}).catch(err => {
					console.log(err)
				})
			},
			getTicket() {
				this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', { // 获取是否登录
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				}).then(res => {
					if (res.data.success) {
						// 已登录
						this.$axios.get(this.$root.urlPath.NEW + '/ee/currStatus', { // 获取当前参会状态
							params: {
								APF_UID: getCookie('APF_UID'),
								serialNo: '20191131',
								type: 1,
							}
						}).then(res => {
							if (res.data.success) {
								switch (res.data.data) {
									case 0:
										// 未填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/meetingsTickets?type=1';
										break;
									case 1:
										// 已填写信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=1';
										break;
									case 2:
										// 已提交信息阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails?type=1';
										break;
									case 3:
										// 已确认阶段
										window.location.href = this.$root.urlPath.M_APF + '/ee2019/ticketsCode?type=1';
										break;
									default:
										break;
								}
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						}).catch(err => {
							console.log(err)
						})
					} else {
						// 未登录
						var url = encodeURIComponent('/ee2019/returnlog?type=1');
						window.location.href = this.$root.urlPath.M_APF + '/login?returnUrl=' + url;
					}
				}).catch(err => {
					console.log(err)
				});
			}
		},
		created() {
			// wx-share
			var title = 'E&E（Equity & Exchange）中国首个国际私募基金交易大会';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '11月三亚盛大开启，以“行业圆桌论坛+基金展台路演”，打造全球基金对接平台';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
		mounted() {
			this.getHeadinfo();
		},
	}
</script>

<style>
	.eeIndex {
		padding-top: .39rem;
		width: 100%;
		position: relative;
	}

	.ee2019 {
		width: 100%;
		position: relative;
		background-image: linear-gradient(0deg,
			#313131 0%,
			#262424 100%),
			linear-gradient(#313131, #313131);
	}

	/* 导航 */
	.eeIndex .nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #313131;
		padding: .085rem .15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;
	}

	.eeIndex .nav #language {
		background-color: #313131;
		margin-right: .26rem;
		width: .5rem;
		color: #f2f2f2;
		font-size: .12rem;
		border: none;
		vertical-align: middle;
	}

	.eeIndex .img-w20 {
		width: .2rem;
		height: .19rem;
		margin-right: .24rem;
	}

	.eeIndex .img-h23 {
		width: .235rem;
		height: .23rem;
	}

	.eeIndex .img-w89 {
		width: .89rem;
		height: .23rem;
	}

	.eeIndex .img-w100 {
		width: 100%;
	}

	.eeIndex .menu {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 1.69rem;
		background-color: #161616;
		z-index: 100000000;
	}

	.eeIndex .menu .info {
		background-color: #232323;
		display: flex;
		padding: .2rem .15rem;
		align-items: center;
	}

	.eeIndex .menu .logo {
		width: .44rem;
		height: .44rem;
		margin-right: .13rem;
		border-radius: 50%;
	}

	.eeIndex .menu li {
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		font-size: .15rem;
		border-bottom: 1px solid #3d3d3d;
	}

	.eeIndex .menu ul a {
		color: #fff;
	}

	.eeIndex .menu .coupon {
		text-align: center;
		padding: .35rem 0;
	}

	.eeIndex .menu .coupon span {
		font-size: .18rem;
		color: #fff;
		background-image: linear-gradient(180deg,
			#0068b7 0%,
			#e60012 100%),
			linear-gradient(#212226,
			#212226);
		border-radius: .22rem;
		width: 1.39rem;
		height: .45rem;
		line-height: .45rem;
		font-weight: 700;
	}

	.eeIndex .layer {
		position: fixed;
		top: 0;
		right: 0;
		width: 2.06rem;
		height: 100%;
		background-color: rgba(255, 255, 255, .2);
		z-index: 1;
	}

	/* 报名按钮 */
	.ee2019 .signUp {
		width: .66rem;
		height: .66rem;
		position: fixed;
		right: 0.2rem;
		top: 4.8rem;
		background: url('../../../../static/img/act/ee2019/btn-bg-1.png')no-repeat;
		background-size: 100% 100%;
		font-size: .14rem;
		font-weight: 700;
		color: #fff;
		padding: .14rem .17rem;
	}
</style>
