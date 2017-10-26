<template>
<div>
  <tool-bar page-title="Dashboard"></tool-bar>
  
  <md-layout class="pa pb-0" md-align="center" md-gutter>
    <md-layout md-flex-xsmall="90" md-flex-medium="70">

      <md-toolbar class="md-transparent">
        <div class="block-fill">
          <h1 class="md-title">Your Applications</h1>
        </div>
      </md-toolbar>

    </md-layout>

    <md-layout md-flex-xsmall="90" md-flex-medium="70">
      <md-layout md-gutter="16">

        <app-list-card v-for="app in applications" 
        :application="app" 
        :key="app.id" 
        @appArchived="handleArchive(app)">
        </app-list-card>

      </md-layout>
    </md-layout>
  </md-layout>


  <app-add-btn @click.native="openForm"></app-add-btn>


  <md-dialog ref="appForm">
    <new-app-form @formClosed="closeForm">
    </new-app-form>
  </md-dialog>

  <md-snackbar :md-position="'bottom center'" ref="snack" :md-duration="4000">
    <span>{{snackMessage}}</span>
    <md-button class="md-accent" md-theme="light-blue" @click="undo">Undo</md-button>
  </md-snackbar>

</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { appsRef, flagsRef } from '../../firebase';

  import newAppForm from '../reusable/newAppForm.vue';
  import appListCard from "../reusable/appListCard.vue";
  import appAddBtn from '../reusable/appAddBtn.vue';
  
  import snackNotification from '../elements/snackNotification.vue';
  import toolBar from '../elements/toolBar.vue';

  export default {
    data() {
      return {
        snackMessage : '',
        undoAction : '',
        undoObject : null
      }
    },
    methods : {
      openForm() {
        this.$refs['appForm'].open()
      },
      closeForm() {
        this.$refs['appForm'].close()
      },
      handleArchive(app) {
        this.snackMessage = 'Application Archived';
        this.undoAction = 'unarchive';
        this.undoObject = app;
        this.$refs['snack'].open();
      },
      undo() {
        let key = this.undoObject['.key'];
        appsRef.child(key).update({
          archived : false
        });
        this.$refs['snack'].close();
      }
    },
    computed : mapGetters({
      applications : 'activeApps'
     // current : 'currentApp'
    }),
    created() {
      this.$store.dispatch('LOAD_APPS_LIST', appsRef);
      this.$store.dispatch('LOAD_FLAGS_LIST', flagsRef);
    },
    components : {
      newAppForm,
      toolBar,
      appAddBtn,
      appListCard,
      snackNotification
    }
  }
</script>

<style>
</style>