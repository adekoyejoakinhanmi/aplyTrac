<template>
<div>
  <tool-bar page-title="Dashboard"></tool-bar>
  
  <md-layout class="pa pb-0" md-align="center" md-gutter md-columc>
    <md-layout md-flex="70">

      <md-toolbar class="md-transparent">
        <div class="block-fill">
          <h1 class="md-title">Your Applications</h1>
        </div>
      </md-toolbar>

    </md-layout>

    <md-layout md-flex="70">
      <md-layout md-gutter="16">

        <app-list-card v-for="app in applications" :application="app" :key="app.id">
        </app-list-card>

      </md-layout>
    </md-layout>
  </md-layout>


  <app-add-btn @click.native="openForm"></app-add-btn>


  <md-dialog ref="appForm">
    <app-form v-on:formClosed="closeForm">
    </app-form>
  </md-dialog>  

</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';


  import appForm from '../reusable/appForm.vue';
  import appListCard from "../reusable/appListCard.vue";
  import appAddBtn from '../reusable/appAddBtn.vue';


  import toolBar from '../elements/toolBar.vue';

  export default {
    methods : {
      openForm() {
        this.$refs['appForm'].open()
      },
      closeForm() {
        this.$refs['appForm'].close()
      }
    },
    computed : mapGetters({
      applications : 'activeApps',
      current : 'currentApp'
    }),
    created() {
      this.$store.dispatch('LOAD_APPS_LIST');
      this.$store.dispatch('LOAD_FLAGS_LIST');
    },
    components : {
      appForm,
      toolBar,
      appAddBtn,
      appListCard
    }
  }
</script>

<style>
</style>