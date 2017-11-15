<template>
<div class="form-container">
  <div class="mb-2 tc">
    <h1>AplyTrac</h1>
    <small>Job Application Status Made Easy</small>
  </div>

  <md-whiteframe md-elevation="2" class="login-form">
    <md-toolbar class="md-transparent">
      <h2 class="md-title tc" style="flex: 1">Login</h2>
    </md-toolbar>
    <form @submit.prevent="signInUser">
      <md-input-container>
        <label for="email">Email</label>
        <md-input v-model="user.email" type="email" name="email" placeholder="Email">
        </md-input>
      </md-input-container>

      <md-input-container>
        <label for="password">Password</label>
        <md-input v-model="user.password" type="password" name="password" placeholder="Password">
        </md-input>
      </md-input-container>

      <md-button class="md-raised" type="submit" :disabled="formValid">Login</md-button>
    </form>
    <div class="blockfill pa tc pt-0">
      Don't have an account, register <router-link to="/register">here</router-link>
    </div>
  </md-whiteframe>
</div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  data() {
    return {
      user: {
        password: '',
        email: ''
      }
    }
  },
  computed : {
      formValid() {
         return (!this.user.email || 
                 !this.user.password)
      }
   },
  methods : {
    signInUser(){
      firebase.auth().signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
    }
  }
}
</script>

<style>
.form-container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 90px;
}
.form-container .login-form{
  width: 90%;
  height: auto;
}
@media screen and (min-width: 600px){
  .form-container .login-form{
    width: 25%;
  }
}

.form-container .login-form form{
  padding: 15px;
}
.form-container .login-form form button{
  width: 100%;
  margin: 0
}
</style>
