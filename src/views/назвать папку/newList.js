import axios from 'axios'
import { PRODUCTS_URL_PEOPLES } from '../../config'

export default {
  state: {
    listOfName: []
  },
  mutations: {
    saveInStoreName (state, payload) {
      state.listOfName = payload
    },
    deleteListName (state, {target: { value }}) {
      state.listOfName = state.listOfName.filter(({ id }) => id !== value)
    }
  },
  actions: {
    async fetchNames ({ commit }) {
      try {
        const { data } = await axios.get(PRODUCTS_URL_PEOPLES)
        commit('saveInStoreName', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    namesList (state) {
      return state.listOfName
    }
  }
}
