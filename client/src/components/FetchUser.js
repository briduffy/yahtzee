import { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/user'
import axios from 'axios'

class FetchUser extends Component {
  state = { loaded: false }

  componentDidMount() {
    const { isAuthenticated, dispatch } = this.props
    if (isAuthenticated) {
      this.loaded()
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/valdiate_token')
      }
    }
  }


  render() {
    return this.state.loaded ? this.props.children : null
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.id }
}

export default connect(mapStateToProps)(FetchUser)