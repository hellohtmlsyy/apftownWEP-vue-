<template>
	<div class="pay m" v-show="flag">
		<div class="col-fff fs-12 tac">
			<p>仅供内部人员使用,初五迎财神庙会</p>
			<p>用户姓名：{{userInfo.contactPerson == null ? '无' : userInfo.contactPerson }}</p>
			<p>报名电话：{{userInfo.contactNumber == null ? '无' : userInfo.contactNumber}}</p>
			<p>微信昵称：{{userInfo.nickName == null ? '无' : userInfo.nickName}}</p>
		</div>
		<div class="content">
			<ul>
				<li class="dis-fl" v-for="(item, index) in data" :key="index">
					<div><span class="fs-18 fw-7">{{item.tit}}</span>（{{item.price}}元宝/个）</div>
					<div class="dis-fl aic">
						<span class="fs-12 col-c9 mr-24">X</span>
						<img src="../../../../../static/img/2.0/user/-.jpg" alt="" class="img-w23" @click="reduceNum(item)">
						<input type="number" v-model.trim="item.num" class="frame">
						<img src="../../../../../static/img/2.0/user/+.jpg" alt="" class="img-w23" @click="addNum(item)">
					</div>
				</li>

				<li class="dis-fl">
					<span class="fs-18 fw-7">其他</span>
					<div class="fs-15 col-333"><input type="number" v-model.trim="otherNum" class="frame" style="width: 0.44rem;">元宝</div>
				</li>
			</ul>
			<div class="total dis-fl">
				<span>总计</span>
				<div><span class="fs-18 fw-7">{{sum + Number(otherNum)}}</span> 元宝</div>
			</div>
			<button type="button" class="btn" @click="sub()" :disabled="disable">提交</button>
		</div>
		<div v-show="!flag"></div>
	</div>
</template>

<script>
	import {
		getCookie
	} from '@/assets/commonjs/util.js';
	let mobile = /[^\d]/g;
	import qs from 'qs';
	export default {
		data() {
			return {
				flag: false,
				disable: false,
				data: [{
						tit: '套圈',
						price: '10',
						num: 0
					},
					{
						tit: '飞镖',
						price: '10',
						num: 0
					},
					{
						tit: '摸财神',
						price: '30',
						num: 0
					},
				],
				otherNum: 0,
				qrCodeToken: this.$route.query.qrCodeToken,
				operateUserToken: '',
				extraAmount: '',
				userInfo: ''
			}
		},
		computed: {
			sum() {
				let price = 0;
				//遍历数组
				this.data.forEach(ele => {
					if (ele.num) {
						price += ele.num * ele.price;
					}
				});
				return price
			},
		},
		methods: {
			addNum(obj) {
				obj.num++;

			},
			reduceNum(obj) {
				obj.num--;
				if (obj.num <= 0) obj.num = 0;
			},
			sub() {
				this.disable = true;
				let params = {
					APF_UID: getCookie('APF_UID'),
					qrCodeToken: this.qrCodeToken,
					operateUserToken: this.userInfo.operateUserToken,
					extraAmount: this.otherNum,
				}
				if (this.data[0].num > 0 && this.data[0].num != '') {
					params['item1Id'] = '1024472822979760128';
					params['item1Quantity'] = this.data[0].num;
				}
				if (this.data[1].num > 0 && this.data[1].num != '') {
					params['item2Id'] = '1024473139892981760';
					params['item2Quantity'] = this.data[1].num;
				}
				if (this.data[2].num > 0 && this.data[2].num != '') {
					params['item3Id'] = '1024473169030811648';
					params['item3Quantity'] = this.data[2].num;
				}

				this.$axios.post(this.$root.urlPath.NEW + '/serviceOperator/writeOff', (
						qs.stringify(params)
					))
					.then(res => {
						if (res.data.success) {
							location.href = this.$root.urlPath.M_APF + '/user/payresult?result=1';
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					})
					.catch(err => {
						console.log(err)
					});
			}
		},
		created() {
			this.$axios.post(this.$root.urlPath.NEW + '/serviceOperator/scanQrCode', (
					qs.stringify({
						APF_UID: getCookie('APF_UID'),
						qrCodeToken: this.qrCodeToken,
					})
				))
				.then(res => {
					if (res.data.success) {
						this.flag = true;
						this.userInfo = res.data.data
					} else {
						this.flag = false;
						this.$layer.msg(res.data.errMsg);
					}
				})
				.catch(err => {
					this.disable = false;
					console.log(err)
				});
		},
		mounted() {
			var winHeight = $(window).height(); //获取当前页面高度
			$('.m').css('height', winHeight + 'px');
		},
	}
</script>

<style>
	@import url("../../../../assets/css/town2.0.css");

	.pay .img-w23 {
		width: 0.23rem;
		height: 0.23rem;
	}

	.frame {
		width: 0.23rem;
		height: 0.23rem;
		text-align: center;
		line-height: 0.23rem;
		background: #fff;
		border: 1px solid #d2d2d2;
		font-size: 0.12rem;
		color: #f39800;
		margin: 0 0.05rem;
		border-radius: 0;
	}

	.pay {
		padding: 0.24rem 0.28rem 0;
	}

	.pay .content {
		padding: 0.06rem 0.27rem 0.51rem;
		margin-top: 0.21rem;
	}

	.pay .content li {
		padding: 0.24rem 0 0.18rem;
		border-bottom: 1px solid #dcdcdc;
		font-size: 0.13rem;
		color: #333;
		align-items: center;
		justify-content: space-between;
		align-items: center;
	}

	.pay .content .total {
		font-size: 0.12rem;
		color: #eb6100;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.1rem;
	}

	.pay .content .btn {
		height: 0.4rem;
		background-color: #22ac38;
		border-radius: 0.2rem;
		color: #fff;
		font-size: 0.18rem;
		line-height: 0.4rem;
		margin-top: 1rem;
		width: 100%;
		border: none;
	}
</style>
