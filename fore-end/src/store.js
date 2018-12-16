//1.引入Vue
import Vue from 'vue';
//2.引入vuex
import Vuex from 'vuex';
//3.use
Vue.use(Vuex);

//实例化store对象
const store =new Vuex.Store({
  //一个仓库中有哪些东西
  //状态：放置整个项目中所有能够全局共用的状态
  state: {
    curCity:'深圳',
    myLove:'美国电影',
    books: [
      {
        name:'很纯很暧昧',
        isLove:true
      },{
        name:'笑话的贴身高手',
        isLove:true
      },{
        name:'霸道总裁爱上我',
        isLove:true
      }
    ],
    maxLoveNum:1,
    //购物车数据
    filmsCard:[],
  }, 
  //对当前的state里面某个一个状态做派生。类似计算属性
  getters: {
    myLoveBooks (state,getters) {
      console.log(getters);
      var arr =state.books.filter(item => {
        return item.isLove;
      });
      return arr.splice(0,getters.maxLoveNumX2);
    },
    maxLoveNumX2 (state) {
      return state.maxLoveNum*2;
    }
  },
  //唯一能够修改state状态的东西。同步操作
  mutations: {
    /**
     * 修改 当前定位的城市
     * @param {Object} state 就是当前 store实例的 state 属性
     * @param {Object} payload 参数 负载
     */
  changeCurCity (state,payload) {
    state.curCity=payload.quName;
  },
  // 添加电影
  addFilm (state,payload) {
    let filmId=payload.filmId;
    let index=-1;
    let isZai=state.filmsCard.some((item,i) => {
    if (item.filmId===filmId) {
      index=i;
      return true;
    } else {
      return false;
    }
    });
    if (isZai) {
    state.filmsCard[index].filmNum++;  
    } else {
      state.filmsCard.push({
        filmId:payload.filmId,
        filmName:payload.name,
        filmPrice:Math.random(10,20),
        filmNum:1
      });
    }
  }
  },
  //做异操作的时候要用到
  actions: {

  },
  //对store做拆分，拆分成一个一个的小store
  modules: {

  }
})
//4.暴露出store实例对象
export default store;
