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
    },
    saveProductById (state, payload) {
      state.listOfProductById = { ...state.listOfProductById, ...payload }
    }
  },
  actions: {
    [fetchProductById]: async ({ commit, getters }, { token }) => {
      let id = getters.accessListId
      id.push(token)
      //console.log( id )
      if (id.length > 0) {
        try {
          let ProductsId = ''
          id.forEach(function (item, index) {
            ProductsId = ProductsId + `${index === 0 ? '?' : '&'}id=${item}`
          })
          const { data } = await axios.get(`${PRODUCTS_URL}${ProductsId}`)
          commit('saveProductById', { data })
        } catch (e) {
          console.log(e)
        }
      }
    },
    [initIdProduct]: async ({ dispatch }) => {
      // Сохраняет данные в текущий local store
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
