<template>
<div class="app-list">
   <md-layout md-gutter="16">

      <app-list-card v-for="app in applications" :application="app" :key="app.id" @appArchived="handleArchive(app)">
      </app-list-card>

      <div class="block-fill tc pa" v-show="applications.length === 0">
         Nothing to show here
      </div>
   </md-layout>

   <md-snackbar :md-position="'bottom center'" ref="snack" :md-duration="4000">
      <span>{{snackMessage}}</span>
      <md-button class="md-accent" md-theme="light-blue" @click="undo">Undo</md-button>
   </md-snackbar>
</div>
</template>

<script>
import { appsRef } from '../../firebase/index';

import appListCard from "../reusable/appListCard.vue";

export default {
   data() {
      return {
         snackMessage : '',
         undoAction : '',
         undoObject : null,
      }
   },
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
         this.snackMessage = 'Application Archived';
         this.undoAction = 'unarchive';
         this.undoObject = app;
         this.$refs['snack'].open();
      },
      undo() {
         let key = this.undoObject['.key'];
         this.$store.dispatch('UPDATE_APP', {
           key, 
           data : { archived : false}
         });
        this.$refs['snack'].close();
      }
   },
   components : {
      appListCard
   }
}
</script>

<style>
.app-list{
  margin-bottom: 25px;
}
</style>
