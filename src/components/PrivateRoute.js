import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        auth.isAuthenticated()
          ? <Component {...props} />
          : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
      )
    }
  />
)

export default PrivateRoute
