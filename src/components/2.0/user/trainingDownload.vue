<template>
	<div class="train_download">
		<!-- <div class="tit">2019国家级继续教育项目：脑出血神经内镜高级研修班</div>
		<div class="td_con">
			<div class="td_item" v-for="(item, index) in data" :key="index">
				<img src="../../../../static/img/2.0/user/train_download01.png" alt="" class="img-w18">
				<span class="fs-15 lh-24 fles-1">{{item.content}}</span>
				<span class="dow_btn">下载</span>
			</div>
		</div> -->
		<div class="td_con">
			<a href="javascript:;" v-for="(item, index) in list" :key="index">
				<img v-lazy="('http://m.apftown.com/imgs/20190328/q/' + item)" alt="" class="item-pic" v-preview="('http://m.apftown.com/imgs/20190328/' + item)" preview-title-enable="true" preview-nav-enable="true">
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: [
					'258A3880.jpg',	'258A3886.jpg',	'258A3888.jpg',	'258A3889.jpg',	'258A3897.jpg',
					'258A3913.jpg',	'258A3929.jpg',	'258A3932.jpg',	'258A3936.jpg',	'258A3938.jpg',
					'258A3950.jpg',	'258A3962.jpg',	'258A3967.jpg',	'258A3968.jpg',	'258A3970.jpg',
					'258A3972.jpg',	'258A3975.jpg',	'258A3978.jpg',	'258A3983.jpg',	'258A3985.jpg',
					'258A3989.jpg',	'258A3994.jpg',	'258A4001.jpg',	'258A4006.jpg',	'258A4007.jpg',
					'258A4009.jpg',	'258A4010.jpg',	'258A4012.jpg',	'258A4014.jpg',	'258A4015.jpg',
					'258A4019.jpg',	'258A4021.jpg',	'258A4022.jpg',	'258A4025.jpg',	'258A4027.jpg',
					'258A4029.jpg',	'258A4031.jpg',	'258A4034.jpg',	'258A4040.jpg',	'258A4046.jpg',
					'258A4053.jpg',	'258A4055.jpg',	'258A4060.jpg',	'258A4062.jpg',	'258A4065.jpg',
					'258A4089.jpg',	'258A4094.jpg',	'258A4096.jpg',	'258A4098.jpg',	'258A4102.jpg',
					'258A4108.jpg',	'258A4115.jpg',	'258A4117.jpg',	'258A4118.jpg',	'258A4123.jpg',
					'258A4125.jpg',	'258A4128.jpg',	'258A4129.jpg',	'258A4131.jpg',	'258A4132.jpg',
					'258A4134.jpg',	'258A4137.jpg',	'258A4142.jpg',	'258A4143.jpg',
					'258A4144.jpg',	'258A4148.jpg',	'258A4151.jpg',	'258A4152.jpg',	'258A4155.jpg',
					'258A4156.jpg',	'258A4158.jpg',	'258A4159.jpg',	'258A4160.jpg',	'258A4162.jpg',
					'258A4165.jpg',	'258A4168.jpg',	'258A4172.jpg',	'258A4175.jpg',	'258A4176.jpg',
					'258A4177.jpg',	'258A4179.jpg',	'258A4181.jpg',	'258A4182.jpg',	'258A4183.jpg',
					'258A4187.jpg',	'258A4188.jpg',	'258A4189.jpg',	'258A4195.jpg',	'258A4197.jpg',
					'258A4199.jpg',	'258A4201.jpg',	'258A4202.jpg',	'258A4206.jpg',	'258A4216.jpg',
					'258A4217.jpg',	'258A4224.jpg',	'258A4231.jpg',	'258A4235.jpg',	'258A4243.jpg',
					'258A4255.jpg',	'258A4265.jpg',	'258A4267.jpg',	'258A4274.jpg',	'258A4275.jpg',
					'258A4278.jpg',	'258A4281.jpg',	'258A4283.jpg',	'258A4287.jpg',	'258A4290.jpg',
					'258A4296.jpg',	'258A4304.jpg',	'258A4318.jpg',	'258A4325.jpg',	'258A4330.jpg',
					'258A4334.jpg',	'258A4339.jpg',	'258A4340.jpg',	'258A4341.jpg',	'258A4344.jpg',
					'258A4345.jpg',	'258A4347.jpg',	'258A4348.jpg',	'258A4352.jpg',	'258A4355.jpg',
					'258A4365.jpg',	'258A4369.jpg',	'258A4372.jpg',	'258A4373.jpg',	
					'258A4378.jpg',	'258A4383.jpg',	'258A4385.jpg',	'258A4386.jpg',	'258A4389.jpg',
					'258A4398.jpg',	'258A4399.jpg',	'258A4402.jpg',	'258A4403.jpg',	'258A4404.jpg',
					'258A4405.jpg',	'258A4411.jpg',	'258A4416.jpg',	'258A4417.jpg',	'258A4426.jpg',
					'258A4477.jpg',	'258A4479.jpg',	'258A4480.jpg',	'258A4483.jpg',	'258A4485.jpg',
					'258A4487.jpg',	'258A4491.jpg',	'258A4492.jpg',	'258A4494.jpg',	'258A4496.jpg',
					'258A4497.jpg',	'258A4498.jpg',	'258A4500.jpg',	'258A4501.jpg',	'258A4502.jpg',
					'258A4503.jpg',	'258A4504.jpg',	'258A4505.jpg',	'258A4507.jpg',	'258A4511.jpg',	
					'258A4512.jpg',	'258A4515.jpg',	'258A4517.jpg',	'258A4518.jpg',	'258A4520.jpg',	
					'258A4522.jpg',	'258A4527.jpg',	'258A4529.jpg',	'258A4530.jpg',	'258A4531.jpg',	
					'258A4538.jpg',	'258A4541.jpg',	'258A4543.jpg',	'258A4545.jpg',	'258A4546.jpg',	
					'258A4547.jpg',	'258A4550.jpg',	'258A4551.jpg',	'258A4552.jpg',	'258A4553.jpg',	
					'258A4554.jpg',	'258A4555.jpg',	'258A4556.jpg',	'258A4557.jpg',	'258A4558.jpg',	
					'258A4559.jpg','258A4560.jpg',	'258A4561.jpg',	'258A4562.jpg',	'258A4563.jpg',	
					'258A4564.jpg',	'258A4565.jpg',	'258A4566.jpg',	'258A4567.jpg',	'258A4568.jpg',	
					'258A4569.jpg',	'258A4570.jpg',
				],
			}
		},
	}
