const state = {
    localisation: '',
    foodStyle: [],
    date: new Date(),
    startHour : new Date(),
    toHour : new Date(),
    peopeNumber : 0,
};
const getters = {
    localisation: (state) => state.localisation,
    foodStyle: (state) => state.foodStyle,
    date: (state) => state.date,
    startHour: (state) => state.startHour,
    toHour : (state) => state.toHour,
    peopeNumber : (state) => state.peopeNumber,
};
const actions = {
    async fetchLocalisation({commit}, loc) {
        commit('setLocalisation', loc)
    },
    async fetchFoodStyle({commit}, style) {
        commit('setFoodStyle', style)
    },
    async fetchDate({commit}, date) {
        commit('setDate', date)
    },
    async fetchStartHour({commit}, hour) {
        commit('setStartHour', hour)
    },
    async fetchToHour({commit}, hour) {
        commit('setToHour', hour)
    },
    async fetchPeopleNumber({commit}, peopleNumber) {
        commit('setPeopleNumber', peopleNumber)
    },
};
const mutations = {
    setLocalisation: (state, loc) => (state.localisation = loc),
    setFoodStyle: (state, style) => (state.foodStyle = style),
    setDate: (state, date) => (state.date = date),
    setStartHour: (state, hour) => (state.startHour = hour),
    setToHour: (state, hour) => (state.toHour = hour),
    setPeopleNumber: (state, peopeNumber) => (state.peopeNumber = peopeNumber),
};

export default {
    state,
    getters,
    actions,
    mutations
}
