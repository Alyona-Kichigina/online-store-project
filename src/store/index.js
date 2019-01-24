import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../views/Shop/shop'
import user from './user'
import newList from './newList'
import auth from './modules/auth'
import cart from '@/views/Cart/cart'
import productPage from '@/views/ProductPage/productPage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop, user, newList, auth, cart, productPage
  }
})
