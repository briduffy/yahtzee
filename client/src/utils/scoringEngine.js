export const singles = (value, dice) => {
  return addDice(dice.filter( d => d === value ))
}

export const addAllDice = (type, dice) => {
  let totals = []

  switch(type) {
    case 'Three Of A Kind':
      totals = validateThreeOfAKind(dice) ? dice : []
      break
    case 'Four Of A Kind':
      totals = validateFourOfAKind(dice) ? dice : []
      break
    default:
      totals = dice
    }
  return addDice(totals)
}

export const staticScore = (type, dice) => {
  switch(type) {
    case 'Full House':
      return validateFullHouse(dice) ? 25 : 0
    case 'Low Straight':
      return validateLowStraight(dice) ? 30 : 0
    case 'High Straight':
      return validateHighStraight(dice) ? 40 : 0
    case 'Yahtzee':
      return validateYahtzee(dice) ? 50 : 0
    default:
      return 0
  }
}

const addDice = (dice) => {
  return dice.reduce( (total, val) =>  { 
    return total + val
  },0)
}

const validateFullHouse = (dice) => {
  let hasTwo = false
  let hasThree = false
  const split = splitArray(dice)
  for ( let arr of split.newArray ) {
    if (arr.length === 3)
      hasThree = true
    if (arr.length === 2)
      hasTwo = true
  }

  return hasTwo && hasThree
}

const validateLowStraight = (dice) => {
  const count = findSeq(dice.sort())
  return count >= 4
}

const validateHighStraight = (dice) => {
  const count = findSeq(dice.sort())
  return count === 5
}

const validateYahtzee = (dice) => {
  let matches = 0
  const val = dice[0]
  matches = dice.filter( d => d === val ).length
  return matches === 5
}

const validateThreeOfAKind = (dice) => {
  let hasScore = false
  const split = splitArray(dice)
  for ( let arr of split.newArray ) {
    if (arr.length >= 3 )
      hasScore = true
  }

  return hasScore
}

const validateFourOfAKind = (dice) => {
  let hasScore = false
  const split = splitArray(dice)
  for ( let arr of split.newArray ) {
    if (arr.length >= 4 )
      hasScore = true
  }

  return hasScore
}

const splitArray = (dice) => {
  let split = dice.sort().reduce( (acc, val) => {
    let inner
    if (acc.previous !== val) {
      inner = []
    } else {
      inner = acc.newArray.pop()
    }

    inner.push(val)
    acc.previous = val
    acc.newArray.push(inner)
    return acc
    }, {
      previous: null,
      newArray: []
  })

  return split
}

const findSeq = (dice) => {
  let uniq = [...new Set(dice)]
  let count = 1
  for (let i = 0; i < uniq.length; i++) {
    if (uniq[i + 1] - 1 === uniq[i]) {
      ++count
    } else {
      break
    }
  }

  return count
}
