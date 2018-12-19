<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for="(item,key) in list"
                :ref="key"
                :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li class="item border-bottom"
                         v-for="listInner in item"
                          :key="listInner.id"
                    >{{listInner.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    props: {
          hot: Array,
          list: Array
      },
      data () {
        return {
          letters:[],
          arr1:[]
        }
      },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper);
    },
    created () { //构建字母项
      for (let i=0; i<26; i++) {
        this.letters.push(String.fromCharCode((65+i)));
      };
      this.getCityItem();
    },
    methods:{
      getCityItem () {
        for (let i=0; i<this.letters.length; i++) {
          let arr2=[];
          console.log(this.list);
          for (let j=0; j<this.list.length; i++) {
            let firstLetter=this.list[j].pinyin.charAt(0).toUpperCase();
            console.log(firstLetter);
            if (this.letters[i]===firstLetter) {
               arr2.push(this.list[j].name);
               console.log(this.list[j].name);
            }
          }
          console.log(arr2);
          this.arr1.push(arr2);
        }
      }
    },
}
</script>
<style scoped lang="scss">
@import '../../styles/common/px2rem.scss';
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
      }
    }
  }
  .item-list{
    .item{
      line-height: px2rem(76);
      color:#212121;
      padding-left: px2rem(2);
      font-size:px2rem(28);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
