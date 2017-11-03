<template>
  <div class="form-container">
  <md-whiteframe md-elevation="2" class="login-form">
    <md-toolbar class="md-transparent">
      <h2 class="md-title tc" style="flex: 1">Register</h2>
    </md-toolbar>
    <form @submit.prevent="addNewUser">
             <md-input-container>
        <label for="name">Fullname</label>
        <md-input v-model="newUser.fullname" type="text" name="name" placeholder="Bola Doe">
        </md-input>
      </md-input-container>

      <md-input-container>
        <label for="email">Email</label>
        <md-input v-model="newUser.email" type="email" name="email" placeholder="Email">
        </md-input>
      </md-input-container>

      <md-input-container>
        <label for="password">Password</label>
        <md-input v-model="newUser.password" type="password" name="password" placeholder="Password">
        </md-input>
      </md-input-container>

      <md-button class="md-raised" type="submit" :disabled="formValid">Register</md-button>
    </form>
    <div class="blockfill pa tc pt-0">
      Already have an account, login <router-link to="/login">here</router-link>
    </div>
  </md-whiteframe>
</div>
</template>

<script>
import * as firebase from 'firebase';
import { idGen } from "../helpers/funcs";

export default {
   data() {
      return {
         newUser : {
            fullname : '',
            password : '',
            email : ''
         }
      }
   },
   computed : {
      formValid() {
         return (!this.newUser.fullname || 
                 !this.newUser.email || 
                 !this.newUser.password)
      }
   },
   methods : {
      addNewUser() {
          let data = {
            id : idGen('u'),
            name: this.newUser.fullname,
            email: this.newUser.email
          };

          firebase.auth().createUserWithEmailAndPassword(
            this.newUser.email,
            this.newUser.password
          ).then(success => {
            this.$store.dispatch('createUser', {
              user: data
            });
            this.clearUser();
            this.$router.push('/login');
          })
        },
        clearUser() {
          this.newUser = {
            fullname: '',
            password: '',
            email: ''
          }
        }
   }
}
</script>

<style>

</style>
