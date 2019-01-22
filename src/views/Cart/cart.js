import axios from 'axios'


export default {
	state: {
		productListInBasket: []
	},
	mutations: {
		saveInStorePeoples (state, payload) {
			state.listOfPeoples = payload
		}
	},
	actions: {
		async fetchPeoples ({ commit }) {
			try {
				const { data } = await axios.get()
				commit('saveInStorePeoples', data)
			} catch (e) {
				console.log(e)
			}
		}
	},
	getters: {
		peoplesList (state) {
			return state.listOfPeoples
		}
	}
}
