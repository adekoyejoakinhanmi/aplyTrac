<template>

<md-layout md-gutter="16">

   <app-list-card v-for="app in applications" 
   :application="app" 
   :key="app.id" 
   @appArchived="handleArchive(app)">
   </app-list-card>

</md-layout>
</template>

<script>
import appListCard from "../reusable/appListCard.vue";

export default {
   props : {
      filter : {
         type : Object,
      }
   },
   computed : {
      applications() {
         return this.$store.getters.getByStatus(this.filter);
      }
   },
   methods : {
      handleArchive(app) {
         console.log(app);
      }
   },
   components : {
      appListCard
   }
}
</script>

<style>

</style>
