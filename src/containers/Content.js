import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import Layout from 'antd/lib/layout'

import Home from './Home'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'

const LOGO = 'http://antfreda.com/img/AntLogo2.png'
const LOGO_ALT = 'Placeholder logo'

class Content extends Component {
  state = {
    collapsedSidebar: false,
  }
  handleCollapse = () => {
    this.setState(ps => ({ collapsedSidebar: !ps.collapsedSidebar }))
  }
  render() {
    const { auth } = this.props
    return (
      <BrowserRouter basename="/app">
        <Layout>
          <Sidebar
            logoSrc={LOGO}
            logoAlt={LOGO_ALT}
            collapsed={this.state.collapsedSidebar}
            onCollapse={this.handleCollapse}
          />
          <Layout style={{ marginLeft: this.state.collapsedSidebar ? 80 : 200 }}>
            <TopBar onLogout={auth.logout} />
            <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Wrapper>
                <Route
                  auth={auth}
                  path="/home"
                  component={props => <Home auth={auth} {...props} />}
                />
              </Wrapper>
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 87px);
`

export default Content
