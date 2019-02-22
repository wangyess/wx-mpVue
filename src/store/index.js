import Vue from 'vue'
import Vuex from 'vuex'
import indexPage from './indexPage'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    indexPage
  }
})

export default store
