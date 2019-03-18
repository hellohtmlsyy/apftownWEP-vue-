<template>
	<div class="bill">
		<div class="top-fiexd">
			<div class="top">
				<div class="fs-50">{{available}}</div>
				<div><img src="../../../../static/img/2.0/user/icon1-1.png" alt="" class="img-w18">可用金元宝</div>
				<div class="pay"><a href="/user/paycode" class="col-fff"><img src="../../../../static/img/2.0/user/icon1-2.jpg" alt=""
						 class="img-w30"><br>支付</a></div>
			</div>

			<mt-navbar v-model="active">
				<mt-tab-item id="0">全部</mt-tab-item>
				<mt-tab-item id="1">收入</mt-tab-item>
				<mt-tab-item id="2">支出</mt-tab-item>
			</mt-navbar>
		</div>
		<div class="con">
			<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" :bottomPullText='bottomPullText'>
				<div class="item dis-fl" v-for="(item,index) in allBill" :id="index" :key="index">
					<div>
						<div class="fs-14 col-333 mb-10">{{item.remark}}</div>
						<div class="fs-12 col-a0">{{item.updateTime | datafmt('YYYY-MM-DD HH:mm:ss')}}</div>
					</div>
					<div :class="{'col-eb6100': item.transactionType == 1}" class="col-a0 fs-15">{{item.transactionType == 1? '+': '-'}}
						{{item.amount}}</div>
				</div>
			</mt-loadmore>
		</div>
		<div class="all" v-show="allLoaded">—— 已经加载全部数据 ——</div>
	</div>
</template>

<script>
	import {
		wxShare,
		getCookie
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				selected: 'Usercenter',
				available: 0,
				active: '0',
				bottomPullText: '上拉加载更多',
				allBill: [],
				transactionType: 0,
				pageNum: 1,
				numPerPage: 10,
				allLoaded: false,
				total: 0,
			}
		},
		watch: {
			['active']() {
				this.transactionType = this.active;
				this.allBill = [];
				this.pageNum = 1;
				this.allLoaded = false;
				this.getBill()
			}
		},
		methods: {
			tab() {
				alert(1)
			},
			getBill() {
				this.$axios.get(this.$root.urlPath.NEW + '/town/coin/accountDetail', {
						params: {
							APF_UID: getCookie('APF_UID'),
							transactionType: this.transactionType,
							pageNum: this.pageNum,
							numPerPage: this.numPerPage,
						}
					})
					.then(res => {
						if (res.data.success) {
							this.allBill = this.allBill.concat(res.data.data.townCoinAccountDetailVOS);
							this.total = res.data.data.totalCount;
							if (this.total == this.allBill.length) {
								this.allLoaded = true;
							}
							this.pageNum++;
						} else {
							this.$layer.msg(res.data.errMsg);
						}
						
					})
					.catch(err => {
						console.log(err)
					});
			},
			loadBottom() {
				// 加载更多数据
				console.log('上拉函数调用了loading..');
				this.$refs.loadmore.onBottomLoaded();
				if (this.total == this.allBill.length) {
					this.allLoaded = true;
				}
				this.getBill();
			}
		},
		created() {
			this.$axios.get(this.$root.urlPath.NEW + '/town/coin/userCoin', {
					params: {
						APF_UID: getCookie('APF_UID'),
					}
				})
				.then(res => {
					if (res.data.success) {
						this.available = res.data.data;
					} else {
						this.$layer.msg(res.data.errMsg);
					}
				})
				.catch(err => {
					console.log(err)
				});
			this.getBill();
		},
	}
</script>

<style>
	@import url("../../../assets/css/town2.0.css");

	.bill .img-w18 {
		width: 0.18rem;
		margin-right: 0.08rem;
	}

	.bill .img-w30 {
		width: 0.3rem;
		margin-bottom: 0.05rem;
	}

	.bill .top {
		width: 100%;
		height: 1.5rem;
		background-image: linear-gradient(0deg,
			#e97e01 0%,
			#ffcc1c 100%),
			linear-gradient(#f1a200,
			#f1a200);
		position: relative;
		color: #fff;
		text-align: center;
		padding-top: 0.25rem;
		font-size: 0.12rem;
	}

	.bill .top .pay {
		position: absolute;
		right: 0.25rem;
		top: 0.25rem;
		background: initial;
		padding: 0;
	}

	.bill .all {
		font-size: 0.12rem;
		color: #aaa;
		text-align: center;
		padding: 0.18rem 0;
		background-color: #eee;
	}

	.bill .mint-navbar {
		border-top: 0.15rem solid #eee;
		border-bottom: 0.05rem solid #eee;
	}

	.bill .mint-tab-item-label {
		font-size: 0.15rem;
	}

	.bill .mint-navbar .mint-tab-item {
		border-right: 1px solid #e3e3e3;
	}

	.bill .mint-navbar .mint-tab-item:last-child {
		border: none
	}

	.bill .mint-navbar .mint-tab-item.is-selected {
		background-image: linear-gradient(0deg,
			#e97e01 0%,
			#ffcc1c 100%),
			linear-gradient(#e98002,
			#e98002);
		border: none;
		color: #fff;
		margin: 0;
	}

	.bill .con .item {
		background-color: #ffffff;
		border-bottom: solid 1px #e5e5e5;
		height: 0.7rem;
		padding: 0.12rem 0.41rem 0.12rem 0.25rem;
		justify-content: space-between;
		align-items: center;
	}
</style>
