import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export const fetchProductById = 'fetchProductById'
export const initIdProduct = 'initIdProduct'

export default {
  state: {
    listOfProductById: {},
    ListIdProduct: [],
    token: undefined
  },
  mutations: {
  	saveIdProduct (state, payload) {
      state.ListIdProduct.push(payload)
      console.log(state.ListIdProduct)
    },
    saveProductById (state, payload) {
      state.listOfProductById = { ...state.listOfProductById, ...payload }
    }
  },
  actions: {
    [fetchProductById]: async ({ commit, getters }) => {
      let id = getters.accessListId
      try {
        let ProductsId = ''
        id.forEach(function (item) {
          ProductsId = `id=${item}`
        })
        console.log(ProductsId)
        const { data } = await axios.get(`${PRODUCTS_URL}?${ProductsId}`)
        localStorage.setItem('token', data.token)
        commit('saveProductById', { data })
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    [initIdProduct]: async ({ dispatch }) => {
      const token = localStorage.getItem('token')
      // если в token есть данный, то вызываем функцию и передаем данные для авторизации
      if (token) dispatch(fetchProductById, { token })
    }
  },
  getters: {
    accessListOfProductById (state) {
      return state.listOfProductById
    },
    accessListId (state) {
      return state.ListIdProduct
    }
  }
}
