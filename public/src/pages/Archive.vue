<template>
<div>
   <tool-bar page-title="Archive"></tool-bar>

   <div class="secondary--container">
      <md-layout class="pa pb-0" md-align="center" md-gutter md-column>
         <page-header :title="headerTitle"></page-header>
         <app-list :filter="filter"></app-list>
      </md-layout>
   </div>
</div>
</template>

<script>
import toolBar from '../elements/toolBar.vue';
import pageHeader from '../elements/pageHeader.vue';

import appList from '../reusable/appList.vue';

export default {
   data() {
      return {
         filter : {
            archived : true
         },
         headerTitle : 'Your Archive'
      }
   },
   components : {
      toolBar,
      appList,
      pageHeader
   }
}
</script>

<style>

</style>
