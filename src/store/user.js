import axios from 'axios'
import { PRODUCTS_URL_LETTERS } from '../config'

export default {
  state: {
    user: null
  },
  mutations: {
    setAuthState (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async sendingLetter ({commit}) {
      const { data } = await axios.post(PRODUCTS_URL_LETTERS)
      commit('setAuthState', data)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
