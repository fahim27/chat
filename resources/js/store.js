import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {


    userList: []

}
const getters = {

    userList(state) {
        return state.userList;
    }

}
const actions = {

    userList(context) {
        Axios.get('/users/list')
            .then(resp => {
                context.commit('userList', resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

}
const mutations = {
    userList(state, payload) {
        return state.userList = payload;
    }

}

const store = new Vuex.Store({

    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions

})

global.store = store;

export default store