</script>

<style>
	@import url("../../../assets/css/town2.0.css");

	.train_download .img-w18 {
		width: .18rem;
		height: .18rem;
		margin-right: .1rem;
	}

	.train_download {
		width: 100%;
		/* padding: 0 .13rem; */
		color: #333;
	}

	/* .train_download .tit {
		font-size: .12rem;
		text-align: center;
		margin: .15rem 0;
		font-weight: bold;
	} */

	.train_download .td_con {
		width: 100%;
		background-color: #fff;
		padding: .1rem;
		/* border-radius: .05rem; */
		
	}
	
	.train_download .td_con .item-pic {
		width: 50%;
		border: .1rem solid #fff;
	}
	
/* 	.train_download .td_item {
		padding: .2rem 0;
		border-bottom: 1px solid #dcdcdc;
		display: flex;
		align-items: center;
	}

	.train_download .td_item:last-child {
		border: none;
	}

	.train_download .td_item .dow_btn {
		width: .44rem;
		height: .24rem;
		background-image: linear-gradient(0deg,
			#556fb5 0%,
			#00b7ee 100%),
			linear-gradient(#f1a200,
			#f1a200);
		border-radius: .12rem;
		font-size: .12rem;
		color: #fff;
		text-align: center;
		line-height: .24rem;
		margin-left: .13rem;
	} */
</style>
