<template>
<div id="app">
      
      <top-nav></top-nav>
      <router-view></router-view>
      

   </div>

</template>

<script>
import topNav from './elements/topNav.vue';

export default {
   name : 'app',
   components : {
      'topNav' : topNav
   }
}
</script>

<style>
</style>
