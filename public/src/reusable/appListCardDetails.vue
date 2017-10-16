<template>
   <md-list>
      <md-subheader>Details</md-subheader>

      <md-list-item>
         <md-icon>location_on</md-icon>
         <span>{{application.type}}</span>
      </md-list-item>

      <md-list-item>
         <md-icon>send</md-icon>
         <span>{{application.medium}}</span>
      </md-list-item>

      <md-list-item>
         <md-icon>label</md-icon>
         <span>{{application.status}}</span>
      </md-list-item>

      <md-list-item>
         <md-icon>access_time</md-icon>
         <span>{{application.date}}</span>
      </md-list-item>
   </md-list>
</template>

<script>
export default {
   props : {
      application : {
         type : Object,
         required : true
      }
   }
}
</script>

<style>

</style>
