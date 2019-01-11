<template>
	<div class="tc706 tc tc7">
		<tax-head7 :path="path"></tax-head7>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-5">
					<span class="fw-6 fs-36 mb-5">人员信息采集</span><br>
					<span class="fw-6 fs-30">业务含义</span><br>
					扣缴客户端，用于扣缴义务人为个人代扣代缴个人所得税。按照相关法律规定，为个人代扣代缴税款时需要明细申报，即申报的税款必须具体到每个人。<br>
					因此，在进行个税申报前，需要把人员信息添加到软件中，再进行人员信息报送局端。需要添加的人员主要是本单位的在职员工。需要申报的个税通常是工资薪金、年终奖等。当然也包括劳务报酬、稿酬所得等其他个税扣缴。<br>
					人员信息采集的信息，主要针对的是《个人所得税基础信息表（A、B表）》，需要登记的相关信息见下图
				</div>
				<p class="mb-5"><img src="../../../static/img/taxation/content/7/7-2-1.png" alt="" class="w100"></p>
				<div class="mb-30">
					<span class="fw-6">证照类型</span><br>
					境内职员，通常用【身份证】登记人员信息。特殊人群也可以使用军官证、士兵证、武警警官证、中国护照等。<br>
					<span class="fw-6">证照号码</span><br>
					根据所选证照类型填写正确证照号码。如用身份证登记，身份证号码必须是正确18位号码。<br>
					<span class="fw-6">姓名</span><br>
					请严格按照证件上真实姓名填写。写错姓名，会给员工未来带来一定麻烦，如将来无法打印完税证明等。<br>
					<span class="fw-6">性别/出生年月</span><br>
					如使用身份证会自动根据身份证信息带出，用户可不填。<br>
					<span class="fw-6">是否雇员</span><br>
					与单位存在任职受雇关系人员，填写【是】；否则填写【否】。<br>
					雇员一般需要申报工资薪金所得，非雇员申报劳务报酬所得等。<br>
					<span class="fw-6">国籍（地区）</span><br>
					境内人员，国籍只能填写【中国】。<br>
					<span class="fw-6">手机号码</span><br>
					填写纳税人11位电话号码。<br>
					<span class="fw-6">人员状态</span><br>
					可选【正常】或【非正常】。正常，表示在职人员，需为其申报个税。非正常，表示离职人员。员工离职后，可把状态改成【非正常】，填写申报表时，【非正常】不需申报。<br>
					<span class="fw-6">是否股东、投资者</span><br>
					若是扣缴单位自然人股东、投资者，则选择【是】，不选择默认为【否】。<br>
					<span class="fw-6">是否特定行业</span><br>
					特定行业是指采掘业、远洋运输业、远洋捕捞业。若存在则填写【是】，特定行业可享受月4800元的减除费用。<br>
					<span class="fw-6">纳税人识别号</span><br>
					纳税人完成税务登记后，税务机关所赋予的纳税人识别号，不可填。<br>
					<span class="fw-6">任职受雇日期</span><br>
					当【人员状态】为“正常”且【是否雇员】为“是”时必填。<br>
					<span class="fw-6">离职日期</span><br>
					当【人员状态】为“非正常”且【是否雇员】为“是”时必填。<br>
					<span class="fw-6">其他相关情况</span><br>
					有本项所列情况的，进行勾选并且补充证照号码。<br>
					· 工号—为员工在单位员工编号，不允许重复。<br>
					· 学历—下拉进行选择对应学历。<br>
					· 职业—可以进行联想模糊搜索匹配<br>
					· 电子邮箱—若是雇员则填电子邮箱。<br>
					· 开户银行—选择纳税人银行账号对应的开户银行。<br>
					· 银行账号—填写对应的银行账号。<br>
					· 居住地址/户籍所在地—下拉项选择后，进行详细地址补充。<br>
					<span class="fw-6">温馨提醒</span><br>
					人员信息采集信息中，带"*"号的都是必填信息，其他非必填信息，用户可以根据实际情况选填。
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
				path: '/taxation/t707',
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
