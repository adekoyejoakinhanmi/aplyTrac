<template>
  <md-whiteframe md-elevation="1">
    <md-toolbar>
      <md-button class="md-icon-button nav-trigger" @click="toggleSideNav">
         <md-icon>menu</md-icon>
      </md-button>
      <div class="md-title">{{pageTitle}}</div>
    </md-toolbar>
    <md-toolbar :class="[extended ? '' : 'hidden']"></md-toolbar>
  </md-whiteframe>
</template>

<script>
export default {
   props : {
      pageTitle : String,
      extended : {
        type : Boolean,
        default : false
      }
   },
   methods : {
      toggleSideNav(){
        // Although this is generally bad practice,
        // i.e. using $children, it is needed here 
        // to access the toggleSideNav Function,
        // pending a refactor to a more effective
        // event module
        this.$root.$children[0].toggleSideNav();
      }
   }
}
</script>

<style>
@media screen and (min-width: 1281px){
  .nav-trigger{
    display: none;
  }
}
</style>
