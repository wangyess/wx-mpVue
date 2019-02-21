import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name: 'wangye',
  age: '24'
}

const getters = {
  getName (state) {
    return state.age
  }
}

const store = new Vuex.Store({
  state,
  getters
})

export default store
