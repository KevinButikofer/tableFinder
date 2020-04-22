const state = {
    localisation: '',
    foodStyle: ''
};
const getters = {
    localisation: (state) => state.localisation,
    foodStyle: (state) => state.foodStyle
};
const actions = {
    async fetchLocalisation({commit}, loc) {
        commit('setLocalisation', loc)
    },
    async fetchFoodStyle({commit}, style) {
        commit('setFoodStyle', style)
    },
};
const mutations = {
    setLocalisation: (state, loc) => (state.localisation = loc),
    setFoodStyle: (state, style) => (state.foodStyle = style),
};

export default {
    state,
    getters,
    actions,
    mutations
}
