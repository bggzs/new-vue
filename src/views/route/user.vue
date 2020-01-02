<template>
  <div> 
      <h1>{{    $route.meta.role  ||  'user list'}}</h1>
      <h1>这里是user</h1>
      
      <router-view></router-view>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>