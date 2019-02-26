import Vue from 'vue'
import App from './App'
import * as Fly from './utils/fly'
import Store from './store/index'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

Vue.prototype.$http = Fly
Vue.prototype.$store = Store

const app = new Vue(App)
app.$mount()
