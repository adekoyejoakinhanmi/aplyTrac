<template>
<div id="app" class="main-container">  
      <!--<side-bar ref="sideBar"></side-bar>-->
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
     sideBar
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
  padding: 1.5em
}
.pa-1{
  padding: 2em
}
.pt-0{
  padding-top: 0
}
.pb-0{
  padding-bottom: 0
}
.pt-1{
  padding-top: 0.5em
}
.tc{
  text-align: center
}
.mt-2{
  margin-top: 1em
}
.flex{
  display: flex;
  align-items: center
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
.md-backdrop{
  background-color: rgba(0,0,0, 0.12)
}
@media screen and (min-width:1281px){
      .main-contaner{
            padding-left: 280px
      }
}
</style>
