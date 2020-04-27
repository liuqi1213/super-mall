<template>
  <div id="app">

    <router-view/>
    <MainTabber></MainTabber>
  </div>
</template>

<script>
  import MainTabber from '@/components/content/mainTabbar/MainTabBar.vue'
export default {
  name: 'App',
  components:{
    MainTabber
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
