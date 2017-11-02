<template>
  <div class="form-container">
  <md-whiteframe md-elevation="2" class="login-form">
    <md-toolbar class="md-transparent">
      <h2 class="md-title tc" style="flex: 1">Register</h2>
    </md-toolbar>
    <form @submit.prevent>
             <md-input-container>
        <label for="name">Fullname</label>
        <md-input type="text" name="name" placeholder="Bola Doe">
        </md-input>
      </md-input-container>

      <md-input-container>
        <label for="email">Email</label>
        <md-input type="email" name="email" placeholder="Email">
        </md-input>
      </md-input-container>

      <md-input-container>
        <label for="password">Password</label>
        <md-input type="password" name="password" placeholder="Password">
        </md-input>
      </md-input-container>

      <md-button class="md-raised">Register</md-button>
    </form>
    <div class="blockfill pa tc pt-0">
      Already have an account, login <router-link to="/login">here</router-link>
    </div>
  </md-whiteframe>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
