<template>
  <md-whiteframe md-elevation="1">
    <md-toolbar>
      <md-button class="md-icon-button nav-trigger" @click="toggleSideNav">
         <md-icon>menu</md-icon>
      </md-button>
      <div class="md-title">{{pageTitle}}</div>
      <div class="flex-1"></div>
      <slot></slot>
      <md-menu md-size="4">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>person</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item>
            <small>Logged in as {{userName}}</small>
          </md-menu-item>
          <md-menu-item @click="logout">
            <span>Log out</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      
    </md-toolbar>
    
  </md-whiteframe>
</template>

<script>
import * as firebase from 'firebase';

export default {
   props : {
      pageTitle : {
        type : String,
        required : false
      }
   },
   methods : {
      toggleSideNav(){
        //eventsHub.$emit('toggle-side-nav');
        // Although this is generally bad practice,
        // i.e. using $children, it is needed here 
        // to access the toggleSideNav Function,
        // pending a refactor to a more effective
        // event module
        this.$root.$children[0].toggleSideNav();
      },
      logout() {
        firebase.auth().signOut();
      }
   },
   computed : {
     userName() {
       return this.$store.getters.userFirstName;
     }
   }
}
</script>

<style>

.nav-trigger{
  display: block;
}
.md-toolbar .md-title{
  margin-left: 14px
}

</style>
