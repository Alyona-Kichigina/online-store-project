import axios from 'axios'
import { PRODUCTS_URL } from '../../config'

export default {
  state: {
    listOfProducts: [],
    // массив для резервного копирования
    listOfProductsResource: [],
    page: 1,
    loading: false
  },
  mutations: {
    saveInStoreProducts (state, payload) {
      state.listOfProducts = payload
      state.listOfProductsResource = payload
    },
    // фильтр по названию
    filterProductsByTitle (state, payload) {
      if (payload.length !== 0) {
        state.listOfProducts = state.listOfProductsResource.filter(
          (product) => product.name.includes(payload)
        )
      } else {
        state.listOfProducts = state.listOfProductsResource
      }
    },
    // фильтр по цвету
    filterProductsByColor (state, payload) {
      // если что то приходит, то выполняем фильтрацию
      if (payload.length !== 0) {
        state.listOfProducts = state.listOfProductsResource.filter(product => payload.includes(product.color))
        // если не чего не приходит, выводим все
      } else {
        state.listOfProducts = state.listOfProductsResource
      }
    },
    filterProductByCategory (state, payload) {
      if (payload.length !== 0) {
        state.listOfProducts = state.listOfProductsResource.filter(product => payload.includes(product.category))
      } else {
        state.listOfProducts = state.listOfProductsResource
      }
    },
    startFetchProducts (state) {
      state.loading = true
    }
  },
  actions: {
    async fetchProducts ({ commit }, { page = 1, quantity = 8, filters = {} } = {}) {
      try {
        let filtersStr = ''
        Object.entries(filters).forEach((item) => {
          switch (item[0]) {
            case 'colors': item[1].forEach(color => {
              filtersStr = `${filtersStr}&color=${color}`
            })
              break
            case 'priceRange': filtersStr = `${filtersStr}&price_gte=${item[1][0] * 100}&price_lte=${item[1][1] * 100}`
              break
            case 'categoryProduct': filtersStr = `${filtersStr}&category=${item[1]}`
              break
          }
        })
        commit('startFetchProducts')
        const { data } = await axios.get(`${PRODUCTS_URL}?_page=${page}&_limit=${quantity}${filtersStr}`)
        // присваиваем данные с сервера в listOfProducts
        commit('saveInStoreProducts', data)
        // if (data.length > 0) {
        //   commit('saveInStoreProducts',{data, page})
        // }
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    // получаем данные items внутри хранилища
    items (state) {
      return state.items
    },
    // выодит список продуктов
    productList (state) {
      return state.listOfProducts
    }
  }
}
