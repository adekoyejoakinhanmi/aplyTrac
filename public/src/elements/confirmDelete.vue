<template>
  <md-dialog ref="dialog">
      <md-dialog-title>Confirm Delete</md-dialog-title>

      <md-dialog-content>
         Are you sure you want to delete this application.
         <br> This action is irreversible.
      </md-dialog-content>

      <md-dialog-actions>
         <md-button class="md-primary" @click="close">Cancel</md-button>
         <md-button class="md-primary" @click="deleteConfirmed">Delete</md-button>
      </md-dialog-actions>
   </md-dialog>
</template>

<script>
export default {
   methods : {
      close() {
         this.$refs['dialog'].close();
      },
      open() {
         this.$refs['dialog'].open();
      },
      deleteConfirmed() {
         this.$emit('deleteConfirmed')
      }
   }
}
</script>

<style>

</style>
