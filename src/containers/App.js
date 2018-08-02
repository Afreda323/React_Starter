import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from '../store'
import Auth from '../services/Auth'

import Login from './Login'
import Content from './Content'
import Callback from './Callback'

import PrivateRoute from '../components/PrivateRoute'

const auth = new Auth()

const handleAuthentication = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route
          exact
          path="/"
          component={props => <Login auth={auth} {...props} />}
        />
        <PrivateRoute
          auth={auth}
          path="/app"
          component={props => <Content auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback {...props} />
          }}
        />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
