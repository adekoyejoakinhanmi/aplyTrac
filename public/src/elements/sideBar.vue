<template>
<div>
  <md-sidenav class="md-left md-fixed" ref="mainSideBar">
    <md-toolbar>
      <h2 class="md-title">AplyTrac</h2>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <router-link to="/dashboard">Dashboard</router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/archive">Archive</router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/settings">Settings</router-link>
      </md-list-item>

    </md-list>
  </md-sidenav>
</div>
</template>

<script>
export default {
   
}
</script>

<style>
.md-sidenav .md-sidenav-content{
  width: 280px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}
@media (min-width: 1281px) {
  .md-sidenav .md-sidenav-content{
    top: 0;
    transform: translate3d(0, 0, 0) !important;
  }
}
</style>
