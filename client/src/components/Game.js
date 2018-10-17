import React from 'react'
import { Grid } from 'semantic-ui-react'
import Board from './Board'
import ScoreCard from './ScoreCard'
import styled from 'styled-components'

const FullHeight = styled(Grid.Column)`
  height: 100vh;
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
    //dice = [ 2, 4, 4, 1, 5]
    //keep = [1, 2]
    const { keep } = this.state
    const dice = this.state.dice.map( (el, i) => {
      if (keep.includes(i))
        return el
      return Math.floor(Math.random() * 6) + 1
    })

    this.setState( state => {
      return { dice, roll: state.roll + 1 }
    })
  }

  toggleKept = (i) => {
    const { keep } = this.state
    let updated

    if (keep.includes(i))
      updated = keep.filter( d => d !== i )
    else
      updated = [...keep, i]

    this.setState({ keep: updated })
  }

  render() {
    const { roll, dice, keep } = this.state

    return (
      <Grid>
        <Grid.Row>
          <BoardContainer width={10}>
            <Board 
              roll={roll}
              dice={dice}
              keep={keep}
              rollDice={this.rollDice}
              toggleKept={this.toggleKept}
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
