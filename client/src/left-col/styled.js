import styled from '@emotion/styled'

export const Section = styled.div`
  color: #aaa;
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px 0;
`
export const Filter = styled.span`
  border: 1px solid #90CAF9;
  border-radius: 20px;
  line-height: 20px;
  padding: 0 10px;
  text-transform: capitalize;
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  
  &:hover {
    background: #E3F2FD;
  }
  
  &.active {
    background: #90CAF9;
  }
`