import React from 'react'
import axios from 'axios'
import {
  Button,
  Header,
  List,
  Container,
} from 'semantic-ui-react'

class Scores extends React.Component {
  state = { scores: [] }

  componentDidMount() {
    axios.get('/api/scores')
      .then( res => this.setState({ scores: res.data }) )
  }

  render() {
    const { scores } = this.state

    return (
      <Container>
        <Header as="h2">Scores</Header>
        <List divided>
          { scores.map( s =>
              <List.Item key={s.id}>
                <List.Content>
                  <List.Header>{s.value}</List.Header>
                  <List.Description>{s.email}</List.Description>
                </List.Content>
              </List.Item>
            )
          }
        </List>
      </Container>
    )
  }
}

export default Scores
