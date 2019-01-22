import axios from 'axios'
import { PRODUCTS_URL } from '@/config'

export default {
	state: {
		listOfProductById: []
	},
	mutations: {
		saveProductById (state, payload) {
			state.listOfProductById = { ...state.listOfProductById, ...payload }
			console.log(state.listOfProductById)
		}
	},
	actions: {
		async fetchProductById ({ commit }, id) {
			try {
				const { data } = await axios.get(`${PRODUCTS_URL}/${id}`)
				commit('saveProductById', data)
			} catch (e) {
				console.log(e)
			}
		}
	},
	getters: {
		accesslistOfProductById (state) {
			return state.listOfProductById
		}
	}
}
