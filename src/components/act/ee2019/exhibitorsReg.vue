<template>
	<div class="exhibitorsReg conference">
		<div class="top_bg"></div>
		<div class="content">
			<div class="entInfo mb-15">
				<div class="tit">企业信息</div>
				<ul>
					<li>
						<span class="info-t">企业名称</span>
						<input type="text" placeholder="必填" v-model.trim="entInfo.company">
					</li>
					<li class="up_logo">
						<span class="info-t">企业LOGO</span>
						<span>
							<span class="vam">上传&nbsp;&nbsp;</span>
							<cropper @transferUser="getUrl" :headImg="logo" class="headImg"></cropper>
						</span>
					</li>
					<li class="tac">
						<span class="info-t">所在地区</span>
						<span class="selectBox col-000 fles-1">
							{{company_selected}}&nbsp;&nbsp;
							<span>></span>
							<select name v-model="company_selected" id="company_select">
								<option v-for="(item, index) in entCompanys" :value="item" :key="index">{{item}}</option>
							</select>
						</span>
						<input type="text" placeholder="请输入城市" v-model.trim="entInfo.city">
					</li>
					<li>
						<span class="info-t">详细地址</span>
						<input type="text" placeholder="选填" v-model.trim="entInfo.address">
					</li>
					<li>
						<span class="info-t">企业类型</span>
						<span class="selectBox">
							{{type_selected}}&nbsp;&nbsp;
							<span>></span>
							<select name v-model="type_selected" id="type_select">
								<option v-for="( option, index ) in entTypes" :key="index" :value="option">{{option}}</option>
							</select>
						</span>
					</li>
				</ul>
			</div>
			<div class="perInfo">
				<div class="tit">个人信息</div>
				<div style="padding: 0 .17rem;">
					<ul>
						<li>
							<span class="info-t">姓名</span>
							<input type="text" placeholder="必填" v-model.trim="userInfo.name">
						</li>
						<li>
							<span class="info-t">性别</span>
							<mt-radio v-model="gender" :options="['男', '女']"></mt-radio>
						</li>
						<li>
							<span class="info-t">职务</span>
							<input type="text" placeholder="选填" v-model.trim="userInfo.position">
						</li>
						<li>
							<span class="info-t">固定电话</span>
							<input type="text" placeholder="选填" v-model.trim="userInfo.phone">
						</li>
						<li>
							<span class="info-t">手机号码</span>
							<input type="text" placeholder="必填" v-model.trim="userInfo.mobile">
						</li>
						<li>
							<span class="info-t">电子邮箱</span>
							<input type="text" placeholder="选填" v-model.trim="userInfo.email">
						</li>
					</ul>
				</div>
			</div>
			<div class="complete" @click="submit()" :disabled="disable">完成</div>
		</div>
	</div>
</template>

