import axios from 'axios'

const ROLL_DICE = 'ROLL_DICE'
const TOGGLE_KEPT = 'TOGGLE_KEPT'

export const rollDice = () => {
  return (dispatch, getState) => {
    const { keep, dice } = getState().currentGame
    const newDice = dice.map( (d, i) => {
      if (keep.includes(i))
        return d
      return Math.floor(Math.random() * 6 ) + 1
    })
    dispatch({ type: ROLL_DICE, dice: newDice })
  }
}

export const toggleKept = (i) => {
  return (dispatch, getState) => {
    const { keep }= getState().currentGame
    let updated
    if (keep.includes(i))
      updated = keep.filter( d => d !== i )
    else
      updated = [...keep, i]

    dispatch({ type: TOGGLE_KEPT, keep: updated })
    }
}

export default (
  state = {
    roll: 0,
    dice: [...new Array(5)],
    keep:[]
  },
  action
) => {
  switch(action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
        roll: state.roll + 1
      }
    case TOGGLE_KEPT:
      return {
        ...state,
        keep: action.keep
      }
    default:
      return state
  }
}

