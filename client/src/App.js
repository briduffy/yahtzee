import React from 'react'
import Game from './components/Game'
import { Route, Switch } from 'react-router-dom'
import { loginUser, register, logout } from './reducers/user'
import { 
  ProtectedRoute,
  Login,
  Register,
  NavBar,
} from '@devpoint/dps-react-kit'
import FetchUser from './components/FetchUser'
import Scores from './components/Scores'

const links = [
  { text: 'Scores', url: '/scores' }
]

const App = () => (
  <>
    <NavBar handleLogout={logout} authRoutes={links}/>
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Game} />
        <ProtectedRoute exact path="/scores" component={Scores} />
        <Route
          exact
          path="/login"
          render={ props => <Login {...props} handleLogin={loginUser}  /> }
        />
        <Route
          exact
          path="/register"
          render={ props => <Register {...props} registerUser={register} /> }
        />
      </Switch>
    </FetchUser>
  </>
)

export default App
