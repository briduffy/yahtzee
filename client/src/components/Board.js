import React from 'react'
import { Header, Grid, Button, Divider } from 'semantic-ui-react'
import Dice from './Dice'
import { connect } from 'react-redux'
import { rollDice, newGame, postScore } from '../reducers/currentGame'

const checkEndGame = (scores, dispatch) => {
  let gameOver = true
  scores.map( s => s.score ) 
    .forEach( score => {
      if (score === null)
        gameOver = false
    })

  if (gameOver) 
    dispatch( postScore(calcScores(scores)) )

  return gameOver
}

const calcScores = (scores) => {
  return scores.map( s => s.score )
    .reduce( (total, score) => total + score, 0 )
}

const Board = ({ 
  roll, 
  dice, 
  keep,
  scores,
  dispatch,
}) => {
  const maxRoll = roll === 3
  const disabled = maxRoll ? { disabled: true } : {}
  const gameOver = checkEndGame(scores, dispatch)
  return (
    <Grid>
      <Grid.Row>
        <Button
          fluid
          onClick={ gameOver ? 
            () => dispatch(newGame())
            :
            () => dispatch(rollDice())
          }
          {...disabled}
        >
          { gameOver ? 'New Game' : 'Roll' }
        </Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { roll > 0 && 
          dice.map( (d,i) => {
            const kept = keep.includes(i)
            return (
              <Dice 
                key={i} 
                value={d} 
                kept={kept}
                index={i}
              /> 
            ) 
          })
        }
      </Grid.Row>
      <Grid.Row columns={1} textAlign="center">
        <Grid.Column>
          <Header>
            Total: {calcScores(scores)}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  const { dice, keep, roll, scores } = state.currentGame
  return {
    dice, 
    keep,
    roll,
    scores,
  }
}

export default connect(mapStateToProps)(Board)
