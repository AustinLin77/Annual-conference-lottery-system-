import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/activityList',
                    component: resolve => require(['../components/page/ActivityList.vue'], resolve)
                },
                {
                    path: '/newActivity',
                    component: resolve => require(['../components/page/NewActivity.vue'], resolve)
                },
                {
                    path: '/newAward',
                    component: resolve => require(['../components/page/NewAward.vue'], resolve)
                },
                {
                    path: '/awardList',
                    component: resolve => require(['../components/page/AwardList.vue'], resolve)
                },

            ]
        },
        { path: '/activityH',
            component:resolve => require(['../components/page/ActivityH.vue'], resolve)

        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
