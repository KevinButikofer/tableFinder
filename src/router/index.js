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
      path: 'booking',
      name: 'booking',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        booking: () =>
            import(/* webpackChunkName: "tab1" */ "@/views/About.vue")
      },
    },{
      path: 'restaurant',
      name: 'restaurant',
      components: {
        restaurant: () =>
            import(/* webpackChunkName: "tab1" */ "@/views/RestaurantView.vue")
      },
      children:[{
        path: 'search',
        name: 'search',
        components: {
          search: () =>
              import(/* webpackChunkName: "tab1" */ "@/components/SearchInfo.vue")
        }}, { path: "", redirect: "/tab/restaurant/search" },
        { path: "booking", redirect: "/tab/booking" }],

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
