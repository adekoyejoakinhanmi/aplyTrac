<template>
  <md-list>
      <md-subheader>
         <span style="flex : 1">
            Flags
         </span>
         <md-button class="md-icon-button">
            <md-icon>add</md-icon>
         </md-button>
      </md-subheader>

      <md-list-item v-show="flags.length === 0" class="tc">
         No flags added yet
      </md-list-item>

      <md-list-item v-for="flag in flags" :key="flag.id">
         <md-checkbox v-model="flag.completed"></md-checkbox>
         <span>{{flag.title}}</span>
         <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
         </md-button>
      </md-list-item>
   </md-list>
</template>

<script>
export default {
   props : {
      flags : {
         type : Array,
         required : true
      }
   }
}
</script>

<style>

</style>
