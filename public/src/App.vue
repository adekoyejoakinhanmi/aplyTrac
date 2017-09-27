<template>
<div id="app">
      
      <top-nav></top-nav>

      <div class="container-fluid">
        <div class="row">
           <side-bar></side-bar>
           <router-view></router-view>
        </div>
     </div>

   </div>

</template>

<script>
import sideBar from './elements/sideBar.vue';
import topNav from './elements/topNav.vue';

export default {
   name : 'app',
   components : {
      'sideBar' : sideBar,
      'topNav' : topNav
   }
}
</script>

<style>
</style>
