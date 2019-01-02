import axios from 'axios'
import { PRODUCTS_URL_PEOPLES } from '../config'

export default {
  state: {
    listOfPeoples: []
  },
  mutations: {
    saveInStorePeoples (state, payload) {
      state.listOfPeoples = payload
    }
  },
  actions: {
    async fetchPeoples ({ commit }) {
      try {
        const { data } = await axios.get(PRODUCTS_URL_PEOPLES)
        commit('saveInStorePeoples', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    peoplesList (state) {
      return state.listOfPeoples
    }
  }
}
