import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginCard from '../components/LoginCard'

export default class Login extends Component {
  login = () => {
    this.props.auth.login()
  }
  logout = () => {
    this.props.auth.logout()
  }
  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div>
        {isAuthenticated() ? (
          <Redirect to="/home" />
        ) : (
          <LoginCard
            welcomeText="This is a cool app that does some very cool things. In hope you like it."
            onLogin={this.login}
          />
        )}
      </div>
    )
  }
}
