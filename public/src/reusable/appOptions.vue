<template>
  <md-menu md-direction="bottom left">
    <md-button class="md-icon-button" md-menu-trigger>
      <md-icon>more_vert</md-icon>
    </md-button>

    <md-menu-content>
      <md-menu-item @click="deleteThis">
        <md-icon>delete</md-icon>
        <span>Delete</span>
      </md-menu-item>
      <md-menu-item>
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
import bus from '../helpers/bus';

export default {
  props : {
    application : {
      type : Object,
      required : true
    }
  },
  methods : {
    deleteThis() {
      bus.$emit('appDeleted', this.application.id);
    }
  }
}
</script>

<style>

</style>
