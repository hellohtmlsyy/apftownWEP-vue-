import Vue from 'vue'
import Router from 'vue-router'
import { getCookie, } from '@/assets/commonjs/util.js';
import Axios from 'axios';
let url = 'http://memberapi.apftown.com:8070'
import Home from '@/components/Home/Home'

//act20180808  海南项目优质对接会
import Act2018080801 from '@/components/act/20180808/01'
import Act2018080802 from '@/components/act/20180808/02'
import Act2018080803 from '@/components/act/20180808/03'
import Act2018080804 from '@/components/act/20180808/04'
import Act2018080805 from '@/components/act/20180808/05'

//act20180818  金融周
import Act2018081801 from '@/components/act/20180818/01'
import Act2018081802 from '@/components/act/20180818/02'
import Act2018081803 from '@/components/act/20180818/03'
import Act2018081804 from '@/components/act/20180818/04'
import Act2018081805 from '@/components/act/20180818/05'
import Act2018081806 from '@/components/act/20180818/06'
import Act2018081807 from '@/components/act/20180818/07'

//act20180818 清华培训act2018100801
import Act2018100801 from '@/components/act/20181008/01'
import Act2018100802 from '@/components/act/20181008/02'
import Act2018100803 from '@/components/act/20181008/03'
import Act2018100804 from '@/components/act/20181008/04'
import Act2018100805 from '@/components/act/20181008/05'
import Act2018100806 from '@/components/act/20181008/06'

//act20181031 民宿报名act2018103101
import Act2018103101 from '@/components/act/20181031/01'
import Act2018103102 from '@/components/act/20181031/02'
import Act2018103103 from '@/components/act/20181031/03'
import Act2018103104 from '@/components/act/20181031/04'
import Act2018103105 from '@/components/act/20181031/05'
import Act2018103106 from '@/components/act/20181031/06'
import Act2018103107 from '@/components/act/20181031/07'

//act20181212 小镇推广20181212
// import Act2018121201 from '@/components/act/20181212/01'

import Rotate from '@/components/comm/rotate';//转盘

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { title: '亚太金融小镇' }
        },
		//转盘
		{
			path: '/rotate',
			name: 'rotate',
			component: Rotate,
		},
        //海南项目优质对接会
        {
            path: '/act/act2018080801',
            name: 'act.act2018080801',
            component: Act2018080801,
            meta: { title: '2018海南优质项目对接会' }
        },
        {
            path: '/act/act2018080802',
            name: 'act.act2018080802',
            component: Act2018080802,
            meta: { title: '2018海南优质项目对接会' }
        },
        {
            path: '/act/act2018080803',
            name: 'act.act2018080803',
            component: Act2018080803,
            meta: { title: '2018海南优质项目对接会' }
        },
        {
            path: '/act/act2018080804',
            name: 'act.act2018080804',
            component: Act2018080804,
            meta: { title: '2018海南优质项目对接会' }
        },
        {
            path: '/act/act2018080805',
            name: 'act.act2018080805',
            component: Act2018080805,
            meta: { title: '2018海南优质项目对接会' }
        },
        //20180818金融周
        {
            path: '/act/act2018081801',
            name: 'act.act2018081801',
            component: Act2018081801,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081802',
            name: 'act.act2018081802',
            component: Act2018081802,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081803',
            name: 'act.act2018081803',
            component: Act2018081803,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081804',
            name: 'act.act2018081804',
            component: Act2018081804,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081805',
            name: 'act.act2018081805',
            component: Act2018081805,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081806',
            name: 'act.act2018081806',
            component: Act2018081806,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        {
            path: '/act/act2018081807',
            name: 'act.act2018081807',
            component: Act2018081807,
            meta: { title: '2019三亚国际金融周-亚太金融小镇' }
        },
        //清华培训act2018100801
        {
            path: '/act/act2018100801',
            name: 'act.act2018100801',
            component: Act2018100801,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' }
        },
        {
            path: '/act/act2018100802',
            name: 'act.act2018100802',
            component: Act2018100802,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' }
        },
        {
            path: '/act/act2018100803',
            name: 'act.act2018100803',
            component: Act2018100803,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' }
        },
        {
            path: '/act/act2018100804',
            name: 'act.act2018100804',
            component: Act2018100804,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' }
        },
        {
            path: '/act/act2018100805',
            name: 'act.act2018100805',
            component: Act2018100805,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' }
        },
        {
            path: '/act/act2018100806',
            name: 'act.act2018100806',
            component: Act2018100806,
            meta: { title: '国际金融培训基地-三亚·亚太金融小镇' },
            beforeEnter: (to, from, next) => {
                if (getCookie('APF_UID')) { // 通过vuex state获取当前的token是否存在
                    Axios.get(url + '/wap/activity/actAlready', {
                            params: {
                                activityNo: '20181008',
                                APF_UID: getCookie('APF_UID'),
                            }
                        })
                        .then(res => {
                            if (res.data.data != false) {
                                next();
                            } else {
                                next({
                                    path: '/act/act2018100805',
                                })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    next({
                        path: '/act/act2018100801',
                    })
                }
            }
        },
        //民宿预订活动act2018103101
        {
            path: '/act/act2018103101',
            name: 'act.act2018103101',
            component: Act2018103101,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103102',
            name: 'act.act2018103102',
            component: Act2018103102,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103103',
            name: 'act.act2018103103',
            component: Act2018103103,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103104',
            name: 'act.act2018103104',
            component: Act2018103104,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103105',
            name: 'act.act2018103105',
            component: Act2018103105,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103106',
            name: 'act.act2018103106',
            component: Act2018103106,
            meta: { title: '金融培训民宿预订' }
        },
        {
            path: '/act/act2018103107',
            name: 'act.act2018103107',
            component: Act2018103107,
            meta: { title: '金融培训民宿预订' },
            beforeEnter: (to, from, next) => {
                if (getCookie('APF_UID')) { // 通过vuex state获取当前的token是否存在
                    Axios.get(url + '/wap/activity/actAlready', {
                            params: {
                                activityNo: '20181031',
                                APF_UID: getCookie('APF_UID'),
                            }
                        })
                        .then(res => {
                            if (res.data.data != false) {
                                next();
                            } else {
                                next({
                                    path: '/act/act2018103101',
                                })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    next({
                        path: '/act/act2018103101',
                    })
                }
            }
        },
		//小镇推广20181212 抽奖活动
// 		{
// 			path: '/act/act2018121201',
// 			name: 'act.act2018121201',
// 			component: Act2018121201,
// 			meta: { title: '亚太金融小镇活动' }
// 		},
    ]
})