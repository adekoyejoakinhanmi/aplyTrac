<template>
<div id="app" class="main-container">  
      <side-bar ref="sideBar"></side-bar>
      <router-view></router-view>
   </div>

</template>

<script>
import sideBar from './elements/sideBar.vue';

export default {
   name : 'app',
   methods : {
      toggleSideNav(){
            //reference cascade, the toggle function is nested
           this.$refs['sideBar'].$refs['mainSideBar'].toggle();
      }
   },
   components : {
      'sideBar' : sideBar
   }
}
</script>

<style>
.mt-1{
  margin-top: 0.5em
}
.hidden{
  display: none
}
body{
  display: flex
}
html, body{
  overflow: hidden;
  height: 100%
}
.main-container{
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1
}

@media screen and (min-width:1281px){
      .main-container{
            padding-left: 280px
      }
}
</style>
