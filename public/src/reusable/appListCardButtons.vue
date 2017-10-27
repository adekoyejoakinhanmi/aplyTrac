<template>
<div>
  <md-button class="md-icon-button" @click="unarchiveApp" v-show="archiveStatus">
    <md-icon>unarchive</md-icon>
  </md-button>
  <div v-show="!archiveStatus">
    <md-button class="md-icon-button" @click="deleteApp">
      <md-icon>delete</md-icon>
    </md-button>
    <md-button class="md-icon-button" @click="archiveApp">
      <md-icon>archive</md-icon>
    </md-button>
  </div>
</div>
</template>

<script>
export default {
  props : {
    archiveStatus : {
      type : Boolean,
      required : true
    }
  },
  methods : {
    deleteApp() {
      this.$emit('appDeleted');
    },
    archiveApp() {
      this.$emit('appArchived');
    },
    unarchiveApp() {
      this.$emit('appUnarchived');
    }
  }
}
</script>

<style>

</style>
