// root state object.
// each Vuex instance is just a single state tree.
const state = {
    "users": [
      {
        "name": "tata",
        "id" : "0",
      },
      {
        "name": "toto",
        "id" : "1",
      },
    ]
  }
  
  // mutations are operations that actually mutate the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
  }
  
  // getters are functions.
  const getters = {
  }
  export default {
      namespaced: true,
      state,
      getters,
      actions,
      mutations
    }