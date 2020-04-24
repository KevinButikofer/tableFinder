import Vue from 'vue'
import {IonicVueRouter} from "@ionic/vue";
import Tabs from "../views/Tabs";
import RestInfo from "../views/RestaurantInfos";
Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/tab',
    name: 'Tab',
    component: Tabs,
    children:[{
      path: 'home',
      name: 'home',


    }, {
      path: 'about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        about: () =>
            import(/* webpackChunkName: "tab1" */ "@/views/About.vue")
      },
    },{
      path: 'restaurant',
      name: 'restaurant',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }]
  },{ path: "/", redirect: "/tab/home" },
  {path:"/restaurantInfo", name: 'RestaurantInfo', component:RestInfo}
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
