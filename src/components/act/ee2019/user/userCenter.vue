<template>
  <div class="ee_userCenter">
    <div class="top"><img src="../../../../../static/img/act/ee2019/user/bg-top.png" alt="" class="img-w100"></div>
    <div class="content">
      <div class="tab">
        <div class="tabBox">
          <div class="tab-item" @click="toDetail('/ee2019/tickets')">
            <img src="../../../../../static/img/act/ee2019/user/icon-1 (1).png" alt="我的入场券" class="img-w40">
            <p class="col-000 fs-15">我的入场券</p>
          </div>
          <div class="tab-item" @click="toDetail('/ee2019/businessCard')">
            <img src="../../../../../static/img/act/ee2019/user/icon-1 (2).png" alt="我的名片" class="img-w40">
            <p class="col-000 fs-15">我的名片</p>
          </div>
          <span class="line"></span>
        </div>
      </div>

      <div class="iBox clearfix" v-for="(item, index) in itemDate" :key="index" @click="toDetail(item.detUrl)">
        <div class="left"><img :src="item.icon" alt="" class="img-w20"></div>
        <div class="clearfix">
          <span class="fl">{{item.text}}</span>
          <div class="fr"><img src="../../../../../static/img/2.0/user/right.png" alt="" class="img-w8"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemDate: [{
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (3).png',
						text: '我的企业',
						detUrl: '/ee2019/enterprise',
					},
					{
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (4).png',
						text: '我的关注',
						detUrl: '/ee2019/follow',
					},
					{
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (5).png',
						text: '留言箱',
						detUrl: '/ee2019/messageBox',
					},
					{
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (6).png',
						text: '参会企业',
						detUrl: '/ee2019/participatingEnterprises',
					},
					{
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (7).png',
						text: '大会日程',
						detUrl: '/ee2019/agenda',
          },
          {
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (8).png',
						text: '会场信息',
						detUrl: '/ee2019/venueInfo',
          },
          {
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (9).png',
						text: '小镇地图',
						detUrl: '',
          },
          {
						icon: '../../../../../static/img/act/ee2019/user/icon-1 (10).png',
						text: '联系我们',
						detUrl: '/ee2019/contactUs',
					},
				],
    }
  },
  methods: {
    toDetail(url) {
      location.href = this.$root.urlPath.M_APF + url;
    },
  },
}
</script>
<style>
  .ee_userCenter .img-w8 {
		width: .08rem;
		height: .14rem;
		margin-left: .15rem;
	}

	.ee_userCenter .img-w20 {
		width: .2rem;
    height: .16rem;
		margin-top: -0.01rem;
	}

  .ee_userCenter .img-w40 {
    width: .4rem;
    height: .4rem;
    margin-bottom: .04rem;
  }

  .ee_userCenter .content {
    background-color: #eee;
  }

  .ee_userCenter .content .tab {
    padding: 0 .15rem;
    margin-bottom: .08rem;
  }

  .ee_userCenter .tabBox {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    box-shadow: 1px 1px .04rem 1px rgba(160, 160, 160, 0.5);
    border-radius: .05rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    position: relative;
    margin-top: -.08rem;
  }

  .ee_userCenter .tabBox .line {
    width: 1px;
    height: .8rem;
    background-color: #e5e5e5;
    position: absolute;
    left: 50%;
    top: .1rem;
  }

/* item列表项 */
	.ee_userCenter .iBox {
		background-color: #fff;
		height: .5rem;
		line-height: .5rem;
		padding-left: .55rem;
		font-size: .15rem;
    position: relative;
    color: #040a16;
	}

	.ee_userCenter .iBox .left {
		position: absolute;
		left: .25rem;
		top: 0;
	}

	.ee_userCenter .iBox:nth-child(4) {
    margin-bottom: .09rem;
	}

	.ee_userCenter .iBox .clearfix {
		border-bottom: 1px solid #e3e3e3;
		padding-right: .18rem;
		height: .5rem;
	}

	.ee_userCenter .iBox:first-child .clearfix,
  .ee_userCenter .iBox:last-child .clearfix,
  .ee_userCenter .iBox:nth-child(4) .clearfix {
		border: none;
	}
</style>
