import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'
import peoples from './peoples'
import newList from './newList'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads, user, peoples, newList, auth
  }
})
