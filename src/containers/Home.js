import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  logout = () => {
    this.props.auth.logout()
  }
  render() {
    return (
      <div>
        <h1>Youre logged in</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
