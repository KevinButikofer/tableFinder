function toLists(listBooking) {
    let now = new Date()
    let timer = new Date().setHours(now.getHours() + 1)
    let listTemp = []
    let listHistory = []

    listBooking.forEach(o => {
        if (new Date(o.date) < timer) {
            listHistory.push(o)
        } else {
            listTemp.push(o)
        }
    })
    return [listTemp, listHistory]

}

const state = {
    listBooking: [],
    listHistory: [],
};
const getters = {
    listBooking: (state) => state.listBooking,
    listHistory: (state) => state.listHistory,
};
const actions = {
    async loadBooking({commit}) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        let lists = toLists(listBooking)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async addBooking({commit}, booking) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking.append(booking)
        localStorage.listBooking = JSON.stringify(listBooking)
        let lists = toLists(listBooking)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async removeBooking({commit}, booking) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking = listBooking.filter(b => (b.id != booking.id || b.date != booking.date))
        localStorage.listBooking = JSON.stringify(listBooking)
        let lists = toLists(listBooking)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async eraseHistory({commit}) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        let lists = toLists(listBooking)
        localStorage.listBooking = JSON.stringify(lists[0])
        commit('setListBooking', lists[0])
        commit('setListHistory', [])
    },

};
const mutations = {
    setListBooking: (state, listBooking) => (state.listBooking = listBooking.sort((a, b) => (a.date > b.date) ? 1 : -1)),
    setListHistory: (state, listHistory) => (state.listHistory = listHistory.sort((a, b) => (a.date > b.date) ? -1 : 1)),

};

export default {
    state,
    getters,
    actions,
    mutations
}
