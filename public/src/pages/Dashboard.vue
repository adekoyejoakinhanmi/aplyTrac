<template>
<div>
  <tool-bar page-title="Dashboard"></tool-bar>
  <div class="secondary--container">
    <md-layout class="pa pb-0" md-align="center" md-gutter md-column>
      <page-header :title="headerTitle"></page-header>
      <app-list :filter="currentFilter"></app-list>
    </md-layout>
  </div>

  <app-add-btn @click.native="openForm"></app-add-btn>


  <md-dialog ref="appForm">
    <new-app-form @formClosed="closeForm">
    </new-app-form>
  </md-dialog>
  <!--
  <md-snackbar :md-position="'bottom center'" ref="snack" :md-duration="4000">
    <span>{{snackMessage}}</span>
    <md-button class="md-accent" md-theme="light-blue" @click="undo">Undo</md-button>
  </md-snackbar>
-->
</div>
</template>

<script>
  import { appsRef, flagsRef } from '../../firebase';

  import newAppForm from '../reusable/newAppForm.vue';
  import appAddBtn from '../reusable/appAddBtn.vue';
  import appList from '../reusable/appList.vue';
  import snackNotification from '../elements/snackNotification.vue';
  import pageHeader from '../elements/pageHeader.vue';
  import toolBar from '../elements/toolBar.vue';

  export default {
    data() {
      return {
        snackMessage : '',
        undoAction : '',
        undoObject : null,
        currentFilter : {
          archived : false
        },
        headerTitle : 'Your Applications'
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
    created() {
      this.$store.dispatch('LOAD_APPS_LIST', appsRef);
      this.$store.dispatch('LOAD_FLAGS_LIST', flagsRef);
    },
    components : {
      newAppForm,
      toolBar,
      appAddBtn,
      appList,
      pageHeader,
      snackNotification,
    }
  }
</script>

<style>
.md-button.md-fab.md-fab-bottom-right{
  position: fixed
}
.secondary--container{
  position: relative;
}
@media screen and (min-width: 960px){
  .secondary--container{
    width: 80%;
    margin: auto;
  }
}
</style>