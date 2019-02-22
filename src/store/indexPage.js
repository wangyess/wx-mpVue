const indexPage = {
  namespaced: true,
  state: {
    zn_CH: true,
    name: '王野',
    age: '23',
    sex: '男',
    introduce: '签名',
    details: '用树去接触星辰是大地的渴望'
  },
  getters: {
    mergeText (state) {
      return state.introduce + ' : ' + state.details
    }
  },
  mutations: {
    ChineseName (state) {
      state.name = '王野'
      state.zn_CH = true
    },
    EnglishName (state) {
      state.name = 'wangye'
      state.zn_CH = false
    }
  },
  actions: {
    switchName ({ state, commit }) {
      setTimeout(function () {
        state.zn_CH ? commit('EnglishName') : commit('ChineseName')
      }, 2000)
    }
  }
}

export default indexPage
