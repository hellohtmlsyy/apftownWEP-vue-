<template>
	<div class="tc716 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">外籍人员数月奖金</span><br>
					<span class="fw-6">业务简介</span><br>
					根据国税发[1996]183号《国家税务总局关于在中国境内无住所的个人取得奖金征税问题的通知》相关规定，对在中国境内无住所的个人一次取得数月奖金或年终加薪，劳动分红，可单独作为一个月工资，薪金所得计算纳税。<br>
					外籍人数月奖金所得，即适用于无住所个人一次性取得的相关奖金。
				</div>
				<div class="mb-5">
					<span class="fw-6">相关项业务含义</span><br>
					在扣缴报告表主页面，点击【外籍人员数月】或右边的【填写】按钮，进入外籍人员数月奖金界面。点击界面【添加】按钮，打开编辑界面，对界面的相关业务属性进行逐个说明
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-14.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">当月取得数月奖金额</span><br>
					当月给无住所个人发放的数月奖金。<br>
					<span class="fw-6">免税所得</span><br>
					《中华人民共和国个人所得税法》第四条规定了免税所得的范围，详见跟随式帮助。<br>
					<span class="fw-6">实际捐赠额</span><br>
					根据《税法》及《实施条例》规定，个人将其所得通过中国境内的社会团体、国家机关向教育和其他社会公益事业以及遭受严重自然灾害地区、贫困地区的捐赠。捐赠额未超过纳税义务人申报的应纳税所得额30%的部分，可以从其应纳税所得额中扣除。根据财税[2004]172号，过宋庆龄基金会、中国福利会、中国残疾人福利基金会、中国扶贫基金会、中国煤矿尘肺病治疗基金会、中华环境保护基金会用于公益救济性的捐赠，准予在缴纳企业所得税和个人所得税前全额扣除。<br>
					<span class="fw-6">准予列支的捐赠比例</span><br>
					适用于不超过应纳税所得额30%部分的捐赠，捐赠比例选择0.3；适用于全额扣除的捐赠，捐赠比例选择1.0；当两种捐赠形式都存在，捐赠比例选择“混合”。<br>
					<span class="fw-6">准予扣除的捐赠额</span><br>
					当捐赠比例为0.3、1.0时，准予扣除捐赠额由系统自动计算；当捐赠比例为“混合”时，请自行填写数值。填写金额不能大于实际捐赠额。<br>
					<span class="fw-6">应纳税所得额、税率、速算扣除数、应纳税额</span><br>
					由系统根据公式自动计算，不允许修改。<br>
					<span class="fw-6">减免税额</span><br>
					填写根据税法第四条、第五条规定可以减免的税额。<br>
					第四条——下列各项个人所得，免纳个人所得税<br>
					一、省级人民政府、国务院部委和中国人民解放军军以上单位，以及外国组织、国际组织颁发的科学、教育、技术、文化、卫生、体育、环境保护等方面的奖金；二、国债和国家发行的金融债券利息；三、按照国家统一规定发给的补贴、津贴；四、福利费、抚恤金、救济金；五、保险赔款；六、军人的转业费、复员费；七、按照国家统一规定发给干部、职工的安家费、退职费、退休工资、离休工资、离休生活补助费；八、依照我国有关法律规定应予免税的各国驻华使馆、领事馆的外交代表、领事官员和其他人员的所得；九、中国政府参加的国际公约、签订的协议中规定免税的所得；十、经国务院财政部门批准免税的所得。<br>
					第五条———有下列情形之一的，经批准可以减征个人所得税<br>
					一、残疾、孤老人员和烈属的所得；二、因严重自然灾害造成重大损失的；三、其他经国务院财政部门批准减税的。<br>
					<span class="fw-6">应扣缴税额</span><br>
					根据公式自动计算。<br>
					<span class="fw-6">已扣缴税额</span><br>
					无需填写。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { wxShare } from '@/assets/commonjs/util.js';
	export default{
		data(){
			return {
				path: '/taxation/t718',
				url: window.location.href,
			}
		},
		mounted() {
			//wx-share
			var title = '亚太金融小镇基金税务流程及服务';
			var imgUrl = 'http://m.apftown.com/static/img/act/wx_share.jpg';
			var desc = '一键了解入驻自贸港基金所需办理税务流程与后续全方位服务';
			var golink = window.location.href;
			wxShare(this.$root.urlPath.NEW + '/wx/share',this.url,title,imgUrl,desc,golink);
		},
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
