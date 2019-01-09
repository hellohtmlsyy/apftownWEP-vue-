<template>
	<div class="taxlist">
		<div class="nav"><img src="../../../static/img/taxation/nav.png" alt="" class="img-w205"></div>
		<div class="left">
			<ul>
				<li class="li" :class="{ listbg: num==1 }" @click="tab_item(1)">税务备案登记</li>
				<li class="li" :class="{ listbg: num==2 }" @click="tab_item(2)">税种属性认定</li>
				<li class="li" :class="{ listbg: num==3 }" @click="tab_item(3)">签订三方协议</li>
				<li class="li" :class="{ listbg: num==4 }" @click="tab_item(4)">财务制度备案</li>
				<li class="li border-n">网上申报纳税</li>
				<li class="lia border-n" :class="{ listbg: num==5 }" @click="tab_item(5)">地税申报流程</li>
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
			<div class="con">
				<div class="text" v-show="(num==1)">
					<a href="/taxation/t1">营业执照原件</a><br />
					<a href="/taxation/t1">股东信息及公司股权分配比例</a><br />
					<a href="/taxation/t1">法人等信息</a>
				</div>
				<div class="text" v-show="(num==2)"><a href="/taxation/t2">认定税种方式</a></div>
				<div class="text" v-show="(num==3)"><a href="/taxation/t3">签订三方协议方式</a></div>
				<div class="text" v-show="(num==4)"><a href="/taxation/t4">财务制度备案范本</a></div>
				<div class="text" v-show="(num==5)">
					<a href="/taxation/t5">系统登录</a><br />
					<a href="/taxation/t5#02">地税登录</a><br />
					<a href="/taxation/t5#03">网上申报功能介绍</a><br />
					<a href="/taxation/t5#04">申报纳税（费）</a>
				</div>
				<div class="text" v-show="(num==6)">
					<a href="/taxation/t6">系统登录</a><br />
					<a href="/taxation/t6#02">国税登录</a><br />
					<a href="/taxation/t6#03">选择申报项目</a><br />
					<a href="/taxation/t6#04">填写报表</a><br />
					<a href="/taxation/t6#05">缴纳税款</a>
				</div>
				<div class="text" v-show="(num==7)">
					<a href="">系统相关</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 客户端运行环境</a><br />
						<a href="">— 系统安装</a><br />
						<a href="">— 系统初始化</a><br />
						<a href="">— 系统登录</a><br />
						<a href="">— 系统业务简介</a>
					</div>

					<a href="">人员信息采集</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 业务含义</a><br />
						<a href="">— 人员信息登记</a><br />
						<a href="">— 人员信息编辑</a><br />
						<a href="">— 人员报送登记</a><br />
						<a href="">— 人员信息查询</a><br />
						<a href="">— 更多操作</a>
					</div>

					<a href="">报表填写</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 扣缴个人所得税报告表</a><br />
						<a href="">— 正常工资薪金</a><br />
						<a href="">— 外籍人员正常工资薪金</a><br />
						<a href="">— 全年一次性奖金收入</a><br />
						<a href="">— 外籍人员数月奖金</a><br />
						<a href="">— 内退一次性补偿金</a><br />
						<a href="">— 个人股票期权行权收入</a><br />
						<a href="">— 提前退休一次性补贴</a><br />
						<a href="">— 年金领取</a><br />
						<a href="">— 劳务报酬</a><br />
						<a href="">— 特许权使用费所得</a><br />
						<a href="">— 利息股息红利所得</a><br />
						<a href="">— 股权转让所得</a><br />
						<a href="">— 其他财产转让所得</a><br />
						<a href="">— 偶然所得</a><br />
						<a href="">— 其他所得</a><br />
						<a href="">— 限售股转让所得报告表</a>
					</div>

					<a href="">申报表报送</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 申报模式</a><br />
						<a href="">— 发送申报</a><br />
						<a href="">— 获取反馈</a><br />
						<a href="">— 打印</a><br />
						<a href="">— 申报更正</a><br />
						<a href="">— 申报作废</a>
					</div>

					<a href="">网上缴款</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 税款缴纳</a><br />
						<a href="">— 历史查询</a><br />
						<a href="">— 查询统计</a><br />
					</div>

					<a href="">备案表</a><br />
					<div class="fs-24 fw-4">
						<a href="">— 个人取得股票期权或认购股票个人<br>所得税分期备案</a><br />
						<a href="">— 股权奖励个人所得税分期缴纳备案</a><br />
						<a href="">— 转增股本个人所得税分期缴纳备案</a><br />
					</div>
					
					<a href="">企业管理</a><br />
				</div>
				<div class="text" v-show="(num==8)">
					<a href="/taxation/t8">代理记账优势</a><br />
					<a href="/taxation/t8#02">代理记账流程</a><br />
					<a href="/taxation/t8#03">后续税务服务</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: this.$route.query.num || 1,
			};
		},
		methods: {
			tab_item(num) {
				this.num = num;
			}
		}
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');

	.listbg {
		background-color: #d2e5ff;
	}
	.img-w205{
		width: 2.05rem;
	}
	.nav{
		height: 100%;
	}
	.taxlist .nav img{
		position: fixed;
		bottom: 0;
		z-index: 1;
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
		width: 32%;
		padding-bottom: 0.44rem;
	}

	.taxlist .left .li {
		text-align: center;
		padding: 0.2rem 0;
		font-size: 0.15rem;
		color: #333;
		border-bottom: 1px solid #fff;
		line-height: 0.2rem;
	}

	.taxlist .left .lia {
		text-align: center;
		padding: 0.08rem 0;
		font-size: 0.12rem;
		color: #516eea;
		line-height: 0.2rem;
		border-bottom: 1px solid #fff;
	}

	/*right*/
	.taxlist .right {
		background-color: #fff;
		width: 68%;
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

	.taxlist .right .con {
		padding: 0.18rem 0 0.5rem 0.28rem;
	}

	.taxlist .right .text {
		font-size: 0.14rem;
		color: #333;
		line-height: 0.36rem;
		font-weight: 600;
	}
</style>
