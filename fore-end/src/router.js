// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
import Home from './views/Home.vue';
import Films from './views/Films.vue';
import NowPaly from './components/NowPlay/index.vue';
import SoonPlay from './components/SoonPlay';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import FilmDetail from './views/FilmDetail.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          // 首页
          path: 'films',
          name: 'films',
          component: Films,
          children: [
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: NowPaly
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: SoonPlay
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: Cinema
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: Center
        }
      ]
    },
    {
      // 详情页面
      path: '/filmDetail/:filmId',
      name: 'filmDetail',
      component: FilmDetail
    },
    {
      path: '',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
