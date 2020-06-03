const state = {
    selectedRestaurant: null,
    selectItem: null,
    cancelItem: null,
};
const getters = {
    selectedRestaurant: (state) => state.selectedRestaurant,
    selectItem: (state) => state.selectItem,
    cancelItem: (state) => state.cancelItem,
};
const actions = {
    async fetchSelectedRestaurant({commit}, selectedRestaurant) {
        commit('setSelectedRestaurant', selectedRestaurant)
    },
    fetchSelectItem({commit}, selectitem) {
        commit('setSelectedItem', selectitem)
    },
};
const mutations = {
    setSelectedRestaurant: (state, selectedRestaurant) => (state.selectedRestaurant = selectedRestaurant),
    setSelectedItem: (state, selectitem) => {
        console.log(selectitem)
        state.selectItem = selectitem.item
        state.cancelItem = selectitem.cancel
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
