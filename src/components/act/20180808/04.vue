<template>
	<div>
		<div class="act04">
			<div class="attend_expo">				
				<div class="identity">
					<div class="ideTit">请选择您的参会身份</div>
					<div class="ideCon">
						<span class="inv" @click="toggleInv()" :class="{ active:active==1 }">我是投资方</span>
						<span class="fin" @click="toggleFin()" :class="{ active:active==2 }">我是融资方</span>							
					</div>
					<div class="form">
						<select name="" v-model="selected">
							<option v-for="option in options" :value="option.value" :key="option.value">{{option.text}}</option>
						</select>
						<label for="">
							<input type="text"  placeholder="姓名" v-model.trim="userinfo.name"/>
						</label>
						<label for="">
							<input type="text"  placeholder="单位" v-model.trim="userinfo.company"/>
						</label>
						<label for="">
							<input type="tel"  placeholder="手机" v-model.trim="userinfo.tel"/>
						</label>
						<label for="">
							<input type="email"  placeholder="邮箱" v-model.trim="userinfo.email"/>
						</label>
						<label for="">
							<input type="tel"  placeholder="人数" v-model.trim="userinfo.num"/>
						</label>
					</div>
				</div>
			</div>
			<div class="con">
				<div class="btn" @click="sub()" :disabled="disable">提交</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import { setCookie,getCookie,wxShare } from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data(){
			return {
				userinfo: {
					name: '',
					company: '',
					tel: '',
					email: '',
					num: '',
				},
				selected: '投融资行业选择',
				options: [
					{text:'投融资行业选择',value:'投融资行业选择'},
					{text:'IT|互联网|通信',value:'IT|互联网|通信'},
					{text:'房产|不动产',value:'房产|不动产'},
					{text:'生产制造',value:'生产制造'},
					{text:'农林渔业',value:'农林渔业'},
					{text:'旅游、教育及文体娱乐',value:'旅游、教育及文体娱乐'},
					{text:'矿产能源',value:'矿产能源'},
					{text:'现代服务业',value:'现代服务业'},
					{text:'其他',value:'其他'},
				],
				additional1: '投资方',
				selectedError: false,
				nameError: false,
				companyError: false,
				telError: false,
				emailError: false,
				numError: false,
				active: 1,
				disable: false,
				url: window.location.href,
			}
		},
		methods: {
			toggleFin(){
				this.additional1 = '融资方';
				this.active = 2;
			},
			toggleInv(){
				this.additional1 = '投资方';
				this.active = 1;
			},
			sub(){
				this.numError = this.userinfo.num.length >0 && this.userinfo.num <99 && this.userinfo.num > 0? false: true;
				if(this.numError){
					this.$layer.msg('请输入正确的人数');
				}
				this.emailError = this.userinfo.email.length >0 && /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userinfo.email)? false: true;
				if(this.emailError){
					this.$layer.msg('请输入正确的邮箱');
				}
				this.telError = this.userinfo.tel.length == 11 && /^1[34578]\d{9}$/.test(this.userinfo.tel) ? false : true;
				if(this.telError){
					this.$layer.msg('请输入正确的手机');
				}
				this.companyError = this.userinfo.company.length > 0 && /^[\u4e00-\u9fa5A-Za-z]{1,20}$/.test(this.userinfo.company)? false : true;
				if(this.companyError){
					this.$layer.msg('请输入正确的公司名称，公司名称不得大于20字');
				}
				this.nameError = this.userinfo.name.length > 0 && /^[\u4E00-\u9FA5A-Za-z]+$/.test(this.userinfo.name)? false : true;
				if(this.nameError){
					this.$layer.msg('请输入正确的姓名');
				}
				this.selectedError = this.selected && this.selected !='投融资行业选择' ? false: true;
				if(this.selectedError){
					this.$layer.msg('请选择投融资行业')
				}
				if(!this.numError && !this.emailError && !this.telError && !this.companyError && !this.nameError && !this.selectedError ){
					this.disable = true;
					//是否报名
					this.$axios.get( this.$root.urlPath.NEW + '/wap/activity/actAlready', {
						params: {
							activityNo: 20180808,
							APF_UID: getCookie('APF_UID'),
						}
					} )
					.then(res=>{
						if(res.data.data){
							this.$layer.msg('您已报名，不能重复报名!');
							var self = this;
							window.setTimeout(function(){
								window.location.href = self.$root.urlPath.M_APF + '/act/act2018080805';
							},2000)
						}else{
							const params = {
								activityNo: 20180808,
								activityDesc: '海南优质项目对接会',
								companyName: this.userinfo.company,
								contactPerson: this.userinfo.name,
								mobile: this.userinfo.tel,
								email: this.userinfo.email,
								actNumber: this.userinfo.num,
								additional1: this.additional1,
								additional2: this.selected,
								APF_UID: getCookie('APF_UID'),
							}
							this.$axios.post(this.$root.urlPath.NEW + '/wap/activity/activitySubmit',
								qs.stringify(params),
								{
									headers: {
						          		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						          		'APF_UID': getCookie('APF_UID'),
					            	}
								}
							)
							.then(res=>{
								if(res.data.success){
									this.$layer.msg('恭喜您报名成功！');
									var self = this;
									window.setTimeout(function(){
										window.location.href = self.$root.urlPath.M_APF + '/act/act2018080805';
									},2000)
								}else{
									this.$layer.msg(res.data.errMsg);
								}
							})
							.catch(err=>{console.log(err)})
						}
					})
					.catch(err=>{console.log(err)})
				}
			},
		},
		mounted(){
		    var winHeight = $(window).height(); //获取当前页面高度  
		    $('.act04').css('height', winHeight + 'px');     
		},
		created(){
			//wx-share
		    var title = '2018海南优质项目对接会,三亚亚太金融小镇等你来';
		    var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
		    var desc = '8月31日海棠湾，三亚市政府主办，汇聚国内外优势资本，对接海南岛优质项目';
		    var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
			//是否报名 
			this.$axios.get( this.$root.urlPath.NEW + '/user/getUserInfo',{
				params: {
					APF_UID: getCookie('APF_UID'),
				}
			} )
			.then(res=>{
				if(!res.data.success){
					window.location.href = this.$root.urlPath.M_APF + '/act/act2018080803';
				}else{
					this.userinfo.tel = res.data.data.mobile;
				}
			})
			.catch(err=>{console.log(err)});
		},
	}
