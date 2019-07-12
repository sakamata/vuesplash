import Axios from "axios";

const state = {
    user: null
}

const getters = {
    check: state => !! state.user,
    username: state => state.user ? state.user.name : ''
}

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
        const response = await axios.post('/api/login', data)
        context.commit('setUser', response.data)
    },
    async logout (context) {
        const response = await axios.post('/api/logout')
        context.commit('setUser', null)
    },
    async currentUser (context) {
        const response = await axios.get('/api/user')
        const user = response.data || null
        context.commit('setUser', user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

