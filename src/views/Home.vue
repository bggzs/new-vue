<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <mytest msg='hello---world'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mytest from '@/components/mytest.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    mytest
  }
}
</script>
