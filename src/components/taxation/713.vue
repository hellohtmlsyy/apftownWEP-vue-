<template>
	<div class="tc712 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-36">报表填写</span><br>
					此功能，是扣缴客户端核心功能模块，四大主体流程之一。<br>
					人员信息采集完成之后，需要为纳税人填写申报数据。本页面主要介绍数据填写相关业务和功能。<br>
					扣缴客户端最核心的申报表是《扣缴个人所得税报告表》，另外也包括《限售股转让所得报告表》和《特定行业工资薪金报告表》。
				</div>
				<div class="mb-5">
					<span class="fw-6 fs-30">扣缴个人所得税报告表</span><br>
					《中华人民共和国个人所得税法》第二条规定了十一类所得需要交纳个人所得税。除“个体工商户的生产、经营所得”和“对企事业单位的承包经营、承租经营所得”外，其他九类所得均属于代扣代缴的范围，即这九类所得都可以在本《扣缴个人所得税报告表》中进行代扣代缴申报。<br>
					九类分别是<br>
					一、工资、薪金所得<br>
					二、劳务报酬所得<br>
					三、稿酬所得<br>
					四、特许权使用费所得<br>
					五、利息、股息、红利所得<br>
					六、财产租赁所得<br>
					七、财产转让所得<br>
					八、偶然所得<br>
					九、经国务院财政部门确定征税的其他所得。<br>
					这九类所得中，大部分用户都只需要填写工资薪金所得中《正常工资薪金》；企业有外籍员工的需要填写《外籍人正常工资薪金》；年终会填写《全年一次性奖金》。部分企业也会填写《劳务报酬》所得。因此，软件默认只展示了这四个常用的所得。若在日常工作中存在其他所得需要申报，请点击【管理表单】按钮，勾选其他所得，即可展示在界面上。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-1.png" alt="" class="w100"></p>
				<div class="mb-5">
					<span class="fw-6">功能简介</span><br>
					个税所得填写方式基本类似。本章节简要描述通用软件功能操作。下文详细介绍各类所得业务。<br>
					点击软件左边菜单报表填写>扣缴所得税报告表>正常工资薪金进入正常工资薪金界面，如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-2.png" alt="" class="w100"></p>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-3.png" alt="" class="w100"></p>
				<div class="mb-5">
					在扣缴个人所得税报告表首页，点击任意一个表单名称和【填写】按钮，都可以直接进入报表的填写界面。<br>
					<span class="fw-6">数据填写及导入</span><br>
					数据填写方式，与【人员信息采集】功能类似。可单个人员添加，也可批量导入。员工数据较少单位，可选择单个人员薪资数据录入。点击【添加】按钮，在弹出界面，选择人员、填写【收入额】、“三险一金”等信息后，点击【保存】按钮即可。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-4.png" alt="" class="w100"></p>
				<div class="mb-5">
					员工数量较多的单位，建议用批量导入功能。点击界面【导入】按钮，下拉选择中可以点击【模板下载】，从软件中下载标准导入模板。然后把收入数据填写到Excel模板，再点击【导入】-【导入数据】-【标准模板导入】-选择填写好的数据--【导入】即可。<br>
					示例数据中，第一行是软件对应标题行；第二行是Excel标题行。若使用软件提供标准模板导入，软件会自动匹配标题行。若使用其他模板导入，标题行无法自动匹配时，用户需要点击第一行下拉选择，手工匹配到正确标题行即可。如下图
				</div>
				<p class="mb-5 tac"><img src="../../../static/img/taxation/content/7/7-3-5.png" alt="" class="img-w273"></p>
				<div class="mb-5">
					<span class="fw-6">数据编辑</span><br>
					对于已填写的数据，软件提供多种方式可修改错误数据。<br>
					· 在列表上，直接修改对应数据即可修改后自动保存。如下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-6.png" alt="" class="w100"></p>
				<div class="mb-5">
					· 可以双击需要修改的数据，打开明细界面修改。<br>
					· 可以选中需要修改的数据，点击【修改】按钮修改。<br>
					·
					点击【更多操作】-【批量修改】按钮，可以对数据进行批量修改。该功能适用于所有用户金额都相同、而需要调整金额的情况。比如由于养老保险基数调整，所有用户基本养老保险费，需要在原来的基础上加15元，就可以通过【批量修改】功能来实现。
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-3-7.png" alt="" class="w100"></p>
				<div class="mb-30">
					· 对于不需要的数据，可以选中该数据点击【删除】按钮来删除。<br>
					其他查询及更多操作，与【人员信息采集】类似，此处不再阐述。
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
				path: '/taxation/t714',
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

	.img-w273 {
		width: 2.73rem;
	}
</style>
