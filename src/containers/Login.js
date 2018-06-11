import React, { Component } from 'react'

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
        {isAuthenticated()
          ? <button onClick={this.logout}>Logout</button>
          : <button onClick={this.login}>Login</button>}
      </div>
    )
  }
}
