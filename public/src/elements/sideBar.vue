<template>
<div>
  <md-sidenav class="md-left md-fixed" ref="mainSideBar">
    <div class="logo-box">
      <h2 class="md-title">AplyTrac</h2>
    </div>

    <md-list>
      <md-list-item>
        <router-link to="/dashboard"> 
          <md-icon>view_module</md-icon> 
          <span>Applications</span>
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/archive">
          <md-icon>archive</md-icon>
          <span>Archive</span>
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/settings">
          <md-icon>settings</md-icon>
          <span>Settings</span>
        </router-link>
      </md-list-item>
    </md-list>

    <md-list>
      <md-subheader>Filters</md-subheader>
      
    </md-list>
  </md-sidenav>
</div>
</template>

<script>
export default {
   data(){
     return {
       statuses : ['Pending', 'Yet to reply', 'Get Back to you']
     }
   }
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
    box-shadow: 0 1px 3px rgba(#000, 0.2), 0 1px 1px rgba(#000, 0.14), 0 2px 1px -1px rgba(#000, .12);
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
