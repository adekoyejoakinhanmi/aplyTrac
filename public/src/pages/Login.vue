<template>
<div class="form-container">
  <md-whiteframe md-elevation="2" class="login-form">
    <md-toolbar class="md-transparent">
      <h2 class="md-title tc" style="flex: 1">Login</h2>
    </md-toolbar>
    <form @submit.prevent>
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

      <md-button class="md-raised">Login</md-button>
    </form>
    <div class="blockfill pa tc pt-0">
      Don't have an account, login <a href="/register">here</a>
    </div>
  </md-whiteframe>
</div>
</template>

<script>
export default {

}
</script>

<style>
.form-container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container .login-form{
  width: 90%;
  height: auto;
  margin-top: 150px;
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
