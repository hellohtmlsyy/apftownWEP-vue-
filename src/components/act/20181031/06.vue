<template>
	<div>
		<div class="act_train05">
			<calendar v-model="calendarShow" :closeByClickmask="closeByClickmask" :format="format" @change="handelChange"
			 :minDate="minDate"></calendar>
			<calendar v-model="calendarShow2" :closeByClickmask="closeByClickmask" :format="format" @change="handelChange2"
			 :minDate="minDate2"></calendar>
			<div class="tit">
				<img :src="(this.book == 'travel'? '../../../../static/img/act/20190418/tit-6.png' : '../../../../static/img/act/20181031/tit-6.png')" />
			</div>
			<div class="con">
				<div class="form">
					<ul class="clearfix">
						<li v-if="(this.book == 'travel')">
							<span class="w1">预计时间</span>
							<span class="fs-12 col-70" style="text-align: right;">2019年4月30日—5月4日</span>
						</li>
						<li v-else><span class="w1">预计时间</span>
							<div class="col-70" style="margin-top: -0.08rem;font-size: 0.12rem;width:1.6rem;position:relative" @click="data">
								<!--<span class="fs-14 col-70" style="position: absolute;left:0; top:0.1rem">请选择时间</span>-->
								<p><i style="width: 1rem;display: inline-block;">{{selectedDate}} {{week == 1? '(周一)': (week == 2? '(周二)':(week == 3? '(周三)':(week == 4? '(周四)':(week == 5? '(周五)':(week == 6? '(周六)' : (week == 0? '(周日)': ' '))))))}}</i>{{selectedDate!=''? '到达' : ''}}</p>
								<p><i style="width: 1rem;display: inline-block;">{{selectedDate2}} {{week2 == 1? '(周一)': (week2 == 2? '(周二)':(week2 == 3? '(周三)':(week2 == 4? '(周四)':(week2 == 5? '(周五)':(week2 == 6? '(周六)' : (week2 == 0? '(周日)': ' '))))))}}</i>{{selectedDate2!=''? '离开' : ''}}</p>
							</div>
							<img src="../../../../static/img/act/20181008/right.png" alt="" style="width: .1rem;height: .18rem;" @click="data" />
						</li>

						<li v-if="(this.book == 'travel')">
							<span class="w1">预订别墅数量</span>
							<span class="fs-12 col-70" style="width:1.8rem;text-align: right;">1栋</span>
						</li>
						<li v-else><span class="w1">预订别墅数量</span><span class="fs-14 col-333" style="width:42%;text-align: right;">{{selected =='点击选择'? selected: (selected + '栋')}}</span><img
							 src="../../../../static/img/act/20181008/right.png" alt="" style="width: 0.1rem;height: .18rem;vertical-align: inherit;" />
							<select name="" v-model="selected" @click="change()" id="select">
								<option v-for="option in options" :value="option.value" :key="option.value">{{option.text}}</option>
							</select>
						</li>

						<li v-if="(this.book == 'travel')">
							<span style="width: 25%;" class="w1">参考价格</span>
							<span style="color: #e5004f;text-align: right;" class="">&yen;5100</span>
						</li>
						<li v-else v-show="(selected!='点击选择' && selectedDate != '' && selectedDate2 != '')">
							<span style="width: 25%;" class="w1">参考价格</span>
							<span style="color: #e5004f;text-align: right;" class="">&yen;{{price}}</span>
						</li>
						<li>
							<span class="w1">餐饮预订</span>
							<div class="food">
								<span :class="{active : lunch}" @click="toggleLunch()">午餐</span>
								<span :class="{active : dinner}" @click="toggleDinner()">晚餐</span>
							</div>
							<p style="position: absolute;bottom: 0.01rem;left: 0;color: #00a0e9;">每栋别墅每日提供{{this.bookData == 0 ? '' : '6人份'}}免费早餐</p>
						</li>
						<li style="padding: 0.1rem 0;"><span class="w1" style="margin-top: 0.05rem;">是否需要旅游服务</span>
							<mt-switch v-model="userinfo.tourism"></mt-switch>
						</li>
						<li style="padding: 0.1rem 0;"><span class="w1" style="margin-top: 0.05rem;">是否需要接送服务</span>
							<mt-switch v-model="userinfo.relay"></mt-switch>
						</li>
						<li><span class="w1">联系人</span><input type="text" placeholder="请输入姓名" v-model.trim="userinfo.name" /></li>
						<li><span class="w1">手机</span><input type="text" placeholder="请输入手机" v-model.trim="userinfo.tel" /></li>
						<li><span class="w1">邮箱</span><input type="text" placeholder="(选填)" v-model.trim="userinfo.email" /></li>
					</ul>
					<div class="btn" :class="{'btnActive' : this.bookData == 0}" @click="signUp()" :disabled="disable">{{this.bookData == 0 ? '预订' : '提交'}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Moment from 'moment';

	function dateFormat(date, fmt) {
		var o = {
			"M+": date.getMonth() + 1,
			"d+": date.getDate()
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	import {
		setCookie,
		getCookie,
		wxShare
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				calendarShow: false,
				closeByClickmask: true,
				format: 'MM-dd',
				selectedDate: '',
				selected1Date: this.$route.query.book == 'travel' ? '2019-04-30' : dateFormat(new Date(), "yyyy-MM-dd"),
				minDate: new Date(),
				maxDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 30),
				//离开
				calendarShow2: false,
				selectedDate2: '',
				selected2Date: this.$route.query.book == 'travel' ? '2019-05-04' : dateFormat(new Date(), "yyyy-MM-dd"),
				minDate2: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2),
				week: -1,
				week2: -1,
				selected: this.$route.query.book == 'travel' ? '1' : '点击选择',
				options: [{
						text: '点击选择',
						value: '点击选择'
					},
					{
						text: '1',
						value: '1'
					},
					{
						text: '2',
						value: '2'
					},
					{
						text: '3',
						value: '3'
					},
					{
						text: '4',
						value: '4'
					},
					{
						text: '5',
						value: '5'
					},
					{
						text: '6',
						value: '6'
					},
					{
						text: '7',
						value: '7'
					},
				],
				url: window.location.href,
				userinfo: { //用户信息
					tourism: false,
					relay: false,
					name: '',
					tel: '',
					email: '',
				},
				nameError: false, //姓名错误
				emailError: false, //邮箱错误
				telError: false, //手机号错误
				selectedError: false, //别墅数量错误
				dataError: false, //时间错误
				disable: false,
				lunch: false, //午餐
				dinner: false, //晚餐
				fromDate: this.$route.query.book == 'travel' ? '2019-04-30' : '', //入住日期
				toDate: this.$route.query.book == 'travel' ? '2019-05-04' : '', //离开日期
				price: '' || 5100, //别墅价格
				activityDesc: this.$route.query.book == 'villa' ? '民宿五月促销' : (this.$route.query.book == 'travel' ? '民宿亲子游' : '小镇住宿'), //活动描述
				activityNo: this.$route.query.data == 0 ? '20190418' : '20181031', //活动编号
				book: this.$route.query.book,
				bookData: this.$route.query.data,
			}
		},
		watch: {
			['selected']() {
				if (this.selected != '点击选择' && this.selectedDate != '' && this.selectedDate2 != '') {
					this.$axios.get(this.$root.urlPath.NEW + '/hotel/totalPrice', {
							params: {
								fromDate: this.fromDate,
								toDate: this.toDate,
								numberOfRoom: this.selected,
							}
						})
						.then(res => {
							if (res.data.success) {
								this.price = res.data.data;
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
			['selectedDate2']() {
				if (this.selected != '点击选择' && this.selectedDate != '' && this.selectedDate2 != '') {
					this.$axios.get(this.$root.urlPath.NEW + '/hotel/totalPrice', {
							params: {
								fromDate: this.fromDate,
								toDate: this.toDate,
								numberOfRoom: this.selected,
							}
						})
						.then(res => {
							if (res.data.success) {
								this.price = res.data.data;
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
			['selectedDate']() {
				if (this.selected != '点击选择' && this.selectedDate != '' && this.selectedDate2 != '') {
					this.$axios.get(this.$root.urlPath.NEW + '/hotel/totalPrice', {
							params: {
								fromDate: this.fromDate,
								toDate: this.toDate,
								numberOfRoom: this.selected,
							}
						})
						.then(res => {
							if (res.data.success) {
								this.price = res.data.data;
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
		},
		methods: {
			toggleLunch() {
				this.lunch = !this.lunch;
			},
			toggleDinner() {
				this.dinner = !this.dinner;
			},
			//多选默认第一个禁止选择
			change() {
				$('#select option:eq(0)').attr("disabled", true)
			},
			//到达时间
			handelChange(date, formatDate) {
				this.selectedDate = formatDate;
				this.selected1Date = dateFormat(date, 'yyyy-MM-dd');
				this.calendarShow2 = true;
				this.minDate2 = new Date(date.getTime() + 24 * 60 * 60 * 1000 * 2)
				this.week = date.getDay()
				this.fromDate = Moment(date).format("YYYY-MM-DD HH:mm:ss");
			},
			//离开时间
			handelChange2(date, formatDate) {
				this.selectedDate2 = formatDate;
				this.selected2Date = dateFormat(date, 'yyyy-MM-dd');
				this.week2 = date.getDay()
				this.toDate = Moment(date).format("YYYY-MM-DD HH:mm:ss");
			},
			//日期选择弹出
			data() {
				this.calendarShow = true;
			},
			//提交
			signUp() {
				this.emailError = this.userinfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if (this.telError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userinfo.name) ? false :
					true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				this.selectedError = this.selected && this.selected != '点击选择' ? false : true;
				if (this.selectedError) {
					this.$layer.msg('请选择别墅数量')
				}
				this.dataError = this.selected1Date >= dateFormat(new Date(), "yyyy-MM-dd") && this.toDate > this.fromDate ? false :
					true;
				if (this.dataError) {
					this.$layer.msg("请选择正确的时间")
				}
				if (!this.dataError && !this.emailError && !this.telError && !this.nameError && !this.selectedError) {
					this.disable = true;
					var data = this.selected1Date + '/' + this.selected2Date;
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
							params: {
								activityNo: this.activityNo,
								APF_UID: getCookie('APF_UID'),
							}
						})
						.then(res => {
							if (res.data.data != false) {
								this.$layer.msg('您已预订，不能重复预订!');
								var self = this;
								window.setTimeout(function() {
									if (self.bookData) {
										window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107?data=0&book=' + self.book;
									} else {
										window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107';
									}
								}, 2000)
							} else {
								const params = {
									APF_UID: getCookie('APF_UID'),
									activityNo: this.activityNo,
									activityDesc: this.activityDesc,
									contactPerson: this.userinfo.name,
									mobile: this.userinfo.tel,
									email: this.userinfo.email,
									companyName: '--',
									actNumber: this.selected,
									additional2: data,
									additional3: (this.lunch && this.dinner ? '1,1' : (this.lunch && !this.dinner ? '1,0' : (!this.lunch && this
										.dinner ? '0,1' : '0,0'))),
									additional4: (this.userinfo.tourism && this.userinfo.relay ? '1,1' : (this.userinfo.tourism && !this.userinfo
										.relay ? '1,0' : (!this.userinfo.tourism && this.userinfo.relay ? '0,1' : '0,0'))),
									additional5: this.price,
								}
								this.$axios.post(this.$root.urlPath.NEW + '/wap/activity/activitySubmit',
										qs.stringify(params), {
											headers: {
												'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
												'APF_UID': getCookie('APF_UID'),
											}
										}
									)
									.then(res => {
										if (res.data.success) {
											//发邮件短信
											this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/sendNotice', {
													params: {
														APF_UID: getCookie('APF_UID'),
														activityNo: this.activityNo,
													}
												})
												.then(res => {})
												.catch(err => {
													console.log(err)
												});
											this.$layer.msg('恭喜您预订成功！');
											var self = this;
											window.setTimeout(function() {
												if (self.bookData) {
													window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107?data=0&book=' + self.book;
												} else {
													window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107';
												}
											}, 2000)
										} else {
											this.$layer.msg(res.data.errMsg);
										}
									})
									.catch(err => {
										console.log(err)
									})
							}
						})
						.catch(err => {
							console.log(err)
						})
				}
			},
		},
		mounted() {
			$('.calendar-month-picker').append('<span></span>')
		},
		created() {
			//wx-share
			var title = '海棠花居，三亚最浪漫的民宿';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '美丽三亚，浪漫天涯，来海棠花居，住海棠湾最浪漫的花园民宿';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);

			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) { //已登录
						this.userinfo.tel = res.data.data.mobile;
						//是否报名
						this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
								params: {
									activityNo: this.activityNo,
									APF_UID: getCookie('APF_UID'),
								}
							})
							.then(res => {
								if (res.data.data != false) { //已预订
									this.$layer.msg('您已预订，不能重复预订!');
									var self = this;
									window.setTimeout(function() {
										if (self.bookData) {
											window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107?data=0&book=' + self.book;
										} else {
											window.location.href = self.$root.urlPath.M_APF + '/act/act2018103107';
										}
									}, 2000)
								} else { //未预订
								}
							})
							.catch(err => {
								console.log(err)
							})
					} else { //未登录
						if (this.bookData) {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018103105?data=0&book=' + this.book;
						} else {
							window.location.href = this.$root.urlPath.M_APF + '/act/act2018103105';
						}
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
	}
</script>
<style>
	.current-month-value {
		color: #333;
	}

	.calendar-month-picker {
		color: #EB6100;
	}

	.act_train05 i {
		font-style: normal;
	}

	.act_train05 .mb-20 {
		margin-bottom: 0.1rem;
	}

	.act_train05 {
		background-color: #fff;
		padding: 0.12rem 0;
		width: 100%;
		height: 100%;
	}

	.act_train05 .tit img {
		width: 100%;
		margin-bottom: 0.1rem;
	}

	.act_train05 .text,
	.act_train05 .con {
		width: 100%;
		padding: 0 0.2rem;
	}

	.act_train05 .text img {
		width: 100%;
		box-shadow: 6px 5px 8px 0px rgba(42, 56, 30, 0.15);
		border-radius: 8px;
	}

	.act_train05 .con {
		padding: 0 0.18rem;
	}

	.act_train05 .con .form {
		background: #fff;
		border-radius: 5px;
		padding: 0.18rem 0.21rem 0.2rem 0.26rem;
		box-shadow: 4px 4px 0px 0px rgba(30, 45, 56, 0.2);
		border: solid 1px #368aab;
	}

	.act_train05 .form input {
		border: none;
	}

	.act_train05 .form li {
		width: 100%;
		border-bottom: 1px solid #a0a0a0;
		padding: 0.17rem 0;
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.act_train05 .form .food span {
		font-size: 0.12rem;
		color: #333;
		border-radius: 10px;
		border: solid 1px #313131;
		width: 0.58rem;
		height: 0.21rem;
		line-height: 0.21rem;
		text-align: center;
		margin-left: 0.1rem;
	}

	.act_train05 .form .food .active {
		color: #fff;
		background-color: #00a0e9;
		border: solid 1px #00a0e9;
	}

	.act_train05 .form li .w1 {
		font-size: 0.12rem;
		color: #333;
	}

	.act_train05 .form li input[type="text"] {
		text-align: right;
		font-size: 0.12rem;
		color: #333;
		width: 1.8rem;
	}

	.act_train05 .form li select {
		position: absolute;
		right: 0;
		top: 0.2rem;
		width: 2rem;
		opacity: 0;
	}

	.act_train05 .form li .optional {
		font-size: 0.09rem;
		font-style: normal;
		color: #707070;
	}

	.act_train05 .form .btn {
		width: 100%;
		font-size: 0.18rem;
		color: #fff;
		background-color: #6bbe21;
		border-radius: 5px;
		text-align: center;
		height: 0.41rem;
		line-height: 0.41rem;
		margin-top: 0.19rem;
	}

	.act_train05 .form .btnActive {
		background-color: #00a0e9;
	}
</style>
