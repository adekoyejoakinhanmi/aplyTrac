<template>
<div>
  <md-sidenav class="md-left md-fixed" ref="mainSideBar">
    <div class="logo-box">
      <h2 class="md-title">AplyTrac</h2>
    </div>

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
    pointer-events: auto;
  }
}
.logo-box{
  min-height: 128px;
  border-bottom: 1px solid rgba(#000, 0.12);
  background: white;
  text-align: center;
  color: black;
}
.logo-box h2{
  margin-top: 20px;
}
</style>
