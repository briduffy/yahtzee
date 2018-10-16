import React from 'react'
import { Grid, } from 'semantic-ui-react'
import Board from './Board'
import ScoreCard from './ScoreCard'
import styled from 'styled-components'

const FullHeight = styled(Grid.Column)`
  height: 100ch;
`

const BoardContainer = styled(FullHeight)`
  background-color: #AAFFAA;
` 

const ScoreContainer = styled(FullHeight)`
  background-color: #9370DB;
`

class Game extends React.Component {
  state = { roll: 0, keep: [], dice: [...new Array(5)] }

  rollDice = () => {
   const dice = this.state.dice.map( (el, i) => {
     return Math.floor(Math.random() * 6) + 1
   })
   this.setState( state => {
     return { dice, roll: state.roll + 1 }
   })
  }

  render() {
    const { roll, dice } = this.state
    return(
      <Grid>
        <Grid.Row>
          <BoardContainer width={10}>
            <Board
              roll={roll}
              dice={dice}
              rollDice={this.rollDice}
            />
          </BoardContainer>
          <ScoreContainer width={6}>
            <ScoreCard />
          </ScoreContainer>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Game
