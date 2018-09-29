import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'

//act20180808
import Act2018080801 from '@/components/act/20180808/01'
import Act2018080802 from '@/components/act/20180808/02'
import Act2018080803 from '@/components/act/20180808/03'
import Act2018080804 from '@/components/act/20180808/04'
import Act2018080805 from '@/components/act/20180808/05'

//act20180818 
import Act2018081801 from '@/components/act/20180818/01'
import Act2018081802 from '@/components/act/20180818/02'
import Act2018081803 from '@/components/act/20180818/03'
import Act2018081804 from '@/components/act/20180818/04'
import Act2018081805 from '@/components/act/20180818/05'
import Act2018081806 from '@/components/act/20180818/06'
import Act2018081807 from '@/components/act/20180818/07'

Vue.use(Router)
export default new Router({
	mode: 'history',
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
            	title: '亚太金融小镇'
            }
        },
        {
        	path: '/act/act2018080801',
        	name: 'act.act2018080801',
        	component: Act2018080801,
        	meta: {
            	title: '2018海南优质项目对接会',
            }
        },
        {
        	path: '/act/act2018080802',
        	name: 'act.act2018080802',
        	component: Act2018080802,
        	meta: {
            	title: '2018海南优质项目对接会'
            }
        },
        {
        	path: '/act/act2018080803',
        	name: 'act.act2018080803',
        	component: Act2018080803,
        	meta: {
            	title: '2018海南优质项目对接会'
            }
        },
        {
        	path: '/act/act2018080804',
        	name: 'act.act2018080804',
        	component: Act2018080804,
        	meta: {
            	title: '2018海南优质项目对接会'
            }
        }, 
        {
        	path: '/act/act2018080805',
        	name: 'act.act2018080805',
        	component: Act2018080805,
        	meta: {
            	title: '2018海南优质项目对接会'
            }
        },
        //20180818
        {
        	path: '/act/act2018081801',
        	name: 'act.act2018081801',
        	component: Act2018081801,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇',
            }
        },
        {
        	path: '/act/act2018081802',
        	name: 'act.act2018081802',
        	component: Act2018081802,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        },
        {
        	path: '/act/act2018081803',
        	name: 'act.act2018081803',
        	component: Act2018081803,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        },
        {
        	path: '/act/act2018081804',
        	name: 'act.act2018081804',
        	component: Act2018081804,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        }, 
        {
        	path: '/act/act2018081805',
        	name: 'act.act2018081805',
        	component: Act2018081805,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        },
        {
        	path: '/act/act2018081806',
        	name: 'act.act2018081806',
        	component: Act2018081806,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        },
        {
        	path: '/act/act2018081807',
        	name: 'act.act2018081807',
        	component: Act2018081807,
        	meta: {
            	title: '2019三亚国际金融周-亚太金融小镇'
            }
        },
       
    ]
})