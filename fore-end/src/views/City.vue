<template>
  <div class="city">
        <CityHeader></CityHeader>
        <Search :list="cities"></Search>
        <List :hot="hotCity" :letter="letter" :list="cities"></List>
    </div>
</template>
<script>
import CityHeader from '../components/CityHeader/cityheader.vue';
import List from '../components/CityList/citylist.vue';
import Search from '../components/CitySearch/citysearch.vue';
import axios from 'axios';

export default {
  data () {
        return {
            cities:[], // 城市列表
            hotCity:[],//热门城市
            letter: '' // A-Z
        }
    },
    components: {
        CityHeader,
        Search,
        List,
    },
    methods:{
        getCityInfo () {
            axios.get('/static/api/city.json').then(this.getCityInfoSucc);
        },
        getCityInfoSucc (res) {
                res = res.data;
                this.hotCity = res.hotCities;
                this.cities = res.cities;
                // console.log(this.cities);
        }
    },
    mounted () {
        this.getCityInfo();
    }
}
</script>
<style>
@import '../styles/common/px2rem.scss';
.city{
  flex:1;
  background: red;
}
</style>