<script>
	import cropper from '@/components/comm/upload-img.vue';
	import {
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		components: {
			cropper
		},
		data() {
			return {
				entInfo: {
					company: "",
					country: "",
					city: "",
					address: "",
					types: ""
				}, // 企业信息
				imgurlObj: '',
				logo: "../../../../static/img/act/ee2019/upload_logo.png",
				company_selected: "中国",
				entCompanys: ["阿富汗", "奥兰群岛", "阿尔巴尼亚", "阿尔及利亚", "美属萨摩亚", "安道尔", "安哥拉", "安圭拉", "南极洲", "安提瓜和巴布达", "亚美尼亚", "阿根廷", "阿鲁巴",
					"澳大利亚", "奥地利", "阿塞拜疆", "巴哈马", "巴林", "孟加拉", "巴巴多斯", "白俄罗斯", "比利时", "伯利兹", "贝宁", "百慕大", "不丹", "玻利维亚", "波斯尼亚和黑塞哥维那",
					"博茨瓦纳", "布韦岛", "巴西", "英属印度洋领土", "英属维尔京群岛", "文莱", "保加利亚", "布基纳法索", "布隆迪", "柬埔寨", "喀麦隆", "加拿大", "佛得角", "开曼群岛", "中非",
					"乍得", "智利", "中国", "中国香港", "中国澳门", "中国台湾", "圣诞岛", "科特迪瓦", "科科斯（基林）群岛", "哥伦比亚", "科摩罗", "刚果", "刚果（金）", "库克群岛",
					"哥斯达黎加", "克罗地亚", "古巴", "塞浦路斯", "捷克", "丹麦", "吉布提", "多米尼克", "多米尼加", "厄瓜多尔", "埃及", "萨尔瓦多", "赤道几内亚", "埃塞俄比亚", "厄立特里亚",
					"爱沙尼亚", "福克兰群岛", "法罗群岛", "斐济", "芬兰", "法国", "法属圭亚那", "法属波利尼西亚", "法属南部领地", "加蓬", "冈比亚", "格鲁吉亚", "德国", "加纳", "直布罗陀",
					"希腊", "格陵兰", "格林纳达", "瓜德罗普", "关岛", "危地马拉", "几内亚", "几内亚比绍", "圭亚那", "海地", "赫德岛和麦克唐纳岛", "洪都拉斯", "匈牙利", "冰岛", "印度",
					"印度尼西亚", "伊朗", "马恩岛", "伊拉克", "爱尔兰", "以色列", "意大利", "牙买加", "日本", "约旦", "哈萨克斯坦", "肯尼亚", "基里巴斯", "朝鲜", "韩国", "科威特",
					"吉尔吉斯斯坦", "老挝", "黎巴嫩", "莱索托", "拉脱维亚", "利比里亚", "利比亚", "列支敦士登", "立陶宛", "卢森堡", "马其顿", "马达加斯加", "马拉维", "马来西亚", "马尔代夫",
					"马里", "马耳他", "马绍尔群岛", "马提尼克", "毛里塔尼亚", "毛里求斯", "马约特", "墨西哥", "密克罗尼西亚", "摩纳哥", "蒙古", "缅甸", "摩尔多瓦", "蒙特塞拉特", "摩洛哥",
					"莫桑比克", "纳米比亚", "瑙鲁", "尼泊尔", "荷兰", "荷属安的列斯群岛", "新喀里多尼亚", "新西兰", "尼加拉瓜", "尼日尔", "尼日利亚", "纽埃", "诺福克岛", "挪威",
					"北马里亚纳群岛", "阿曼", "帕劳", "巴勒斯坦", "巴基斯坦", "巴拿马", "巴布亚新几内亚", "巴拉圭", "秘鲁", "菲律宾", "皮特凯恩", "波兰", "葡萄牙", "波多黎各", "卡塔尔",
					"留尼汪", "罗马尼亚", "俄罗斯", "卢旺达", "圣海伦娜", "圣基茨和尼维斯", "圣卢西亚", "圣皮埃尔和密克隆群岛", "圣文森特和格林纳丁斯", "萨摩亚", "圣马利诺", "圣多美和普林西比",
					"沙特阿拉伯", "塞内加尔", "塞尔维亚和黑山", "塞舌尔", "塞拉利昂", "新加坡", "斯洛伐克", "斯里兰卡", "斯洛文尼亚", "所罗门群岛", "索马利亚", "南非", "南桑威奇群岛", "西班牙",
					"苏丹", "苏里南", "斯瓦尔巴和扬马延", "斯威士兰", "瑞典", "瑞士", "叙利亚", "塔吉克斯坦", "泰国", "东帝汶", "多哥", "托克劳", "汤加", "特立尼达和多巴哥", "突尼斯",
					"土耳其", "土库曼斯坦", "特克斯和凯科斯群岛", "图瓦卢", "乌干达", "乌克兰", "阿拉伯联合酋长国", "英国", "坦桑尼亚", "美国", "美属维尔京群岛", "乌拉圭", "乌兹别克斯坦",
					"瓦努阿图", "梵蒂冈", "委内瑞拉", "越南", "瓦利斯和富图纳", "西撒哈拉", "也门", "赞比亚", "津巴布韦", "其他"
				],
				type_selected: "普通合伙",
				entTypes: ["普通合伙", "投资机构", "顾问机构", "服务机构", "其他"],
				gender: "男",
				userInfo: {
					name: "",
					position: "",
					phone: "",
					mobile: "",
					email: ""
				}, // 个人信息
				companyError: false,
				cityError: false,
				addressError: false,
				nameError: false,
				positionError: false,
				phoneError: false,
				mobileError: false,
				emailError: false,
				disable: false,
			};
		},
		methods: {
			getUrl(msg) {
				// 获取上传logo地址
				this.imgurlObj = msg;
				this.logo = JSON.parse(this.imgurlObj).path;
			},
			submit(str) {
				this.emailError = this.userInfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userInfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
					return;
				}
				this.mobileError = /^\d{1,16}$/.test(this.userInfo.mobile) ? false : true;
				if (this.mobileError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.phoneError = /^\d{0,16}$/.test(this.userInfo.phone) ? false : true;
				if (this.phoneError) {
					this.$layer.msg('请输入正确的电话');
					return;
				}
				this.positionError = /^[\u4E00-\u9FA5A-Za-z]{0,10}$/.test(this.userInfo.position) ? false : true;
				if (this.positionError) {
					this.$layer.msg('请输入正确的职务');
					return;
				}
				this.nameError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userInfo.name) ? false : true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				this.addressError = /^.{0,200}$/.test(this.entInfo.address) ? false : true;
				if (this.addressError) {
					this.$layer.msg('请输入正确的地址');
					return;
				}
				this.cityError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.entInfo.city) ? false : true;
				if (this.cityError) {
					this.$layer.msg('请输入正确的城市');
				}
				this.companyError = /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.entInfo.company) ? false : true;
				if (this.companyError) {
					this.$layer.msg('请输入正确的企业名称，名称不得大于20字');
				}
				if (!this.mobileError && !this.nameError && !this.cityError && !this.companyError) {
					this.disable = true;
					const PARAMS = {
						serialNo: '20191131',
						eType: 2,
						companyName: this.entInfo.company,
						type: this.type_selected == '普通合伙' ? '0' : (this.type_selected == '投资机构' ? '1' : (this.type_selected == '顾问机构' ?
							'2' : (this.type_selected == '服务机构' ? '3' : '4'))),
						logo: this.logo,
						country: this.company_selected,
						city: this.entInfo.city,
						address: this.entInfo.address,
						surname: this.userInfo.name.length <= 3 ? this.userInfo.name.slice(0, 1) : this.userInfo.name.slice(0, 2),
						givenName: this.userInfo.name.length <= 3 ? this.userInfo.name.slice(1) : this.userInfo.name.slice(2),
						gender: this.gender == '男' ? '1' : '0',
						position: this.userInfo.position,
						phone: this.userInfo.phone,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						language: 0,
						APF_UID: getCookie('APF_UID'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/submit',
						qs.stringify(PARAMS), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'APF_UID': getCookie('APF_UID'),
							}
						}
					).then(res => {
						if (res.data.success) {
							if (str == 'add') {
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/addPer?type=2';
							} else {
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=2';
							}
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					}).catch(err => {
						console.log(err)
					})
				}
			}
		},
	};
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	.exhibitorsReg .file-uploads {
		vertical-align: middle;
	}

	/* content */
	.exhibitorsReg .top_bg {
		background: url("../../../../static/img/act/ee2019/sinUp_top.jpg") no-repeat;
		background-size: 100% 100%;
	}

	.exhibitorsReg .content {
		width: 100%;
		padding: 0 .15rem .5rem;
		margin-top: -.47rem;
	}

	.exhibitorsReg .entInfo .tit {
		background-image: linear-gradient(180deg, #e12823 0%, #f3500e 100%),
			linear-gradient(#959595, #959595);
	}

	.exhibitorsReg .perInfo .tit {
		background-image: linear-gradient(180deg, #00479d 0%, #00a0e9 100%),
			linear-gradient(#959595, #959595);
	}

	.exhibitorsReg .entInfo ul {
		padding: 0 .17rem;
	}

	.exhibitorsReg .entInfo .up_logo {
		padding: .15rem 0;
	}

	.exhibitorsReg .entInfo li:last-child {
		border: none;
	}

	.exhibitorsReg .entInfo li .selectBox {
		position: relative;
	}

	.exhibitorsReg .entInfo li select {
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
	}
</style>
