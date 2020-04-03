import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: () =>
              import(/* webpackChunkName: "home" */ '@/views/Home.vue')
      },
      {
          path: '/about',
          name: 'about',
          component: () =>
              import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      {
        path: '/restaurantsview',
        name: 'restaurantsview',
        component: () =>
        import(/* webpackChunkName: "restaurantsview" */ '@/views/RestaurantsView.vue')
      },
  ]
});
