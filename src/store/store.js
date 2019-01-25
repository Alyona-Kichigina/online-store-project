import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../views/Shop/shop'
import newList from '../views/назвать папку/newList'
import auth from './modules/auth'
import cart from '@/views/Cart/cart'
import productPage from '@/views/ProductPage/productPage'
import personalArea from '@/views/PersonalArea/PersonalArea'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop, newList, auth, cart, productPage, personalArea
  }
})
