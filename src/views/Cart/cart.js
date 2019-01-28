import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export const fetchProductById = 'fetchProductById'
export const initIdProduct = 'initIdProduct'

export default {
  state: {
    // список товаров
    listOfProductById: {},
    // детальная информация по товару
    productDetails: [
	    { id: String },
	    { count: Number }
    ],
    token: undefined
  },
  mutations: {
    // добавляем id товара в массив
    saveIdProduct (state, payload) {
    	console.log(state.productDetails, payload, [state.productDetails.count])
		    //state.productDetails.id.includes(payload) ? state.productDetails['count'] = 1, state.productDetails.count)
      // добавляем в массив новый объект
      const newCartState = [...state.productDetails.id, payload]
      // при каждом добавлении в корзину обновляем localStorage
      // добавляем массив строкой
      localStorage.setItem('productInCart', JSON.stringify(newCartState))
      // добавляем id товаров в массив
      state.productDetails.id = newCartState
    },
    [initIdProduct]: (state) => {
      // TODO: обновить комментарии
      // Читает данные из localStorage и парсит строку в массив из localStorage
      const productInCart = JSON.parse(localStorage.getItem('productInCart'))
      if (productInCart) {
        state.productDetails.id = productInCart
      }
    },
    // добавляем товар в список
    saveProductById (state, payload) {
      state.listOfProductById = { ...state.listOfProductById, ...payload }
    }
  },
  actions: {
    [fetchProductById]: async ({ commit, getters }) => {
      // доступ к массиву с id
      let id = getters.accessListId
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
