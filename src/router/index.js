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

//taxation/index 小镇税收流程
import taxation_index from '@/components/taxation/index'
import taxation_list from '@/components/taxation/list'
import taxation_1 from '@/components/taxation/1'
import taxation_2 from '@/components/taxation/2'
import taxation_3 from '@/components/taxation/3'
import taxation_4 from '@/components/taxation/4'
import taxation_5 from '@/components/taxation/5'
import taxation_6 from '@/components/taxation/6'
import taxation_701 from '@/components/taxation/701'
import taxation_702 from '@/components/taxation/702'
import taxation_703 from '@/components/taxation/703'
import taxation_704 from '@/components/taxation/704'
import taxation_705 from '@/components/taxation/705'
import taxation_706 from '@/components/taxation/706'
import taxation_707 from '@/components/taxation/707'
import taxation_708 from '@/components/taxation/708'
import taxation_709 from '@/components/taxation/709'
import taxation_710 from '@/components/taxation/710'
import taxation_711 from '@/components/taxation/711'
import taxation_712 from '@/components/taxation/712'
import taxation_713 from '@/components/taxation/713'
import taxation_714 from '@/components/taxation/714'
import taxation_715 from '@/components/taxation/715'
import taxation_716 from '@/components/taxation/716'
import taxation_717 from '@/components/taxation/717'
import taxation_718 from '@/components/taxation/718'
import taxation_719 from '@/components/taxation/719'
import taxation_720 from '@/components/taxation/720'
import taxation_721 from '@/components/taxation/721'
import taxation_722 from '@/components/taxation/722'
import taxation_723 from '@/components/taxation/723'
import taxation_724 from '@/components/taxation/724'
import taxation_725 from '@/components/taxation/725'
import taxation_726 from '@/components/taxation/726'
import taxation_727 from '@/components/taxation/727'
import taxation_728 from '@/components/taxation/728'
import taxation_729 from '@/components/taxation/729'
import taxation_730 from '@/components/taxation/730'
import taxation_731 from '@/components/taxation/731'
import taxation_732 from '@/components/taxation/732'
import taxation_733 from '@/components/taxation/733'
import taxation_734 from '@/components/taxation/734'
import taxation_735 from '@/components/taxation/735'
import taxation_736 from '@/components/taxation/736'
import taxation_737 from '@/components/taxation/737'
import taxation_738 from '@/components/taxation/738'
import taxation_739 from '@/components/taxation/739'
import taxation_740 from '@/components/taxation/740'
import taxation_741 from '@/components/taxation/741'
import taxation_742 from '@/components/taxation/742'
import taxation_8 from '@/components/taxation/8'

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
		//税收流程
   		{ path: '/taxation/index', name: 'taxation.index', component: taxation_index, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/list', name: 'taxation.list', component: taxation_list, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/t1', name: 'taxation.t1', component: taxation_1, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/t2', name: 'taxation.t2', component: taxation_2, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/t3', name: 'taxation.t3', component: taxation_3, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/t4', name: 'taxation.t4', component: taxation_4, meta: { title: '税收流程及相关服务' } },
   		{ path: '/taxation/t5', name: 'taxation.t5', component: taxation_5, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t6', name: 'taxation.t6', component: taxation_6, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t701', name: 'taxation.t701', component: taxation_701, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t702', name: 'taxation.t702', component: taxation_702, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t703', name: 'taxation.t703', component: taxation_703, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t704', name: 'taxation.t704', component: taxation_704, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t705', name: 'taxation.t705', component: taxation_705, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t706', name: 'taxation.t706', component: taxation_706, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t707', name: 'taxation.t707', component: taxation_707, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t708', name: 'taxation.t708', component: taxation_708, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t709', name: 'taxation.t709', component: taxation_709, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t710', name: 'taxation.t710', component: taxation_710, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t711', name: 'taxation.t711', component: taxation_711, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t712', name: 'taxation.t712', component: taxation_712, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t713', name: 'taxation.t713', component: taxation_713, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t714', name: 'taxation.t714', component: taxation_714, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t715', name: 'taxation.t715', component: taxation_715, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t716', name: 'taxation.t716', component: taxation_716, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t717', name: 'taxation.t717', component: taxation_717, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t718', name: 'taxation.t718', component: taxation_718, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t719', name: 'taxation.t719', component: taxation_719, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t720', name: 'taxation.t720', component: taxation_720, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t721', name: 'taxation.t721', component: taxation_721, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t722', name: 'taxation.t722', component: taxation_722, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t723', name: 'taxation.t723', component: taxation_723, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t724', name: 'taxation.t724', component: taxation_724, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t725', name: 'taxation.t725', component: taxation_725, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t726', name: 'taxation.t726', component: taxation_726, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t727', name: 'taxation.t727', component: taxation_727, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t728', name: 'taxation.t728', component: taxation_728, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t729', name: 'taxation.t729', component: taxation_729, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t730', name: 'taxation.t730', component: taxation_730, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t731', name: 'taxation.t731', component: taxation_731, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t732', name: 'taxation.t732', component: taxation_732, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t733', name: 'taxation.t733', component: taxation_733, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t734', name: 'taxation.t734', component: taxation_734, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t735', name: 'taxation.t735', component: taxation_735, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t736', name: 'taxation.t736', component: taxation_736, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t737', name: 'taxation.t737', component: taxation_737, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t738', name: 'taxation.t738', component: taxation_738, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t739', name: 'taxation.t739', component: taxation_739, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t740', name: 'taxation.t740', component: taxation_740, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t741', name: 'taxation.t741', component: taxation_741, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t742', name: 'taxation.t742', component: taxation_742, meta: { title: '税收流程及相关服务' } },
		{ path: '/taxation/t8', name: 'taxation.t8', component: taxation_8, meta: { title: '税收流程及相关服务' } },
    ]
})