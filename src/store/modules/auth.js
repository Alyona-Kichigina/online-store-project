import axios from 'axios'

export const LOGIN = 'LOGIN'

const state = {
  userName: undefined,
  token: undefined,
  role: undefined
}

const getters = {
  userName: state => state.userName,
  token: state => state.token,
  role: state => state.role
}
const mutations = {
  // { name, role, token } с бд
  setLetter (state, { name, role, token }) {
    state.userName = name
    state.token = token
    state.role = role
  }
}

const actions = {
  [LOGIN]: async ({ commit }) => {
    try {
      // в { data } ответ от сервера
      const { data } = await axios.get('/api/Login')
      commit('setLetter', data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
