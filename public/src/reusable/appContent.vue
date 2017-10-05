<template>
<md-layout md-flex="50">
  <div class="block-fill">
    <md-toolbar class="pa md-transparent">
      <md-avatar>
        <img src="../../assets/imgs/gb.png" :alt="application.status">
      </md-avatar>
      <h2 class="md-title" style="flex: 1">{{application.company}}</h2>
      <md-button class="md-icon-button">
        <md-icon>edit</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>archive</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>
    </md-toolbar>
  </div>
  <div class="pa app-content block-fill">
    <header>
      <h3 class="md-subhead">Details</h3>
    </header>
  </div>
</md-layout>
</template>

<script>
export default {
   props : {
      application : Object,
      required : true
   }
}
</script>

<style>
.flex{
  display: flex
}
</style>
