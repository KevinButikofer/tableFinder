import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


Vue.config.productionTip = false;
import Ionic from '@ionic/vue';
Vue.use(Ionic);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
