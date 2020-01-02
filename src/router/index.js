import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const requireModule=require.context('./',true,/\.js$/);
// const modules=[];

// requireModule.keys().forEach(filename=>{
//   console.log({filename});
//   modules.push(filename);
//   console.log({modules});
// });

// const routes = [
//   {
//     path: '/home',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/bggzs',
//     name: 'bggzs',
//     component: () => import(/* webpackChunkName: "about" */ '../views/bggzs.vue')
//   },
//   {
//     path:'/test',
//     name:'test',
//    component: () => import(/* webpackChunkName: "about" */ '../components/mytest.vue')
//   },
//   {
//     path:'/users',
//     name:'list',
//     component:()=> import('@/views/list.vue')
//   }

// ]
let routes=[];
const requireContext = require.context('./',true,/\.js$/);
requireContext.keys().forEach(filename=>{
  if(filename==='./index.js') return
  const routerModule=requireContext(filename)
  routes=[...routes,...(routerModule.default|| routerModule)]
})
console.log({routes})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
