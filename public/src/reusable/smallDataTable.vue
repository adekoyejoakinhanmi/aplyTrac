<template>
<md-layout class="pa">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Company Name</md-table-head>
          <md-table-head>Status</md-table-head>
        </md-table-row>
      </md-table-header>
      <slot name="small-table-body">
      </slot>
    </md-table>
</md-layout>
</template>

<script>
import base from '../helpers/urls.config';
import axios from 'axios';

export default {
   data(){
      return {
         editing : false
      }
   },
   methods : {
      editApplication () {
         this.editing = !this.editing;
      },
      deleteApp() {
        axios.delete(`${base.url}/applications/${this.application.id}`);
        this.$emit('deleteApp');
      }
    }
}
</script>

<style>
   
</style>
