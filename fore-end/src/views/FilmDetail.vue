<template>
<div class="main">
  <div class="film-detail">
    <div class="film-poster">
       <router-link class="iconfont icon-xiayibu" tag="i" to="/"></router-link>
      <img :src="films.poster" alt="">
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{films.name}}</span>
          <span class="item">{{films.filmType && films.filmType.name}}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{films.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">{{films.category}}</div>
      <div class="film-premiere-time grey-text">
        {{new Date(films.premiereAt*1000)}}上映
      </div>
      <div class="film-nation-runtime grey-text">
        {{films.nation}}  | {{films.runtime}}分钟
      </div>
      <div class="film-synopsis grey-text">
       {{films.synopsis}}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <div class="list">
       <h2>演职人员</h2>
      <ul>
        <li
        v-for="(item, index) in actorList" :key="index">
        <div class="film-actor">
        <img :src="item.avatarAddress" alt="">
        <p>{{item.name}}</p>
        </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="selectMail">
      <p>选座购票</p>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FilmDetail',
  data () {
    return {
      films: {},
      actorList:[]
    };
  },
  methods: {
    getFilmDetail () {
      axios.get('/static/api/films.json').then(response => {
          let result = response.data;
          let filmId = Number(this.$route.params.filmId);
          // console.log(filmId);
          let index = -1;
          let isZai = result.some((item, i) => {
            if (item.filmId===filmId) {
              index = i;
              return true;
            }
            return false;
          });
          if (isZai) {
            let filmObj=result[index];
            this.films=filmObj;
            this.actorList=filmObj.actors;
            console.log(this.films);
          }
        });
    },
  },
  created () {
    // let filmId = this.$route.params.filmId;
    this.getFilmDetail();
  }
};
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
.main{
  display: flex;
  flex-direction: column;
  flex:1;
.film-detail {
  flex: 1;
  overflow-y: auto;
  .film-poster {
    height: px2rem(210);
    .icon-xiayibu{
      position: absolute;
      left:0;
      font-size:px2rem(24);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      &.hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }
  .list {
    width: px2rem(350);
    h2{
    margin-left:px2rem(10);
    }
    ul{
      width: px2rem(375);
    li{
    margin:px2rem(10) 0;
    float:left;
  }
    }
  .film-actor{
    width:px2rem(80);
    height:px2rem(80);
    margin-left:px2rem(10);
    img {
      width:100%;
    }
    p{
      text-align: center;
      font-size: px2rem(14);
    }
  }
  }
}
.selectMail{
    width: 100%;
    height:px2rem(40);
    background: #ffb232;
    p{
      text-align: center;
      line-height: px2rem(40);
      font-size: px2rem(17);
      color:#fff;
    }
  }
}

</style>
