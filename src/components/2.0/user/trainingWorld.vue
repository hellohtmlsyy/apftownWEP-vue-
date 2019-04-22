<template>
	<div class="train_world">
		<div class="tw_con">
			<div class="tw_item" v-for="(item, index) in data" :key="index" @click="toDetail()">
				<div class="left bgcolor03">
					<img :src="item.imgsrc" alt="照片" class="img-w32"><br />
					<span>照片</span>
				</div>
				<div class="fles-1 fs-18 fw-7">{{item.content}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{ type: 1, content: '中国人民解放军总医院2019神经内镜高级研修班', imgsrc: '../../../../static/img/2.0/user/train_world03.png' },
				],
			}
		},
		methods: {
			toDetail() {
				location.href = this.$root.urlPath.M_APF + '/user/trainingDownload';
			}
		}
	}
</script>

<style>
	@import url("../../../assets/css/town2.0.css");

	.train_world .img-w32 {
		width: .32rem;
		height: .32rem;
		margin-bottom: 0.05rem;
	}
	
	.train_world .tw_item .bgcolor01 {
		background-image: linear-gradient(0deg,
			#556fb5 0%,
			#00b7ee 100%),
			linear-gradient(#f1a200,
			#f1a200);
	}
	
	.train_world .tw_item .bgcolor02 {
		background-image: linear-gradient(0deg, 
			#21ac38 0%, 
			#9fdb21 100%), 
			linear-gradient(#f1a200, 
			#f1a200);
	}
	
	.train_world .tw_item .bgcolor03 {
		background-image: linear-gradient(0deg, 
			#e4007f 0%, 
			#eb6100 100%), 
			linear-gradient(#f1a200, 
			#f1a200);
	}
	
	.train_world {
		width: 100%;
		padding: 0 .13rem;
		color: #333;
	}

	.train_world .tw_item {
		height: .9rem;
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: .05rem;
		margin-top: .15rem;
		padding-right: .1rem;
	}

	.train_world .tw_item .left {
		width: .675rem;
		height: .675rem;
		margin-left: .15rem;
		margin-right: .1rem;
		padding: .09rem;
		text-align: center;
		font-size: .12rem;
		color: #fff;
	}
</style>
