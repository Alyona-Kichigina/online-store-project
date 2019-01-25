import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export const fetchProductById = 'fetchProductById'
export const initIdProduct = 'initIdProduct'

export default {
  state: {
    // список товаров
    listOfProductById: {},
    // детальная информация по товару
    productDetails: {
      id: [],
      count: 1
    },
    token: undefined
  },
  mutations: {
    // добавляем id товара в массив
  	saveIdProduct (state, payload) {
      state.productDetails.id.push(payload)
    },
    // добавляем товар в список
    saveProductById (state, payload) {
      state.listOfProductById = { ...state.listOfProductById, ...payload }
    }
  },
  actions: {
    [fetchProductById]: async ({ commit, getters }, { token }) => {
      // доступ к массиву с id
      let id = getters.accessListId
      id.push(token)
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
    // доступ к списку товаров
    accessListOfProductById (state) {
      return state.listOfProductById
    },
    // доступ к массиву с id
    accessListId (state) {
      return state.productDetails.id
    }
  }
}