</script>
<style scoped>
	@import url("../../../../static/css/reset.css");
	.mb-20{
		margin-bottom: 0.1rem;
	}
	.act04{
		background-image: url(../../../../static/img/act/20180808/bg04.jpg);
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
	}
	.act04 .attend_expo{
	    padding: 0.85rem 0.43rem 0;
	}
	.act04 .identity .ideTit{
		width: 100%;
		text-align: center;
		font-size: 0.11rem;
		color: #fff100;
	}
	.act04 .identity .ideCon{
		width: 100%;
		padding-top: 0.15rem;
	}
	.act04 .identity .ideCon .inv{
		margin-right: 0.42rem;
	}
	.act04 .identity .ideCon span{
		width: 42%;
		border-radius: 35px;		
		height: 0.35rem;
		line-height: 0.32rem;
		font-size: 0.14rem;
		color: #fff;
		text-align: center;
		border: solid 1px #fff;
	}
	.act04 .identity .ideCon .active{
		border: solid 2px #fff100;
		color: #fff100;
		font-weight: 600;
	}
	.act04 .identity .form{
		padding-top: 0.25rem;
	}
	.act04 .identity .form select{
		width: 100%;
		height: 0.4rem;
		padding: 0 0.18rem;
		font-size: 0.15rem;
		border: solid 1px #fff100;
		border-radius: 5px;
	    margin-bottom: 0.1rem;
	    color: #7d7d7d;
		background-color: #fff;
	}
	.act04 .identity .form input{
		width: 100%;
		height: 0.4rem;
		background-color: #ffffff;
		border-radius: 5px;
		border: solid 1px #a0a0a0;
		font-size: 0.15rem;
		color: #7d7d7d;
		padding: 0 0.18rem;
		margin-bottom: 0.1rem;
	}
	.act04 .con{
		padding: 0 0.43rem;
		position: absolute;
		bottom: 0.44rem;
		left: 0;
	    right: 0;
	    margin: 0 auto;
	}
	.act04 .con .btn{
		width: 100%;
		height: 0.41rem;
		line-height: 0.41rem;
		background-color: #fff100;
		border-radius: 5px;
		font-size: 0.18rem;
		text-align: center;		
		border: none;
		color: #1b1b1b;
		padding: 0;
	}
</style>