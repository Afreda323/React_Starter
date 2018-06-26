import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Menu, { SubMenu } from 'antd/lib/menu'
import { Sider } from 'antd/lib/layout'
import Icon from 'antd/lib/icon'
import { shadows } from '../constants/styles'

const Sidebar = ({
  logoSrc,
  logoAlt,
  collapsed,
  onCollapse,
}) => (
  <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      background: '#fff',
      boxShadow: shadows.two,
    }}
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
  >
    <Logo src={logoSrc} logoAlt={logoAlt} collapsed={collapsed} />
    <Menu
      mode="inline"
      theme="light"
      defaultSelectedKeys={['1']}
      inlineCollapsed
    >
      <Menu.Item key="1">
        <Icon type="mail" />
        <span>Navigation One</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="calendar" />
        <span>Navigation Two</span>
      </Menu.Item>
      <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub1-2" title="Submenu">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
)

Sidebar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func.isRequired,
}

Sidebar.defaultProps = {
  logoSrc: '',
  logoAlt: 'Logo',
  collapsed: false,
}

// const Wrapper = styled.div`
//   height: 100vh;
//   background-color: white;
// `

const Logo = styled.img`
  width: 100%;
  padding: 20px;
  ${({ collapsed }) => collapsed && 'padding: 20px 0'};
`

export default Sidebar
