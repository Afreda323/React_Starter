import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import Dropdown from 'antd/lib/dropdown'
import { Header } from 'antd/lib/layout'

import { colors, shadows } from '../constants/styles'

const MenuItems = ({ onLogout }) => (
  <Menu>
    <Menu.Item key="0">
      Menu Item 1
    </Menu.Item>
    <Menu.Item key="2">
      Menu Item 2
    </Menu.Item>
    <Menu.Item key="3">
      <Button
        type="primary"
        ghost
        icon="login"
        onClick={onLogout}
      >
        Logout
      </Button>
    </Menu.Item>
  </Menu>
)

const TopBar = ({ onLogout }) => (
  <Header style={{ background: 'white', boxShadow: shadows.two, height: 50 }}>
    <Inner>
      <Dropdown
        overlay={MenuItems({ onLogout })}
        placement="bottomRight"
        trigger={['click']}
      >
        <MenuButton>
          <Icon type="ellipsis" style={{ fontSize: 20 }} />
        </MenuButton>
      </Dropdown>
    </Inner>
  </Header>
)

TopBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
}

// const Outer = styled.div`
//   height: 50px;
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   box-shadow: ${shadows.two};
//   background-color: white;
// `
const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuButton = styled.span`
  cursor: pointer;
  color: ${colors.blue};
`

export default TopBar
