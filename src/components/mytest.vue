<template>
  <div id="test" class="todos">
      <h1>hello world</h1>
      <h2>{{msg}}</h2>
        <div class="todo" v-for="todo in todos" v-bind:key="todo.id">{{todo.name}}</div>
  </div>
</template>

<script>
export default {
    name:'mytest',
    props:{
        msg:String
    },
    data(){
        return {
            todos:[
                {
                    id:1,
                    name:'bggzs',
                    num:110
                },{
                    id:2,
                    name:'bggzs1',
                    num:111
                }
            ]
        }   
    }
}
</script>

<style>
 .todo{
   background: #cccccc;
   padding: 5px 10px;
   color: rgb(51, 49, 49) ;
   border-bottom: 1px solid #f4f4f4; 
}
</style>