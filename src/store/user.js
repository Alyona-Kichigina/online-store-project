import axios from 'axios'
import { PRODUCTS_URL_LETTERS } from '../config'

export default {
  state: {
    user: null
  },
  mutations: {
    setLetter (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async sendingLetter ({commit}) {
      const { data } = await axios.post(PRODUCTS_URL_LETTERS)
      commit('setLetter', data)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
