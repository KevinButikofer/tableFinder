const state = {
    idUser:0,
    username:'',
    connected:true,
    name:''
};
const getters = {
    idUser: (state) => state.idUser,
    username: (state) => state.username,
    connected: (state) => state.connected,
    name: (state) => state.name,
};
const actions = {
    loadUser({commit}){
        if(localStorage.user){
            let user = JSON.parse(localStorage.user)
            console.log(user.id)
            commit('setUserId',user.id)
            commit('setUserName',user.username)
            commit('setName',user.name)
            commit('setConnected',true)
        }
        else{
            commit('setConnected',false)
        }
    },
    loginStore({commit},user){
        commit('setUserId',user.id)
        commit('setUserName',user.username)
        commit('setName',user.name)
        commit('setConnected',true)
        localStorage.user = JSON.stringify(user)
    },
    logout({commit}){
        localStorage.removeItem('user')
        commit('setConnected',false)
    }

};
const mutations = {
    setUserId: (state, id) => (state.idUser = id),
    setUserName: (state, username) => (state.username = username),
    setName: (state, name) => (state.name = name),
    setConnected: (state, connected) => (state.connected = connected),
};

export default {
    state,
    getters,
    actions,
    mutations
}
