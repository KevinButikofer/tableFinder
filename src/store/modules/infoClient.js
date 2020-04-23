const state = {
    localisation: '',
    latitude: '',
    longitude:'',
    foodStyle: []
};
const getters = {
    localisation: (state) => state.localisation,
    foodStyle: (state) => state.foodStyle,
    latitude: (state) => state.latitude,
    longitude: (state) => state.longitude
};
const actions = {
    async fetchLocalisation({commit}, loc) {
        commit('setLocalisation', loc)
    },
    async fetchFoodStyle({commit}, style) {
        commit('setFoodStyle', style)
    },
    async fetchLatitude({commit}, lat) {
        commit('setLatitude', lat)
    },
    async fetchLongitude({commit}, long) {
        commit('setLongitude', long)
    },
};
const mutations = {
    setLocalisation: (state, loc) => (state.localisation = loc),
    setFoodStyle: (state, style) => (state.foodStyle = style),
    setLatitude: (state, lat) => (state.latitude = lat),
    setLongitude: (state, long) => (state.longitude = long),
};

export default {
    state,
    getters,
    actions,
    mutations
}
