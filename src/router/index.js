import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/layouts/main'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Main,
            noDropdown: false,
            iconCls: 'el-icon-s-home',
        },
    ]
})
