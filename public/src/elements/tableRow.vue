<template>
   <md-table-row>
      <md-table-cell>{{application.company}}</md-table-cell>
      <md-table-cell>{{application.vacancy}}</md-table-cell>
      <md-table-cell>{{application.type}}</md-table-cell>
      <md-table-cell>{{application.medium}}</md-table-cell>
      <md-table-cell>{{application.date}}</md-table-cell>
      <md-table-cell>{{application.status}} 
         <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
         </md-button>
      </md-table-cell>
   </md-table-row> 
</template>

<script>
export default {
   props: {
      application : {
         type : Object,
         required : true
      }
   }
}
</script>

<style>
.pointed{
   cursor: pointer;
}
</style>
