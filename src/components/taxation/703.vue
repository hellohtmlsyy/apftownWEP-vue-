<template>
	<div class="tc701 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-12 lh-24">
				<div class="mb-5">
					<span class="fs-15 fw-6">系统初始化</span><br>
					安装完成后，首先需要进行系统初始化注册。初始化注册，即通过税号从税局网络上获取最新企业信息，保存到本地客户端。软件安装完成后，点击界面上【立即体验】按钮（或点击桌面“自然人税收管理系统扣缴客户端”快捷方式），进入注册流程（5个步骤）。
					<br><br>
					<span class="fw-6">第一步：录入单位信息</span><br>
					在[纳税人识别号]/[确认纳税人识别号]的位置输入单位税号，已经三证合一的单位输入社会信用代码，点击【下一步】按钮即可。<br>
					<span class="fs-11">注意事项　注册时必须确保电脑处于联网状态</span>
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-1-2.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">第二步：获取办税信息</span><br>
					本步骤无需人工干预，相关界面数据是由税局直接下发，供参考
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-1-3.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">第三步：备案办税人员信息</span><br>
					根据税总发[2016]111号《国家税务总局关于推行实名办税的意见》，要求办税人员真实填写姓名、手机号、岗位等信息。本步骤是对办税人员信息在税局进行备案，请按要求真实填写。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-1-4.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">第四步：设置登录密码</span><br>
					为了你的数据安全，建议“启用登录密码”，并牢记登录密码
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-1-5.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">第五步：设置数据自动备份</span><br>
					扣缴客户端数据保存在电脑本地。为防止本地数据丢失，建议启用自动备份功能。<br>
					<div class="fs-11">
						<span class="fw-6">注意事项</span><br>
						· 设置“启动自动备份”，每次退出软件时，都自动备份数据<br>
						· 设置“自动备份前提醒”，每次退出软件时，都会弹出是否需要备份提示，自行选择是否备份<br>
						· 设置备份路径。建议不要放在系统盘<br>
						· 可根据硬盘容量，选择保留备份数据份数。当系统中自动备份数据份数到达设定份数时，自动删除早期数据。建议把需要永久保存数据，转移到电脑其他位置<br>
						· 可在系统设置>系统管理>备份恢复>自动备份页签中修改备份相关内容
					</div>
				</div>
				<p class="mb-30"><img src="../../../static/img/taxation/content/7/7-1-6.png" alt="" class="w100"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		wxShare
	} from '@/assets/commonjs/util.js';
	export default {
		data() {
			return {
				path: '/taxation/t704',
				url: window.location.href,
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share', this.url, title, imgUrl, desc, golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
