<template>
	<div>
		<div class="act_train05">
			<calendar v-model="calendarShow" :closeByClickmask="closeByClickmask" :format="format" @change="handelChange" :minDate="minDate"></calendar>
			<calendar v-model="calendarShow2" :closeByClickmask="closeByClickmask" :format="format" @change="handelChange2" :minDate="minDate2"></calendar>
			<div class="tit">
				<img src="../../../../static/img/act/20181008/5-title.png" />
			</div>
			<div class="con">
				<div class="form">
					<ul class="clearfix mb-20">
						<li class="clearfix"><span class="fl w1">预计时间</span>
							<div class="fl col-70" style="margin-top: -0.08rem;font-size: 0.12rem;width:1.6rem;position:relative"  @click="data">
								<!--<span class="fs-30 col-70" style="position: absolute;left:0; top:0.1rem">请选择时间</span>-->
								<p ><i style="width: 0.6rem;display: inline-block;">{{selectedDate}}</i>{{selectedDate!=''? '到达' : ''}}</p>
								<p ><i style="width: 0.6rem;display: inline-block;">{{selectedDate2}}</i>{{selectedDate2!=''? '离开' : ''}}</p>
							</div>
							<img class="fr" src="../../../../static/img/act/20181008/right.png" alt="" style="width: 0.1rem;" @click="data"/>
						</li>
						<li class="clearfix"><span class="w1">意向教室</span><span class="fs-30 col-70">{{selected}}</span><img class="fr" src="../../../../static/img/act/20181008/right.png" alt="" style="width: 0.1rem;vertical-align: inherit;" />
							<select name="" v-model="selected" @click="change()" id="select">
								<option v-for="option in options" :value="option.value" :key="option.value">{{option.text}}</option>
							</select>
						</li>
						<li class="clearfix"><span class="w1">意向场地<i class="optional">(选填)</i></span><span class="fs-30 col-70">{{selected2}}</span><img class="fr" src="../../../../static/img/act/20181008/right.png" alt="" style="width: 0.1rem;" />
							<select name="" v-model="selected2">
								<option v-for="option in options2" :value="option.value" :key="option.value">{{option.text}}</option>
							</select>
						</li>
						<li class="clearfix"><span class="fl w1">联系人</span><input type="text" placeholder="请输入姓名" class="fr" v-model.trim="userinfo.name" /></li>
						<li class="clearfix"><span class="fl w1">单位</span><input type="text" placeholder="请输入单位名称" class="fr" v-model.trim="userinfo.unitName" /></li>
						<li class="clearfix"><span class="fl w1">手机</span><input type="text" placeholder="请输入手机" class="fr" v-model.trim="userinfo.tel" /></li>
						<li class="clearfix"><span class="fl w1">邮箱</span><input type="text" placeholder="请输入邮箱" class="fr" v-model.trim="userinfo.email" /></li>
						<li class="clearfix"><span class="fl w1">预计参与培训人数</span><input type="text" placeholder="请输入培训人数" class="fr" v-model.trim="userinfo.peoNum" /></li>
						<li class="clearfix"><span class="fl w1">预计需要宿舍房间</span><input type="text" placeholder="请输入房间数量" class="fr" v-model.trim="userinfo.roomsNum" /></li>
					</ul>
					<div class="btn" @click="signUp()" :disabled="disable">提交</div>
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
		if(/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	import { setCookie, getCookie, wxShare } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				calendarShow: false,
				closeByClickmask: true,
				format: 'MM-dd',
				selectedDate: '',
				selected1Date: dateFormat(new Date(), "yyy-MM-dd"),
				minDate: new Date(),
				maxDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 30),
				//离开
				calendarShow2: false,
				selectedDate2: '',
				selected2Date: dateFormat(new Date(), "yyy-MM-dd"),
				minDate2: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2),
				
				getDates: '2018',
				selected: '请选择教室',
				options: [{
						text: '请选择教室',
						value: '请选择教室'
					},
					{
						text: '大教室',
						value: '大教室'
					},
					{
						text: '中教室',
						value: '中教室'
					},
					{
						text: '小教室',
						value: '小教室'
					},
				],
				selected2: '请选择场地',
				options2: [{
						text: '请选择场地',
						value: '请选择场地'
					},
					{
						text: '案例研讨室',
						value: '案例研讨室'
					},
					{
						text: '金融实验室',
						value: '金融实验室'
					},
					{
						text: '金融展厅',
						value: '金融展厅'
					},
					{
						text: '三月三广场',
						value: '三月三广场'
					},

				],
				url: window.location.href,
				userinfo: {
					name: '',
					unitName: '',
					tel: '',
					email: '',
					peoNum: '',
					roomsNum: '',
				},
				nameError: false,
				unitNameError: false,
				telError: false,
				emailError: false,
				peoNumError: false,
				roomsNumError: false,
				selectedError: false,
				selected2Error: false,
				dataError: false,
				disable: false,
				telError: false, //手机号错误
				mobileIsEixt: false,
				fromDate: '', //入住日期
				toDate: '', //离开日期
			}
		},
		methods: {
			//多选默认第一个禁止选择
			change(){
				$('#select option:eq(0)').attr("disabled",true)
			},
			//到达时间
			handelChange(date, formatDate) {
				this.selectedDate = formatDate;
				this.selected1Date = dateFormat(date,'yyyy-MM-dd');
				this.calendarShow2 = true;
				this.minDate2 = new Date(date.getTime() + 24 * 60 * 60 * 1000 * 2)
				this.fromDate = Moment(date).format("YYYY-MM-DD HH:mm:ss");
			},
			//离开时间
			handelChange2(date, formatDate) {
				this.selectedDate2 = formatDate;
				this.selected2Date = dateFormat(date,'yyyy-MM-dd');
				this.toDate = Moment(date).format("YYYY-MM-DD HH:mm:ss");
			},
			//日期选择弹出
			data(){
				this.calendarShow = true;
			},
			//提交 
			signUp() {
				var num = /^[123456789]/;
				this.roomsNumError = this.userinfo.roomsNum.length > 0 && this.userinfo.roomsNum > 0 && this.userinfo.roomsNum < 151 && num.test(this.userinfo.roomsNum) ? false : true;
				if(this.roomsNumError){
					if(this.userinfo.roomsNum > 150){
						this.$layer.msg('房间数量最大限制为150间');
					}else if(!this.userinfo.roomsNum){
						this.$layer.msg('请输入房间数量');
					}else if(!num.test(this.userinfo.roomsNum)){
						this.$layer.msg('请输入正确的房间数量');
					}
				}
				this.peoNumError = this.userinfo.peoNum.length > 0 && this.userinfo.peoNum > 0 && this.userinfo.peoNum <301 && /^[123456789]/.test(this.userinfo.peoNum) ? false : true;
				if(this.peoNumError){
					if(this.userinfo.peoNum >300){
						this.$layer.msg('人数最大限制为300人');
					}else if(!this.userinfo.peoNum){
						this.$layer.msg('请输入培训人数');
					}else if(!(/^[123456789]/.test(this.userinfo.peoNum))){
						this.$layer.msg('请输入正确的培训人数');
					}
				}
				this.emailError = this.userinfo.email.length > 0 && /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email) ? false: true;
				if(this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if(this.telError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.unitNameError = this.userinfo.unitName.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test (this.userinfo.unitName) ? false: true;
				if(this.unitNameError) {
					this.$layer.msg('请输入正确的公司名称');
				}
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userinfo.name) ?	false : true;
				if(this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				this.selectedError = this.selected && this.selected != '请选择教室' ? false : true;
				if(this.selectedError) {
					this.$layer.msg('请选择教室')
				}
				this.selected2Error = this.selected2 && this.selected2 != '请选择场地' ? false : true;
				this.dataError = this.selectedDate >=dateFormat(new Date(), "MM-dd") && this.toDate > this.fromDate ? false :true;
				if(this.dataError){
					this.$layer.msg("请选择正确的时间")
				}
				if( !this.dataError && !this.roomsNumError && !this.peoNumError && !this.emailError && !this.telError && !this.telError && ! this.unitNameError && !this.nameError && !this.selectedError) {
					this.disable = true;
					var data = this.selected1Date +  '/' +this.selected2Date;
					this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: '20181008',
							APF_UID: getCookie('APF_UID'),
						}
					} )
					.then(res=>{
						if(res.data.data!=false){
							this.$layer.msg('您已预订，不能重复预订!');
							var self = this;
							window.setTimeout(function(){
								window.location.href = self.$root.urlPath.M_APF + '/act/act2018081806';
							},2000)
						}else{
							const params = {
								activityNo: 20181008,
								activityDesc: '亚太金融小镇培训基地',
								companyName: this.userinfo.unitName,
								contactPerson: this.userinfo.name,
								mobile: this.userinfo.tel,
								email: this.userinfo.email,
								APF_UID: getCookie('APF_UID'),
								actNumber: this.userinfo.peoNum,
								additional2: data,
								additional3: this.selected,
								additional5: this.userinfo.roomsNum,
							}
							if(!this.selected2Error) {
								params['additional4'] = this.selected2;
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
								if(res.data.success) {
									this.$layer.msg('恭喜您预订成功！');
									var self = this;
									window.setTimeout(function() {
										window.location.href = self.$root.urlPath.M_APF + '/act/act2018100806';
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
					.catch(err=>{console.log(err)})
				}
			},
		},
		mounted() {
			$('.calendar-month-picker').append('<span></span>')
		},
		created() {
			//wx-share
			var title = '亚太金融小镇培训基地欢迎您';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '白天面朝大海，夜晚仰望星空，上课金融学习，下课资本沙龙，来三亚度过一段难忘同窗时光';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
			
			//是否登录
			this.$axios.get(this.$root.urlPath.NEW + '/user/getUserInfo', {
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			})
			.then(res => {
				if(res.data.success) {
					this.userinfo.tel = res.data.data.mobile;
					//是否报名
					this.$axios.get(this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: '20181008',
							APF_UID: getCookie('APF_UID'),
						}
					})
					.then(res => {
						if(res.data.data!=false) {
							this.$layer.msg('您已预订，不能重复预订!');
							var self = this;
							window.setTimeout(function(){
								window.location.href = self.$root.urlPath.M_APF + '/act/act2018100806';
							},2000)
						} else {
//							window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100805';
						}
					})
					.catch(err => {
						console.log(err)
					})
				}else{
					window.location.href = this.$root.urlPath.M_APF+ '/act/act2018100804';
				}
			})
			.catch(err => {
				console.log(err)
			});

		},
	}
</script>
<style>
	.current-month-value{
		color: #333;
	}
	.calendar-month-picker{
		color: #EB6100;
	}
	@import url("../../../../static/css/reset.css");
	i{
		font-style: normal;
	}
	.fs-30 {
		font-size: 0.14rem;
	}
	
	.col-70 {
		color: #707070;
	}
	
	.mb-20 {
		margin-bottom: 0.1rem;
	}
	
	.act_train05 {
		background-color: #eee;
		padding: 0.2rem 0;
	}
	
	.act_train05 .tit img {
		height: 0.37rem;
		margin-bottom: 0.11rem;
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
		margin-bottom: 0.25rem;
	}
	
	.act_train05 .con .form {
		background: #fff;
		border-radius: 5px;
		box-shadow: 6px 6px 8px 0px rgba(42, 56, 30, 0.15);
		padding: 0.18rem 0.21rem 0.2rem 0.26rem;
	}
	
	.act_train05 .form input {
		border: none;
	}
	
	.act_train05 .form li {
		width: 100%;
		border-bottom: 1px solid #a0a0a0;
		padding: 0.17rem 0;
		position: relative;
	}
	
	.act_train05 .form li .w1 {
		font-size: 0.12rem;
		color: #333;
		width: 1.1rem;
	}
	
	.act_train05 .form li input[type="text"] {
		text-align: right;
		font-size: 0.12rem;
		color: #333;
		width: 1.8rem;
	}
	/*.act_train05 .form li input::-webkit-input-placeholder{
		color: #333;
	}*/
	
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
		margin-top: 0.45rem;
	}
</style>