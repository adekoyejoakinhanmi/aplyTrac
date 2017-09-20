<template>
   <div class="col-md-4">
      <div class="panel panel-default">
         <div class="panel-heading">
            <strong>
               {{application.companyName}}
               <span :title="application.applicationStatus" :class="['status_badge', 'pull-right', bgColor]">&nbsp;</span>
            </strong>
         </div>

         <div class="panel-body">
            <p><em>{{application.jobVacancy}} | {{application.jobType}}</em></p>
            <p>via {{application.applicationMedium}} on {{application.applicationDate}}</p>
            <p></p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props : ['application'],
   computed : {
      bgColor() {
         //console.log(this.application.applicationStatus);
         return 'bg-primary'
      }
   }
}
</script>

<style>
   .status_badge{
      display: inline-block;
      min-width: 0;
      padding: 0px 4px;
      line-height: 0.8;
      color: #fff;
      border-radius: 10px;
      vertical-align: middle;
      margin-top: 4px;
      cursor: pointer;
   }
</style>
