<template>
<div>
  <tool-bar page-title="Dashboard"></tool-bar>
<!--
  <div class="fab-wrapper">
    <md-button class="md-fab md-clean md-fab-top-right" id="dialogControl" @click="openForm">
      <md-icon>add</md-icon>
    </md-button>
  </div>

  <md-dialog md-open-from="#dialogControl" md-close-to="#dialogControl" ref="appForm">
    <app-form v-show="formVisible" v-on:newApp="addNewApp" v-on:formClosed="closeForm">
    </app-form>
  </md-dialog>

  <md-dialog ref="appView">
    <app-card :application="currentApplication"
              v-on:flagDeleted="deleteFlag"
              v-on:newFlagCreated="addNewFlag">
    </app-card>
  </md-dialog>
-->

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

  


<!--
  <app-table v-cloak>
    <div slot="application-row">
      <app-row v-for="application in applications" 
               :key="application.id" 
               :application="application"></app-row>
    </div>
  </app-table>
-->
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import appTable from '../reusable/appTable.vue';
  import appRow from '../reusable/appRow.vue';
  import appForm from '../reusable/appForm.vue';
  import appCardModal from '../reusable/appCardModal.vue';
  import appListCard from "../reusable/appListCard.vue";


  import toolBar from '../elements/toolBar.vue';

  export default {
    computed : mapGetters({
      applications : 'allApps'
    }),
    created() {
      this.$store.dispatch('LOAD_APPS_LIST')
    },
    components : {
      appTable,
      appForm,
      toolBar,
      appRow,
      appCardModal,
      appListCard
    }
  }
</script>

<style>
.fab-wrapper{
  position: absolute;
  right: 0px;
  bottom: 110px;
}
@media screen and (min-width: 1281px){
  .fab-wrapper{
    top: -55px;
    position: relative;
  }
}
@media screen and (min-width: 600px){
    .hide-on-large{
    display: none
  }
}
@media screen and (max-width: 600px){
  .hide-on-small{
    display: none
  }
}


/*Table Display*/
.table{
  display: table;
  width: 92%;
  border-collapse: collapse
}
.table-row{
  display: table-row;
  width: 100%;
}

.tcell{
  display: table-cell;
  padding: 1em;
  vertical-align: middle
}
.thead{
  border-bottom: 1px solid #eeeeee;
  /*margin-bottom: 8px;*/
}
.placehold{
  width: 40px;
}
.col-1 { width: 5%; }
.col-2 { /*width: 16.666667%;*/ width:15% }
.col-3 { width: 25%; }
.click-wrapper{
  display: inherit;
  cursor: pointer;
}
.app-row:hover{
  background-color: #f9f9f9
}
.has-ripple{
  position: relative;
}
</style>