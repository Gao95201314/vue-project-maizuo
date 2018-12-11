//路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

//引入路由组件
import Films from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

//插件安装 
Vue.use(VueRouter);

const router=new VueRouter({
    routes:[
       //首页
       {name:'films',path:'/films',component:Films},
       //影院页
       {name:'cinemas',path:'/cinemas',component:Cinema},
       //个人中心页
       {name:'center',path:'/center',component:Center},

       {path:'*',redirect:'/films'}
    ]
})

//需要暴露
export default router;