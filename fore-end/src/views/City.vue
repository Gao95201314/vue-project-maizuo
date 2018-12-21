<template>
  <div class="city">
       <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-zuojiantou"></div>
        </router-link>
    </div>
        <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="serach-item border-bottom" v-for="item in listItem" :key="item.id">{{item.name}}</li>
                <li v-show="hasNoData" class="serach-item border-bottom">没有搜索到匹配的数据</li>
            </ul>
        </div>
    </div>
        <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{cityName}}</div>
                    </div>
                </div>
            </div>
            <div class="hot">
                <div class="title border-topbottom hotcity">热门城市</div>
                <div class="button-list1">
                    <div class="button-wrapper1" v-for="item in hotCity" :key="item.id">
                        <div class="button1">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for="(item,index) in sort"
                :key="index">
                <div class="title border-topbottom">{{item.py}}</div>
                <ul class="item-list">
                    <li class="item border-bottom"
                         v-for="(item,index) in item.list"
                          :key="index" @click="changeCity(item)"
                    >{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
// import List from '../components/CityList/citylist.vue';
// import Search from '../components/CitySearch/citysearch.vue';
import axios from 'axios';
import BScroll from 'better-scroll';
export default {
  data () {
        return {
            cityName:'深圳',
            cities:[], // 城市列表
            hotCity:[],//热门城市
            letter: '',// A-Z
            letters:[],
            arr1:[],
            keyword:'',
            listItem:[],
            timer:null
        }
    },
    methods:{
        getCityInfo () {
            axios.get('/static/api/city.json').then(response => {
                response = response.data;
                this.hotCity = response.hotCities;
                this.cities = response.cities;
                let hash={};//用来记录某个拼音首字母是否存在
                let i=0;// 用来记录某个拼音首字母的下标
                var res=[];// 最终需要得到的数据
                this.cities.forEach(item => {
                    let py=item.pinyin.substring(0,1).toUpperCase();
                    if (hash[py]) {
                        //存在
                        res[hash[py]-1].list.push(item);
                    } else {
                        //写入hash
                        hash[py]=++i;
                        //不存在
                        res.push({
                            py:py,
                            list:[item]
                        })
                    }
                });
                this.arr1=res;
                // console.log(this.arr1);
            });
        },
        changeCity (item) {
          let cityId=item.cityId;
          let index1=-1;
          let index2=-1;
          this.arr1.forEach((item,i1) => {
            index1=i1;
            item.list.forEach((item,i2) => {
              if (cityId===item.cityId) {
                index2=i2
              }
            })
          })
          if (index2>-1) {
            let cityname=this.arr1[index1].list[index2].name;
            this.cityName=cityname;
          }
        }
    },
    created () {
     this.getCityInfo();
    },
    computed:{
        hasNoData () {
            return !this.listItem.length;//没有搜索的条件是否显示
        },
        sort:function() {
              return sortByKey(this.arr1,'py');
          }
    },
    //城市搜索
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyword) { //清空
                this.listItem = '';
                return;
            }
            this.timer=setTimeout(() => {
                const result=[];
                this.arr1.forEach((item,i) => {
                    item.list.forEach((value,i) => {
                      if (value.pinyin.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1) {
                            result.push(value);
                        }
                    })
                })
                this.listItem=result;
            },100)
        }
    },
     mounted () {
        this.scroll = new BScroll(this.$refs.wrapper);
    },
}
function sortByKey (array,key) {
    return array.sort (function(a,b) {
        var x = a[key];
        var y = b[key];
        return ((x<y)?-1:((x>y)?1:0));
    })
}
</script>
<style lang="scss">
@import '../styles/common/px2rem.scss';
.city{
  flex:1;
  .header{
  overflow: hidden;
  height:px2rem(50);
  line-height: px2rem(50);
  text-align: center;
  color: block;
  font-size: px2rem(18);
  .icon-zuojiantou{
    position: absolute;
    left: 0;
    top: 0;
    font-size: px2rem(20);
    text-align: center;
    color: block;
  }
}
.search{
  height: px2rem(72);
  padding: px2rem(10);
  background:white;
  .search-input{
    box-sizing: border-box;
    width:100%;
    height: px2rem(50);
    line-height: px2rem(62);
    text-align: center;
    border-radius: px2rem(6);
    padding: px2rem(10);
    color: #666;
   }
}
.search-content {
  z-index: 1;
  overflow:hidden;
  position:absolute;
  top: px2rem(120);
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .serach-item{
    line-height: px2rem(62);
    padding-left:px2rem(2);
    color:#666;
    background: #fff;
  }
}
.border-topbottom{
    &:before{
      background: white;
    }
    &:after{
      background:white;
    }
}
.border-bottom{
    &:before{
      background: white;
    }
}
.list{
  overflow: hidden;
  position:absolute;
  top:px2rem(140);
  left:0;
  right:0;
  bottom:0;
  .hot{
  .button-list1{
    .button-wrapper1{
      .button1{
      line-height: px2rem(76);
      color:#212121;
      padding-left: px2rem(2);
      font-size:px2rem(20);
      text-overflow: ellipsis;
      white-space: nowrap;
      }
    }
  }
  }
  .title{
    line-height: px2rem(54);
    background: #eee;
    padding-left: px2rem(2);
    color: #666;
    font-size: px2rem(26);
  }
  .button-list{
    overflow:hidden;
    padding: px2rem(1) px2rem(6) px2rem(1) px2rem(1);
    .button-wrapper{
      float:left;
      width:33.33%;
      .button{
        margin:px2rem(1);
        text-align: center;
        height:px2rem(30);
        line-height:px2rem(30);
        border-radius: px2rem(6);
        font-size: px2rem(20);
      }
    }
  }
  .item-list{
    .item{
      line-height: px2rem(76);
      color:#212121;
      padding-left: px2rem(2);
      font-size:px2rem(20);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
}
</style>
