import axios from 'axios'

export const LOGIN = 'LOGIN'
export const INIT_AUTH = 'INIT_AUTH'

const state = {
  // для того чтобы не затирались эти данные с других вьюексов
  auth: {
    login: undefined,
    token: undefined,
    role: undefined,
    error: undefined
  }
}

const getters = {
  authState: state => state.auth
}
const mutations = {
  setAuthState (state, payload) {
    // то что приходит с бд перезатрет те значения что в стэйте
    state.auth = { ...state.auth, ...payload }
  }
}

const actions = {
  [LOGIN]: async ({ commit }, payload) => {
    try {
      // { data: [data] } - получаем первый объект массива приходящий с бд,
      // для того чтобы не получать целый массив с объектами
      // { params: payload } - передаем в строку Login и password которые введены в форме
      const { data: [data] } = await axios.get('/api/Login', { params: payload })
      // с бэкендем запрос должен быть таким
      // const { data: [data] } = await axios.post('/api/Login', payload)
      // если введенные логин и пароль не совпадают с тем что указаны в базе данных, то выводим ошибку
      // в реальном проекте бэкенд дает ошибку и эта строка не нужна
      if (!data) throw Error('неправильный логин и пароль')
      // в token помешаем то что пришло в ответе от сервера
      localStorage.setItem('token', data.token)
      // все запросы идут через axios и для каждого запроса по умолчанию добавляю заголовок для авторизации
      // пример: при авторизации можно попасть в личный кабинет так как запрос будет передаваться сам
      axios.defaults.headers.common.Authorization = data.token
      // удаляем ошибку
      data.error = undefined
      // вызываем setAuthState
      commit('setAuthState', data)
      // { message } - ошибка от сервера
      // так же ошибка может придти если token просрочился
    } catch ({ message }) {
      // удаляем данные в token
      localStorage.removeItem('token')
      // передаем ошибку от сервера для формы
      commit('setAuthState', { error: message })
    }
  },
  // для того чтобы при обновлении страницы не приходилось вновь заролнять форму
  // а брать ее данные из token в localStorage
  [INIT_AUTH]: async ({ dispatch }) => {
    const token = localStorage.getItem('token')
    // если в token есть данный, то вызываем функцию и передаем данные для авторизации
    if (token) dispatch(LOGIN, { token })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
