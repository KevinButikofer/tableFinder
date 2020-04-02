import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')