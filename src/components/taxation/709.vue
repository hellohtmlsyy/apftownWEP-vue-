<template>
	<div class="tc709 tc tc7">
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/7-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">个人所得税申报流程</div>
				<div class="fs-22">自然人税收管理系统扣缴客户端用户操作流程</div>
			</div>
		</div>
		<div class="content col-333">
			<div class="fs-24 lh-24">
				<div class="mb-30">
					<span class="fw-6 fs-30">人员报送登记</span><br>
					人员信息登记完毕后，需要点击【报送】或【获取反馈】将人员信息报送及获取身份验证结果，获取身份验证结果后继续办理后续业务。
				</div>
				<div class="mb-30">
					<span class="fw-6">报送</span><br>
					软件中的报送登记功能，将【报送状态】为“待报送”的人员信息报送至税局端并获取反馈，才能进行扣缴申报。<br>
					<span class="fw-6">获取反馈</span><br>
					报送成功后，局端将验证居民身份证件（其他类型证件验证会陆续增加），用户可点击【获取反馈】按钮获取该人员信息身份验证状态：<br>
					· 身份验证状态为“验证通过”，用户可进行下一步操作。<br>
					· 身份验证状态为“验证中”，验证后，系统会自动获取到验证结果，无需用户进行另外操作。<br>
					· 身份验证状态为“暂不验证”，即针对护照等外籍证件，其他无第三方数据验证证件的验证状态。<br>
					· 身份验证状态为“验证不通过”的员工，不影响用户业务办理，但根据政策要求，需用户自行核对和修正错误信息，如已影响到扣缴明细申报准确性的，请用户注意办理更正申报。<br>
					注：若该人员信息无报送记录且状态为“非正常人员”（即离退人员）人员无需进行报送。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
