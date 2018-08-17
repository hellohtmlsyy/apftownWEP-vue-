import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'

//act
import Act2018080801 from '@/components/act/20180808/01'
import Act2018080802 from '@/components/act/20180808/02'
import Act2018080803 from '@/components/act/20180808/03'
import Act2018080804 from '@/components/act/20180808/04'
import Act2018080805 from '@/components/act/20180808/05'

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
            component: Home
        },
        {
        	path: '/act/act2018080801',
        	name: 'act.act2018080801',
        	component: Act2018080801,
        },
        {
        	path: '/act/act2018080802',
        	name: 'act.act2018080802',
        	component: Act2018080802,
        },
        {
        	path: '/act/act2018080803',
        	name: 'act.act2018080803',
        	component: Act2018080803,
        },
        {
        	path: '/act/act2018080804',
        	name: 'act.act2018080804',
        	component: Act2018080804,
        }, 
        {
        	path: '/act/act2018080805',
        	name: 'act.act2018080805',
        	component: Act2018080805,
        },
       
    ]
})