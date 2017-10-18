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
  props : {
    application : {
      type : Object,
      required : true
    }
  },
  methods : {
    deleteApp() {
      this.$store.dispatch('DELETE_ONE_APP', {
        application : this.application
      });
    },
    archiveApp() {
      this.application.archived = true;
      this.$store.dispatch('UPDATE_ONE_APP', {
        application : this.application
      })
    }
  },
  beforeDestroy() {
    console.log('I was called')
  }
}
</script>

<style>

</style>
