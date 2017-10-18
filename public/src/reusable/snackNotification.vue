<template>
<md-snackbar :md-position="'bottom center'" ref="snackbar" :md-duration="4000">
    <span>{{message}}</span>
    <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Close</md-button>
  </md-snackbar>
</template>

<script>
export default {
   props : {
      message : {
         type : String,
         required : true
      }
   },
   methods : {
      open() {
         this.refs['snackbar'].open();
      }
   }
}
</script>

<style>

</style>
