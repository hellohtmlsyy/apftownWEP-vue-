<template>
  <div id="app">
    <router-view/>
		 <lg-preview></lg-preview>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	@import url("../static/css/reset.css");
	#app{
		margin: 0;
		padding: 0;
	}
</style>
