function toLists(listBooking, idUser) {
    let now = new Date()
    let listTemp = []
    let listHistory = []

    listBooking.forEach(o => {
        if (o.idUser == idUser) {
            if (new Date(o.end) < now) {
                listHistory.push(o)
            } else {
                listTemp.push(o)
            }
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
    async loadBooking({commit}, idUser) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        let lists = toLists(listBooking, idUser)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async addBooking({commit}, booking,idUser) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking.push(booking)
        localStorage.listBooking = JSON.stringify(listBooking)
        let lists = toLists(listBooking,idUser)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async removeBooking({commit}, booking,idUser) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        listBooking = listBooking.filter(b => (b.idRestaurant != booking.idRestaurant || b.date != booking.date))
        localStorage.listBooking = JSON.stringify(listBooking)
        let lists = toLists(listBooking,idUser)
        commit('setListBooking', lists[0])
        commit('setListHistory', lists[1])
    },
    async eraseHistory({commit},idUser) {
        let listBooking = (localStorage.listBooking) ? JSON.parse(localStorage.listBooking) : []
        let lists = toLists(listBooking,idUser)
        console.log(lists)
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
