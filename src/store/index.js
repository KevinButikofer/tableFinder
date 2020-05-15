import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import infoClient from "./modules/infoClient";
import selectedRest from "./modules/selectedRest";
Vue.use(Vuex)


// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    modules: {
        users,
        infoClient,
        selectedRest
      },
})
