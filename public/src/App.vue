<template>
<div id="app">
      
      <nav class="navbar navbar-default">
         <div class="container-fluid">
            <div class="navbar-header">
            
               <a class="navbar-brand" href="#">
               <i class="glyphicon glyphicon-briefcase"></i> 
               AplyTrac
               </a>
            </div>
            </div>
         </nav>
         

      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
              <li><router-link to="/dashboard">Dashboard</router-link></li>
              <li><router-link to="/archive">Archive</router-link></li>
              <li><router-link to="/settings">Settings</router-link></li>

            </ul>
          </div>


          <router-view></router-view>
        </div>
     </div>

   </div>
</template>

<script>
export default {
   name : 'app'
}
</script>

<style>
</style>
