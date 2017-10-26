<template>
  <md-whiteframe md-elevation="1">
    <md-toolbar v-show="extended"></md-toolbar>
    <md-toolbar>
      <md-button class="md-icon-button nav-trigger" @click="toggleSideNav">
         <md-icon>menu</md-icon>
      </md-button>
      <div class="md-title">{{pageTitle}}</div>
    </md-toolbar>
    
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
        //eventsHub.$emit('toggle-side-nav');
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

.nav-trigger{
  display: block;
}
.md-toolbar .md-title{
  margin-left: 14px
}

</style>
