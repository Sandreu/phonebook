import styled from '@emotion/styled'
import PARAMS from '../theme-vars'

const smaller = 10
const _margin = Math.floor((PARAMS.headSize-PARAMS.contentSize+smaller)/2) 

export const Input = styled.input`
  margin-top: ${_margin}px;
  height: ${PARAMS.contentSize-smaller}px;
  line-height: ${PARAMS.contentSize-smaller}px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0,0,0,0);
  &:focus {
    background: white;
    color: rgba(0,0,0,0.87);
    border: 1px solid #578ec6;
  }
`