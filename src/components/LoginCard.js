import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'
import Divider from 'antd/lib/divider'
import { colors, shadows } from '../constants/styles'

const LoginCard = props => (
  <Wrapper>
    <Inner>
      <Icon type="line-chart" style={{ fontSize: 50, color: colors.blue }} />
      <Divider>{process.env.APP_NAME || 'App Name'}</Divider>
      {props.welcomeText ? <p>{props.welcomeText}</p> : null}
      <Button
        type="primary"
        ghost
        icon="login"
        onClick={props.onLogin}
      >
        {props.loginText}
      </Button>
    </Inner>
  </Wrapper>
)

LoginCard.propTypes = {
  onLogin: PropTypes.func.isRequired,
  loginText: PropTypes.string,
  welcomeText: PropTypes.string,
}

LoginCard.defaultProps = {
  loginText: 'Please Login',
  welcomeText: undefined,
}

const Wrapper = styled.div`
  width: 100&;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgGrey};
`

const Inner = styled.div`
  padding: 20px;
  width: 400px;
  max-width: 98vw;
  text-align: center;
  box-shadow: ${shadows.three};
`

// const IconWrap = styled.div`
// display: inline-block;
// border: 3px solid ${colors.blue};
// padding: 10px;
// border-radius: 100%;
// `

export default LoginCard
