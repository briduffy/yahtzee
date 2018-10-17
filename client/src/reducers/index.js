import { combineReducers } from 'redux'
import currentGame from './currentGame'

const rootReducer = combineReducers({
  currentGame,
})

export default rootReducer