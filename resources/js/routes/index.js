import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";


Vue.use(Router);

export default [{
    path: '/',
    component: { render: h => h('router-view') },
    children: [
        {
            path: 'login',
            name: 'Login',
            component: Login,
            meta: {
                title: 'Login'
            },
        },
    ]
}];
