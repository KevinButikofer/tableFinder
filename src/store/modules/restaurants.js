// root state object.
// each Vuex instance is just a single state tree.
const state = {
  "restaurants": [
    {
      "name": "Le cerf",
      "street": "Rue de la paix 4",
      "city": "Cooltown",
      "npa": 2678,
      "lng": 7.243874073,
      "lat": 47.19255588,
      "tables": [
        {
          "number" : 1,
          "capacity" : 4,
          "booking" : [
              {"person" : 3, "start" : 18, "end" : 20, },
              {"person" : 4, "start" : 21.5, "end" : 22, },
            ]
        },{
          "number" : 2,
          "capacity" : 6,
          "booking" : [
              {"person" : 5, "start" : 18.5, "end" : 21, }
            ]
        }
        ]
    },
    {
      "name": "Le Soleil",
      "street": "Rue de la Rauracie 12",
      "city": "Cooltown",
      "npa": 2678,
      "lng": 7.243874073,
      "lat": 47.19255588,
      "tables": [
        {
          "number" : 1,
          "capacity" : 4,
          "booking" : [
              {"person" : 3, "start" : 18, "end" : 20, },
              {"person" : 4, "start" : 21.5, "end" : 22, },
            ]
        },{
          "number" : 2,
          "capacity" : 6,
          "booking" : [
              {"person" : 5, "start" : 18.5, "end" : 21, }
            ]
        }
        ]
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