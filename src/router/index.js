import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Home from '@/views/home/Home'
// import Carts from '@/views/carts/Carts'
// import Category from '@/views/category/Category'
// import Profile from '@/views/profile/Profile'


const Home=()=>import('@/views/home/Home')
const Carts=()=>import('@/views/carts/Carts')
const Category=()=>import('@/views/category/Category')
const Profile=()=>import('@/views/profile/Profile')
Vue.use(Router)

const routes=[
  {
    path:'',
    redirect:Home
  },
  {
    path:'/carts',
    name:'Carts',
    component:Carts
  },
  {
    path:'/category',
    name:'category',
    component:Category
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  }
]


export default new Router({
  routes,
  mode:'history'
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ],
//   mode:'history'
// })
