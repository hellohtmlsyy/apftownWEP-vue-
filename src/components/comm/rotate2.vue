<template>
	<div>
		<div class="g-content">
			<div class="g-lottery-case">
				<div class="g-left">
					<h2>您已拥有<span class="playnum">{{playnum}}</span>次抽奖机会，点击立刻抽奖！</h2>
					<div class="g-lottery-box">
						<img src="../../../static/img/rotate/bg-lottery.png" alt="" class="g-lottery-img" style="margin-top: 20px;">
						<a class="playbtn" href="javascript:;" title="开始抽奖" @click="startRaffle()"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	import '../../../static/js/jQueryRotate.js'
	var $btn = $('.g-lottery-img'); // 旋转的div
	export default {
		data() {
			return {
				playnum: 5,//初始次数，由后台传入
				isture: 0,//是否正在抽奖
			}
		},
		methods:{
			startRaffle(){
				if (this.isture) return; // 如果在执行就退出
				this.isture = true; // 标志为 在执行
				if (this.playnum <= 0) { //当抽奖次数为0的时候执行
					alert("没有次数了");
					this.playnum = 0; //次数显示为0
					this.isture = false;
				} else { //还有次数就执行
					this.playnum = this.playnum - 1; //执行转盘了则次数减1
					if (this.playnum <= 0) {
						this.playnum = 0;
					}
					this.playnum = this.playnum;
					this.clickfunc()
				}
			},
			clickfunc(){
				var data = [1,2,3,4,5,6]; //抽奖
				data = data[Math.floor(Math.random()*data.length)]; //1~6的随机数
				console.log(data)
				switch (data) {
					case 1:
						this.rotateFunc(1, 0, '恭喜您获得2000元理财金');
						break;
					case 2:
						this.rotateFunc(2, 0, '恭喜您获得2000元理财金2');
						break;	
					case 3:
						this.rotateFunc(3, 0, '恭喜您获得2000元理财金3');
						break;	
					case 4:
						this.rotateFunc(4, -60, '谢谢参与4');
						break;
					case 5:
						this.rotateFunc(5, 120, '谢谢参与5');
						break;
					case 6:
						this.rotateFunc(6, 120, '谢谢参与6');
						break;
				}
			},
			rotateFunc(awards, angle, text){
				this.isture = true;
				var _this = this;
				$btn.stopRotate();
				$btn.rotate({
					angle: 0,//旋转的角度数
					duration: 4000, //旋转时间
					animateTo: angle + 1440, //给定的角度，根据得出来得出来的结果加上1440度旋转
					callback: _this.rotateCallback(text)
				})
			},
			rotateCallback(text){
				this.isture = false;
				alert(text)
			}
		}
	}
</script>
<style>
	.g-content {
		width: 100%;
		background: #fbe3cc;
		height: auto;
		font-family: "微软雅黑", "microsoft yahei";
	}

	.g-content .g-lottery-case {
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
	}

	.g-content .g-lottery-case .g-left h2 {
		font-size: 20px;
		line-height: 32px;
		text-align: center;
	}

	.g-lottery-box {
		width: 100%;
		height: 400px;
		position: relative;
		text-align: center;
	}
	
	.g-lottery-box .playbtn {
		width: 186px;
		height: 186px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -94px;
		margin-top: -94px;
		background: url(../../../static/img/rotate/playbtn.png) no-repeat;
	}
</style>
