const state = {
    localisation: '',
    foodStyle: [],
    date: new Date(),
    startHour : new Date(),
    toHour : new Date(),
    peopleNumber : 1,
    latitude: '',
    longitude:'',
    isGpsOk: false,
    showResult: false,
};
const getters = {
    localisation: (state) => state.localisation,
    foodStyle: (state) => state.foodStyle,
    date: (state) => state.date,
    startHour: (state) => state.startHour,
    toHour : (state) => state.toHour,
    peopleNumber : (state) => state.peopleNumber,
    latitude: (state) => state.latitude,
    longitude: (state) => state.longitude,
    isGpsOk: (state) => state.isGpsOk,
    showResult: (state) => state.showResult
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
    async fetchLatitude({commit}, lat) {
        commit('setLatitude', lat)
    },
    async fetchLongitude({commit}, long) {
        commit('setLongitude', long)
    },
    async fetchIsGpsOk({commit}, isOk) {
        commit('setIsGpsOk', isOk)
    },
    async fetchShowResult({commit}, isShowingResult) {
        commit('setShowResult', isShowingResult)
    },
};
const mutations = {
    setLocalisation: (state, loc) => (state.localisation = loc),
    setFoodStyle: (state, style) => (state.foodStyle = style),
    setDate: (state, date) => (state.date = date),
    setStartHour: (state, hour) => (state.startHour = hour),
    setToHour: (state, hour) => (state.toHour = hour),
    setPeopleNumber: (state, peopleNumber) => (state.peopleNumber = peopleNumber),
    setLatitude: (state, lat) => (state.latitude = lat),
    setLongitude: (state, long) => (state.longitude = long),
    setIsGpsOk: (state, isOK) => (state.isGpsOk = isOK),
    setShowResult: (state, isShowingResult) => (state.showResult = isShowingResult),
};

export default {
    state,
    getters,
    actions,
    mutations
}
