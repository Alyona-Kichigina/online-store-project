import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export const fetchProductById = 'fetchProductById'
export const initIdProduct = 'initIdProduct'

export default {
  state: {
    // список товаров
    listOfProductById: { data: [] },
    // детальная информация по товару
    productDetails: [],
    token: undefined
  },
  mutations: {
    // добавляем id товара в массив
    saveIdProduct (state, id) {
      // проверяем есть ли это id
      const currentProductIndex = state.productDetails.findIndex(({ id: ProductID }) => id === ProductID)
      const newCartState = currentProductIndex >= 0
        // если id есть, то прибавляем количество товара
        ? state.productDetails.map((item, index) => {
          if (index === currentProductIndex) item.count += 1
          return item
          // если нет id, то добавляем id и count: 1 внутрь productDetails
        }) : [...state.productDetails, { id, count: 1 }]
      // при каждом добавлении в корзину обновляем localStorage
      // добавляем массив строкой
      localStorage.setItem('productInCart', JSON.stringify(newCartState))
      // добавляем id товаров в массив
      state.productDetails = newCartState
    },
    [initIdProduct]: (state) => {
      // TODO: обновить комментарии
      // Читает данные из localStorage и парсит строку в массив из localStorage
      const productInCart = JSON.parse(localStorage.getItem('productInCart'))
      if (productInCart) {
        state.productDetails = productInCart
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
          id.forEach(function ({ id }, index) {
            // добавляем к имеющемуся id еще один id
            // при чем если id едиственный, то добаляем ?, если нет, то &
            ProductsId = ProductsId + `${index === 0 ? '?' : '&'}id=${id}`
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
      return state.productDetails
    }
  }
}
