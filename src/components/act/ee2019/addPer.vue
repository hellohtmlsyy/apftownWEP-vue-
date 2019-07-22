<template>
	<div class="addPer conference">
		<div class="content">
			<div class="perInfo">
				<div class="tit">
					<a :href="('/ee2019/perList?type='+ type)"><img src="../../../../static/img/act/ee2019/left.png" alt="" class="img-w10"></a>
					{{tit}}
				</div>
				<div style="padding: 0 .17rem;">
					<ul>
						<li><span class="info-t">姓名</span><input type="text" placeholder="必填" v-model.trim="userInfo.name"></li>
						<li>
							<span class="info-t">性别</span>
							<mt-radio v-model="userInfo.gender" :options="['男', '女']"></mt-radio>
						</li>
						<li><span class="info-t">职务</span><input type="text" placeholder="选填" v-model.trim="userInfo.position"></li>
						<li><span class="info-t">固定电话</span><input type="text" placeholder="选填" v-model.trim="userInfo.phone"></li>
						<li><span class="info-t">手机号码</span><input type="text" placeholder="必填" v-model.trim="userInfo.mobile"></li>
						<li><span class="info-t">电子邮箱</span><input type="text" placeholder="选填" v-model.trim="userInfo.email"></li>
					</ul>
					<div class="add" v-show="isAdd" @click="add_per()" :disabled="disable"><img src="../../../../static/img/act/ee2019/add_icon.png"
						 alt="" class="img-w12">添加更多{{type==1? '参会': '参展'}}人员</div>
				</div>
			</div>
			<div class="complete" @click="submit()" :disabled="disable">完成</div>
		</div>
	</div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				operate: this.$route.query.operate,
				tit: '',
				userInfo: {
					name: "",
					position: "",
					phone: "",
					mobile: "",
					email: "",
					gender: '男'
				},
				gender: '男',
				type: this.$route.query.type,
				nameError: false,
				positionError: false,
				phoneError: false,
				mobileError: false,
				emailError: false,
				disable: false,
				isAdd: this.$route.query.type == 2 ? false : true
			}
		},
		methods: {
			add_per() {
				// 添加人员
				this.submit('add');
			},
			submit(str) {
				this.emailError = this.userInfo.email == '' || null || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userInfo
					.email) ? false : true;
				if (this.emailError) {
					this.$layer.msg('请输入正确的邮箱');
					return;
				}
				this.mobileError = /^\d{1,16}$/.test(this.userInfo.mobile) ? false : true;
				if (this.mobileError) {
					this.$layer.msg('请输入正确的手机');
				}
				this.phoneError = this.userInfo.phone == null || /^\d{0,16}$/.test(this.userInfo.phone) ? false : true;
				if (this.phoneError) {
					this.$layer.msg('请输入正确的电话');
					return;
				}
				this.positionError = this.userInfo.position == null || /^[\u4E00-\u9FA5A-Za-z]{0,10}$/.test(this.userInfo.position) ?
					false : true;
				if (this.positionError) {
					this.$layer.msg('请输入正确的职务');
					return;
				}
				this.nameError = /^[\u4E00-\u9FA5A-Za-z]{1,10}$/.test(this.userInfo.name) ? false : true;
				if (this.nameError) {
					this.$layer.msg('请输入正确的姓名');
				}
				if (!this.mobileError && !this.nameError) {
					this.disable = true;
					const PARAMS = {
						serialNo: '20191131',
						surname: this.userInfo.name.length <= 3 ? this.userInfo.name.slice(0, 1) : this.userInfo.name.slice(0, 2),
						givenName: this.userInfo.name.length <= 3 ? this.userInfo.name.slice(1) : this.userInfo.name.slice(2),
						gender: this.userInfo.gender == '男' ? '1' : '0',
						position: this.userInfo.position,
						phone: this.userInfo.phone,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						APF_UID: getCookie('APF_UID'),
					}
					if (this.operate || this.operate == 'modify') {
						PARAMS['id'] = this.$route.query.id;
						this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/update',
							qs.stringify(PARAMS), {
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
									'APF_UID': getCookie('APF_UID'),
								}
							}
						).then(res => {
							if (res.data.success) {
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=' + this.$route.query.type;
							} else {
								this.$layer.msg(res.data.errMsg);
							}
						}).catch(err => {
							console.log(err)
						})
					} else {
						PARAMS['type'] = this.type;
						this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/add',
							qs.stringify(PARAMS), {
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
									'APF_UID': getCookie('APF_UID'),
								}
							}
						).then(res => {
							if (res.data.success) {
								if (str == 'add') {
									// 添加人员
									window.location.href = this.$root.urlPath.M_APF + '/ee2019/addPer?type=' + this.$route.query.type;
								} else {
									// 提交表单
									window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList?type=' + this.$route.query.type;
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
			perInfo() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/participants/info', { // 获取参会参展人员信息详情
					params: {
						APF_UID: getCookie('APF_UID'),
						id: this.$route.query.id
					}
				}).then(res => {
					if (res.data.success) {
						this.userInfo = res.data.data;
						this.userInfo.gender = res.data.data.gender == 1 ? '男' : '女';
						this.userInfo['name'] = res.data.data.surname + res.data.data.givenName;
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				}).catch(err => {
					console.log(err)
				})
			}
		},
		mounted() {
			if (this.operate || this.operate == 'modify') {
				this.tit = '修改人员信息';
				this.isAdd = false;
				this.perInfo();
			} else {
				let type = this.type == 1 ? '参会' : '参展';
				this.tit = '新添' + type + '人员';
			}
			var winHeight = $(window).height() - 40; // 获取当前页面高度
			$('.addPer').css('height', winHeight + 'px');
		},
	}
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	.addPer .img-w10 {
		width: .1rem;
		height: .18rem;
		margin-right: .08rem;
		margin-top: -.02rem;
	}

	/* content */
	.addPer .top_bg {
		background: url('../../../../static/img/act/ee2019/mtickets_top.jpg')no-repeat;
		background-size: 100% 100%;
	}

	.addPer .content {
		width: 100%;
		padding: .2rem .15rem .5rem;
	}

	.addPer .perInfo .tit {
		background-image: linear-gradient(180deg, #00479d 0%, #00a0e9 100%),
			linear-gradient(#959595, #959595);
	}
</style>
