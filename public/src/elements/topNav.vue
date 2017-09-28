<template>
<div>
  <md-sidenav class="md-left" ref="menuSideBar">
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

  <md-toolbar>
    <md-button class="md-icon-button" @click="toggleSideBar">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title">AplyTrac</h2>
        
  </md-toolbar>
</div>
</template>

<script>
export default {
   methods : {
     toggleSideBar() {
       this.$refs.menuSideBar.toggle();
     }
   }
}
</script>

<style>

</style>
