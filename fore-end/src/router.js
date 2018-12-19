// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 引入路由组件
// import FilmDetail from './views/FilmDetail.vue';
// import Home from './views/Home.vue';
// import Films from './views/Films.vue';
// import NowPaly from './components/NowPlay/index.vue';
// import SoonPlay from './components/SoonPlay';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            component: () =>
                import ('./views/Home'),
            children: [{
                    path: '',
                    redirect: '/films/nowPlaying'
                },
                {
                    // 首页
                    path: 'films',
                    component: () =>
                        import ('./views/Films.vue'),
                    children: [{
                            path: '',
                            redirect: '/films/nowPlaying'
                        },
                        {
                            path: 'nowPlaying',
                            name: 'nowPlaying',
                            component: () =>
                                import ('./components/NowPlay/index.vue')
                        },
                        {
                            path: 'comingSoon',
                            name: 'comingSoon',
                            component: () =>
                                import ('./components/SoonPlay/index.vue')
                        }
                    ]
                },
                {
                    // 影院页
                    path: 'cinemas',
                    name: 'cinemas',
                    component: () =>
                        import ('./views/Cinema')
                },
                {
                    // 购物车
                    path: 'shopcart',
                    name: 'shopcart',
                    component: () =>
                        import ('./views/Shopcard')
                },
                {
                    // 个人中心页
                    path: 'center',
                    name: 'center',
                    component: () =>
                        import ('./views/Center.vue')
                }
            ]
        },
        {
            // 详情页面
            path: '/filmDetail/:filmId',
            name: 'filmDetail',
            component: () =>
                import ('./views/FilmDetail.vue'),
            brforeEnter(to, from, next) {
                console.log('我是一个路由独享的钩子函数');
                next();
            }
        },
        {
            //选择城市页面
            path: '/city',
            name: 'city',
            component: () =>
                import ('./views/City.vue')
        },
        {
            //用户
            path: '/user',
            component: {
                template: `
        <div>
           <router-view></router-view>
        </div>
        `
            },
            children: [{
                    path: 'card',
                    component: () =>
                        import ('./views/Card.vue'),
                    beforeEnter(to, from, next) {
                        if (localStorage.getItem('userphone')) {
                            next();
                        } else {
                            // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
                            //localStorage.setItem('myNeedPage','/user/card');
                            next({
                                path: '/user/login',
                                query: {
                                    redirect: to.fullPath
                                }
                            });
                        }
                    }
                },
                {
                    path: 'account',
                    component: () =>
                        import ('./views/Account.vue'),
                    beforeEnter(to, from, next) {
                        if (localStorage.getItem('userphone')) {
                            next();
                        } else {
                            // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
                            //localStorage.setItem('myNeedPage','/user/card');
                            next({
                                path: '/user/login',
                                query: {
                                    redirect: to.fullPath
                                }
                            });
                        }
                    }
                },
                {
                    path: 'set',
                    component: () =>
                        import ('./views/Set.vue'),
                    beforeEnter(to, from, next) {
                        if (localStorage.getItem('userphone')) {
                            next();
                        } else {
                            // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
                            //localStorage.setItem('myNeedPage','/user/card');
                            next({
                                path: '/user/login',
                                query: {
                                    redirect: to.fullPath
                                }
                            });
                        }
                    }
                },
                {
                    path: 'login',
                    component: () =>
                        import ('./views/Login.vue')
                },
            ]
        },
        {
            path: '*',
            redirect: '/films/nowPlaying'
        }
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})
router.afterEach((to, from) => {
        NProgress.done();
    })
    // 需要暴露
export default router;