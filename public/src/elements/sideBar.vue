<template>
<div>
  <md-sidenav class="md-left" ref="mainSideBar">
    <div class="logo-box">
      <h2 class="md-title">AplyTrac</h2>
    </div>

    <md-list>
      <md-list-item>
        <router-link to="/dashboard"> 
          <md-icon>dashboard</md-icon>
          <span>Dashboard</span>
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/archive">
          <md-icon>archive</md-icon>
          <span>Archive</span>
        </router-link>
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
/*
@media (min-width: 1281px) {
  .md-sidenav .md-sidenav-content{
    top: 0;
    transform: translate3d(0, 0, 0) !important;
    pointer-events: auto;
    font-size: 14px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }
}
*/
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
