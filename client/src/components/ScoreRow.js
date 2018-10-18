import React from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { updateScores, resetRoll } from '../reducers/currentGame'
import { 
  singles,
  addAllDice,
  staticScore,
} from '../utils/scoringEngine'

const Pointer = styled(List.Icon)`
  cursor: pointer;
`

class ScoreRow extends React.Component {
  updateScore = (key) => {
    const { currentGame: { dice, scores }, dispatch } = this.props
    const entry = scores.find( d => d.name === key )
    dispatch(resetRoll()) //Student cheating prevention

    if (entry.value)
      entry.score = singles(entry.value, dice)
    else if (entry.addAll)
      entry.score = addAllDice(entry.name, dice)
    else
      entry.score = staticScore(entry.name, dice)

    const newScores = scores.map( score => {
      if (score.name === key)
        return entry
      return score
    })

    dispatch(updateScores(newScores))

  }

  render() {
    const { name, score, currentGame: { roll }} = this.props
    return (
      <List.Item>
        { score === null &&
            <Pointer
              name="check circle outline"
              color="green"
              onClick={ roll !== 0 ? () => this.updateScore(name) : f => f }
            />
        }
        <List.Content>
          <Header as="h4" floated="left">{score || 0}</Header>
          <Header as="h5" floated="right">{name}</Header>
        </List.Content>
      </List.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow)
