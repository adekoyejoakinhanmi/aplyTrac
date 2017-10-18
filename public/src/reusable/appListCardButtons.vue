<template>
<div>
  <md-button class="md-icon-button" @click="deleteApp">
    <md-icon>delete</md-icon>
  </md-button>
  <md-button class="md-icon-button" @click="archiveApp">
    <md-icon>archive</md-icon>
  </md-button>
</div>
</template>

<script>
export default {
  methods : {
    deleteApp() {
      this.$emit('appDeleted');
    },
    archiveApp() {
      this.$emit('appArchived');
    }
  }
}
</script>

<style>

</style>
