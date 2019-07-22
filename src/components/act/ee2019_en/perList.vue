<template>
	<div class="exhibitorsList conference">
		<div class="content">
			<div class="perInfo">
				<div class="tit">{{type==1? "Information list of Participants": "Exhibitor Information List"}}</div>
				<div style="padding: 0 .13rem;">
					<ul id="ul">
						<li v-for="item in perList" :key="item.id">
							<div class="dis-fl aic jcSb border-b-1-d2"><span class="fs-16 fw-7">{{item.surname}} {{item.givenName}}</span><span
								 class="fs-13">{{item.mobile}}</span></div>
							<div class="dis-fl aic jcSb"><span class="fs-13">{{item.position}}</span><span><span class="btn btn-modify"
									 @click="modify(item.id)">Modify</span><span class="btn btn-del" @click="del(item.id)">Delete</span></span></div>
							<span class="side"></span>
						</li>
					</ul>
					<div class="add" @click="add_per()" :disabled="disable" v-show="isAdd"><img src="../../../../static/img/act/ee2019/add_icon.png"
						 alt="" class="img-w12">Add a new person</div>
				</div>
			</div>
			<div class="complete" @click="submit()" :disabled="disable">SUBMIT</div>
		</div>
	</div>
</template>

<script>
	import {
		MessageBox
	} from 'mint-ui';
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		data() {
			return {
				perList: [],
				type: this.$route.query.type,
				disable: false,
				isAdd: true,
			}
		},
		methods: {
			modify(id) { // 修改
				window.location.href = this.$root.urlPath.M_APF + '/ee2019/addPer_en?operate=modify&type=' + this.type + '&id=' +
					id;
			},
			del(id) { // 删除
				MessageBox.confirm('',{
					title:'message',
					message:'Are you sure you want to delete this member?',
					confirmButtonText:'ok',
					cancelButtonText:'cancel'
				}).then(action => {
					const PARAMS = {
						id: id,
						APF_UID: getCookie('APF_UID'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/delete',
						qs.stringify(PARAMS), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'APF_UID': getCookie('APF_UID'),
							}
						}
					).then(res => {
						if (res.data.success) {
							this.getList();
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					}).catch(err => {
						console.log(err)
					})
				}).catch(cancel => {
					console.log(cancel)
				});
			},
			getList() {
				this.$axios.get(this.$root.urlPath.NEW + '/ee/participants/list', { // 获取参会参展人员信息列表
					params: {
						APF_UID: getCookie('APF_UID'),
						serialNo: '20191131',
						type: this.type,
					}
				}).then(res => {
					var winHeight = $(window).height(); // 获取当前页面高度
					if (res.data.success) {
						this.perList = res.data.data;
						if (res.data.data.length >= 5 && this.type == 2) this.isAdd = false;
						if (this.perList.length <= 3 || winHeight > 680) {
							$('.exhibitorsList').css('height', winHeight + 'px');
						}
					} else {
						this.$layer.msg(res.data.errMsg);
						if (res.data.data == null) {
							$('.exhibitorsList').css('height', winHeight + 'px');
						}
					}
				}).catch(err => {
					console.log(err)
				})
			},
			add_per() {
				window.location.href = this.$root.urlPath.M_APF + '/ee2019/addPer_en?type=' + this.type;
			},
			submit() {
				const PARAMS = {
					APF_UID: getCookie('APF_UID'),
					serialNo: '20191131',
					type: this.type,
				}
				this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/submission', // 完成提交参会参展信息
					qs.stringify(PARAMS), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'APF_UID': getCookie('APF_UID'),
						}
					}
				).then(res => {
					if (res.data.success) {
						window.location.href = this.$root.urlPath.M_APF + '/ee2019/subDetails_en?type=' + this.type;
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				}).catch(err => {
					console.log(err)
				})
			},
		},
		created() {
			this.getList();
		},
	}
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	.exhibitorsList .border-b-1-d2 {
		padding-bottom: .07rem;
		margin-bottom: .07rem;
	}

	/* content */
	.exhibitorsList .content {
		width: 100%;
		padding: .2rem .15rem .5rem;
		margin: 0;
	}

	.exhibitorsList .perInfo .tit {
		background-image: linear-gradient(180deg, #00479d 0%, #00a0e9 100%),
			linear-gradient(#959595, #959595);
	}

	.exhibitorsList .perInfo li {
		width: 100%;
		margin-top: .15rem;
		border-radius: .1rem;
		border: solid 1px #d2d2d2;
		color: #434343;
		background-color: #fff;
		position: relative;
		padding: .15rem .17rem .08rem .2rem;
	}

	.exhibitorsList li .side {
		position: absolute;
		left: 0;
		top: 0;
		width: .06rem;
		height: 100%;
		background-color: #b0e5ff;
		border-radius: .1rem 0 0 .1rem;
	}

	.exhibitorsList li .btn {
		font-size: .12rem;
		width: .5rem;
		height: .22rem;
		line-height: .21rem;
		background-color: #fff;
		border-radius: .11rem;
		text-align: center;
	}

	.exhibitorsList li .btn-modify {
		color: #0055a9;
		border: solid 1px #448aca;
		margin-right: .18rem;
	}

	.exhibitorsList li .btn-del {
		color: #7d7d7d;
		border: solid 1px #a0a0a0;
	}
</style>
