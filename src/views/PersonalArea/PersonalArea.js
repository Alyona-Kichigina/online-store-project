import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export const fetchProductLike = 'fetchProductLike'

export default {
  state: {
    listOfProductsLike: {},
    idProductLike: []
  },
  mutations: {
    saveIdProductLike (state, payload) {
      state.idProductLike.push(payload)
    },
    saveProductLike (state, payload) {
      state.listOfProductsLike = { ...state.listOfProductsLike, ...payload }
    }
  },
  actions: {
    [fetchProductLike]: async ({ commit, getters }) => {
      // доступ к массиву с id
      let id = getters.accessId
      //console.log( id )
      // если длина массива с id больше 0
      if (id.length > 0) {
        try {
          let ProductsId = ''
          id.forEach(function (item, index) {
            // добавляем к имеющемуся id еще один id
            // при чем если id едиственный, то добаляем ?, если нет, то &
            ProductsId = ProductsId + `${index === 0 ? '?' : '&'}id=${item}`
          })
          // делаем запрос на сервер с получивщейся строкой с id товара
          const { data } = await axios.get(`${PRODUCTS_URL}${ProductsId}`)
          commit('saveProductLike', { data })
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  getters: {
    accessListOfProductLike (state) {
      return state.listOfProductsLike
    },
    accessId (state) {
      return state.idProductLike
    }
  }
}
