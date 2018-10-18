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

const Game = () => (
  <Grid>
    <Grid.Row>
      <BoardContainer width={10}>
        <Board />
      </BoardContainer>
      <ScoreContainer width={6}>
        <ScoreCard />
      </ScoreContainer>
    </Grid.Row>
  </Grid>
)

export default Game
