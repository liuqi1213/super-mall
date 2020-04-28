<template>
 <div id="home" class="wrapper">
   <NavBar class='home-nav'>
     <div slot="center">购物街</div>
   </NavBar>
   <RecommendView :recommends='recommends'></RecommendView>
   <TabControl :titles="['流行','新款','精选']" />
 </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import TabControl from '@/components/content/tabControl/TabControl.vue'
  import RecommendView from './childComponents/RecommendView.vue'

  import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
  export default{
    name:'Home',
    components:{
      NavBar,
      TabControl,
      RecommendView
    },
    data(){
      return{
        recommends:[]
      }
    },
    created(){
      this.getHomeMultidata()
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.recommends=res.data.recommend.list
        })
      }
    }
  }
</script>

<style>

</style>
