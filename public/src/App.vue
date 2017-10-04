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
   created(){
     //eventsHub.$on('toggle-side-nav', this.toggleSideNav)
   },
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
*{
  box-sizing: border-box;
}
[v-cloak]{
  display: none;
}
html, body{
  background: #f9f9f9
}
.block-fill{
  display: block;
  width: 100%
}
.mt-1{
  margin-top: 0.5em
}
.mb-1{
  margin-bottom: 0.5em
}
.mb-2{
  margin-bottom: 1em
}
.pa{
  padding: 1.5em;
}
.tc{
  text-align: center
}
.mt-2{
  margin-top: 1em
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
