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

const App = () => (
  <>
    <NavBar handleLogout={logout} />
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path="/" component={Game} />
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
