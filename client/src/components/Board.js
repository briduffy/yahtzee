import React from 'react'
import Dice from './Dice'
import { Grid, Button, Divider } from 'semantic-ui-react'

const Board = ({ roll, dice, rollDice }) => {
  const MaxRoll = roll === 3
  const disabled = MaxRoll ? { disabled: true } : {}
  return (
    <Grid>
      <Grid.Row>
        <Button
          fluid
          onClick={rollDice}
          {...disabled}
        >
          Roll Dice
        </Button>
        <Grid.Column width={16}>
          <Divider hidden/>
        </Grid.Column>
        { roll > 0 && dice.map( (d, i) => <Dice key={i} value={d} /> )}
      </Grid.Row>
    </Grid>
  )
}

export default Board
