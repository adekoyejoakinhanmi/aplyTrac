<template>
<div id="app">
            <top-nav></top-nav>
      <div class="main-container">
            <router-view></router-view>
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
.main-container{
      width: 100%;
      max-width: 1100px;
      margin: auto;
}
</style>
