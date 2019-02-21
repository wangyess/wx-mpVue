import Vue from 'vue'
import App from './App'
import * as Fly from './utils/fly'
import Store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$http = Fly
Vue.prototype.$store = Store

const app = new Vue(App)
app.$mount()
