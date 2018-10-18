import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const BASE_URL = ''

export const login = (user) => {
  return { type: LOGIN, user }
}

export const loginUser = (email, password, history) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/auth/sign_in`, { email, password })
      .then( res => {
        dispatch(login(res.data.data))
        history.push('/')
      })
  }
}

export const register = (email, password, passwordConfirmation, history) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/auth`, { email, password, passwordConfirmation })
      .then( res => {
        dispatch(login(res.data.data))
        history.push('/')
      })
  }
}

export const logout = (history) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/api/auth/sign_out`)
      .then( res => dispatch({ type: LOGOUT }) )
  }
}

export default ( state = {}, action ) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return {}
    default:
      return state
  }
}
