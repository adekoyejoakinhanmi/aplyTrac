<template>
  <md-layout>

      <md-toolbar class="md-transparent">
        <div v-cloak>
          <span class="md-subheading">{{title}}</span>
        </div>
      </md-toolbar>

    </md-layout>
</template>

<script>
export default {
   props : {
      title : {
         type : String,
         required : false
      }
   }
}
</script>

<style>

</style>
