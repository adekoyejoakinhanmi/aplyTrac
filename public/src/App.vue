<template>
<div id="app">
      
      <top-nav></top-nav>

      <div class="container-fluid">
        <div class="row">
           <router-view></router-view>
        </div>
     </div>

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
