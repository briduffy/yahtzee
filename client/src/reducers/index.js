import { combineReducers } from 'redux'
import currentGame from './currentGame'
import user from './user'

const rootReducer = combineReducers({
  currentGame,
  user,
})

export default rootReducer