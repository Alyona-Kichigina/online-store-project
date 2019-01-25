import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export default {
  state: {
    listOfProducts: []
  },
  mutations: {
    // выводим товар по id
    saveInStoreProductPage (state, payload) {
      state.listOfProducts = payload
    }
  },
  actions: {
    // выводим товар по id
    async fetchProductPage ({ commit }) {
      try {
        const { data } = await axios.get(`${PRODUCTS_URL}`)
        commit('saveInStoreProductPage', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    // выводит продукт по id
    productById (state) {
      return productId => {
        return state.listOfProducts.find(ad => ad.id === productId)
      }
    }
  }
}
