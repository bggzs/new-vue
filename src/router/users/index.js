export default[
    {
        path:'/user',
        name:'user',
        redirect:'/user/bggzs',
        component:()=> import('@/views/list.vue'),
        children:[
           {
            path :'list',
            name :'user-list',
            component:()=>import('@/views/users/list.vue'),
            meta:{
                title:'用户信息',
                role:'admin'
            }
           },{
               path:'edit',
               name:'user-edit',
               component:()=>import('@/views/users/edit.vue')
           },{
                path: 'bggzs',
                name: 'bggzs',
                component: () => import('@/views/bggzs.vue'),
              }

        ] //重定向
    },
    {
        path: '/',
        name: 'home',
        component: ()=>import('@/views/Home.vue'),
        redirect:'/login',
        children:[
            {
                path:'home',
                name:'home',
                component:() =>import('@/views/bggzs.vue')
            }
        ]
      },
      {
          path:'/login',
          name:'login',
          component:()=> import('@/views/login/login.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/users/edit.vue'),
        children:[
            {
                path: 'bggzs',
                name: 'bggzs',
                component: () => import('@/views/bggzs.vue')
            }
        ]
      },
      {
        path: '/bggzs',
        name: 'bggzs',
        component: () => import(/* webpackChunkName: "about" */ '@/views/bggzs.vue')
      },
      {
        path:'/test',
        name:'test',
       component: () => import(/* webpackChunkName: "about" */ '@/components/mytest.vue')
      },
      {
        path:'/users',
        name:'list',
        component:()=> import('@/views/list.vue')
      },
      {
          path:'/my_test',
          name:'route_test',
          component:()=>import('@/views/route/user.vue'),
          meta:{
              title:'mt_msg',
              role:'admin'
          },
          children:[
              {
                  path:'xiaohong',
                  name:'xiaohong',
                  component:()=>import ('@/views/route/xiaohong')
              },
              {
                path:'xiaoming',
                name:'xiaoming',
                component:()=>import ('@/views/route/xiaoming')
            }
          ]
      }
]