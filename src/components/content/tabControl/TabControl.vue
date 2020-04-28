<template>
  <div class="tab-control">
   <div v-for="(item,index) in titles"
        :class="{active:index===currentIndex}"
        @click="itemClick(index)"
        class="tab-control-item">
        <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,  //array object default必须是一个函数
        default(){
          return []
        }

      }
    },
    data(){   //子组件data必须是一个函数
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    }

  }
</script>

<style scoped="scoped">
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1
  }
  .tab-control-item{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>



<!-- 判断属性是否相等
:class={active:index===currentIndex}  true的时候才会 class='active' -->
