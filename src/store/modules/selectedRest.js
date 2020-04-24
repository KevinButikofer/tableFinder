const state = {
    selectedRestaurant: null,
};
const getters = {
    selectedRestaurant: (state) => state.selectedRestaurant,
};
const actions = {
    async fetchSelectedRestaurant({commit}, selectedRestaurant) {
        commit('setSelectedRestaurant', selectedRestaurant)
    },
};
const mutations = {
    setSelectedRestaurant: (state, selectedRestaurant) => (state.selectedRestaurant = selectedRestaurant),
};

export default {
    state,
    getters,
    actions,
    mutations
}
