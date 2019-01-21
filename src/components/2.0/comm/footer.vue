<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
			<mt-tab-item id="tab1">
				<img slot="icon" src="../../../../static/img/2.0/footer-1.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="tab2">
				<img slot="icon" src="../../../../static/img/2.0/footer-2.png">
				简介
			</mt-tab-item>
			<mt-tab-item id="tab3">
				<img slot="icon" src="../../../../static/img/2.0/footer-3.png">
				服务
			</mt-tab-item>
			<mt-tab-item id="tab4">
				<img slot="icon" src="../../../../static/img/2.0/footer-4.png">
				我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'c-footer',
		data() {
			return {
				selected: 1,
			};
		}
	}
</script>

<style>

</style>
