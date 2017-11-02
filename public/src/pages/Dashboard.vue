<template>
<div>
  <tool-bar page-title="Dashboard">
  </tool-bar>

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
  
-->
</div>
</template>

<script>
  import newAppForm from '../reusable/newAppForm.vue';
  import appAddBtn from '../reusable/appAddBtn.vue';
  import appList from '../reusable/appList.vue';

  import pageHeader from '../elements/pageHeader.vue';
  import toolBar from '../elements/toolBar.vue';

  export default {
    data() {
      return {
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
      }
    },
    created() {
      this.$store.dispatch('LOAD_APPS_LIST');
      this.$store.dispatch('LOAD_FLAGS_LIST');
    },
    components : {
      newAppForm,
      toolBar,
      appAddBtn,
      appList,
      pageHeader,
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