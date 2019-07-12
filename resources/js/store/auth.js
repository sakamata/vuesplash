import Axios from "axios";

const state = {
    user: null
}

const getters = {}

// nutations の第一引数は必ず state とする 仮引数は　第二引数で渡す
const mutations = {
    setUser ( state, user) {
        state.user = user
    }
}

const actions = {
    // アクションの第一引数は context で決め打ち context.commit メソッド等が入っている
    async register (context, data) {
        const response =  await axios.post('/api/register', data)
        context.commit('setUser', response.data)
    },
    async login (context, data) {
        const responce = await axios.post('/api/login', data)
        context.commit('setUser', responce.data)
    },
    async logout (context) {
        const responce = await axios.post('/api/logout')
        context.commit('setUser', null)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

