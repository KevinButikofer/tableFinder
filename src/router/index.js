import Vue from 'vue'
import {IonicVueRouter} from "@ionic/vue";
import Tabs from "../views/Tabs";
import RestInfo from "../views/RestaurantDetailsView";
import LoginView from "../views/LoginView";
Vue.use(IonicVueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component: LoginView
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tabs,
    children:[{
      path: 'booking',
      name: 'booking',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

    },{
      path: 'restaurant',
      name: 'restaurant',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }]
  },{ path: "/", redirect: "/tab/booking" },
  {path:"/restaurantInfo", name: 'RestaurantInfo', component:RestInfo}
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
