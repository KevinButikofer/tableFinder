const state = {
    selectedRestaurant: null,
    selectItem: null,
    cancelItem: null,
    book:true
};
const getters = {
    selectedRestaurant: (state) => state.selectedRestaurant,
    selectItem: (state) => state.selectItem,
    cancelItem: (state) => state.cancelItem,
    book: (state) => state.book,
};
const actions = {
    async fetchSelectedRestaurant({commit}, selectedRestaurant) {
        commit('setSelectedRestaurant', selectedRestaurant)
    },
    fetchSelectItem({commit}, selectitem) {
        commit('setSelectedItem', selectitem)
    },
    fetchBook({commit}, book) {
        commit('setBook', book)
    },
};
const mutations = {
    setSelectedRestaurant: (state, selectedRestaurant) => (state.selectedRestaurant = selectedRestaurant),
    setSelectedItem: (state, selectitem) => {
        console.log(selectitem)
        state.selectItem = selectitem.item
        state.cancelItem = selectitem.cancel
    },
    setBook: (state, book) => (state.book = book),

};

export default {
    state,
    getters,
    actions,
    mutations
}
