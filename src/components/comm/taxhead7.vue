<template>
	<div class="tc">
		<router-link :to="{ path: '/taxation/list' }" class="nav"><img src="../../../static/img/taxation/nav.png" alt=""></router-link>
		<a :href="path" class="next"><img src="../../../static/img/taxation/next.png" alt=""></a>
		<div class="title dis-flex">
			<div><img src="../../../static/img/taxation/content/7-1.png" class="tit-img" /> </div>
			<div class="col-fff">
				<div class="Btit">个人所得税申报流程</div>
				<div class="fs-22">自然人税收管理系统扣缴客户端用户操作流程</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'tax-head7',
		props: ['path'],
	}
</script>

<style>
	@import url('../../../static/css/taxation.css');
</style>
