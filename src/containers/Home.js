import React, { Component } from 'react'

export default class Home extends Component {
  logout = () => {
    this.props.auth.logout()
  }
  render() {
    return (
      <h1>Youre logged in</h1>
    )
  }
}
