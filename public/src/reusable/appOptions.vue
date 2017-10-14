<template>
  <md-menu md-direction="bottom left">
    <md-button class="md-icon-button" md-menu-trigger>
      <md-icon>more_vert</md-icon>
    </md-button>

    <md-menu-content>
      <md-menu-item @click="deleteApp">
        <md-icon>delete</md-icon>
        <span>Delete</span>
      </md-menu-item>
      <md-menu-item @click="archiveApp">
        <md-icon>archive</md-icon>
        <span>Archive</span>
      </md-menu-item>
      <md-menu-item>
        <md-icon>edit</md-icon>
        <span>Edit</span>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
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
      });
    }
  }
}
</script>

<style>

</style>
