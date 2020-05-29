const state = {
    listBooking: [],
};
const getters = {
    listBooking: (state) => state.listBooking,
};
const actions = {
    async loadBooking({commit}) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        commit('setListBooking', listBooking)
    },
    async addBooking({commit}, booking) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking.append(booking)
        localStorage.listBooking = JSON.stringify(listBooking)
        commit('setListBooking', listBooking)
    },
    async removeBooking({commit}, booking) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking = listBooking.filter(b => (b.id != booking.id || b.date != booking.date))
        localStorage.listBooking = JSON.stringify(listBooking)
        commit('setListBooking', listBooking)


    }
};
const mutations = {
    setListBooking: (state, listBooking) => (state.listBooking = listBooking.sort((a, b) => (a.date > b.date) ? -1 : 1)),
};

export default {
    state,
    getters,
    actions,
    mutations
}
