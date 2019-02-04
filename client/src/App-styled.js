import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import PARAMS from './theme-vars'

const _margin = Math.floor((PARAMS.headSize-PARAMS.contentSize)/2)

export const App = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const LeftCol = styled.div`
  margin: 0 ${PARAMS.gutters}px;
`
export const Content = styled.div`
  flex-grow:1;
  position: relative;
  margin-right: ${PARAMS.gutters}px;
`

export const Head = styled.div`
  height: ${PARAMS.headSize}px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: ${PARAMS.contentSize}px;
  margin-top: ${_margin}px;
  float: left;
`

export const AppName = styled.h1`
  display: inline-block;
  font-size: ${PARAMS.appNameSize}px;
  line-height: ${PARAMS.contentSize}px;
  margin-top: ${_margin}px;
`