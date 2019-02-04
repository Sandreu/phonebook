import styled from '@emotion/styled'

const padding = 20

export const Table = styled.table`
  text-align: left;
  width: 100%;
  border-spacing : 0;
  border-collapse : collapse;
  & td, & th {
    vertical-align: top;
    padding: ${padding}px 10px;
    & p {
      margin: 0;
    }
  }
  & tr:hover>* {
    background: #E3F2FD;
  }
`
export const TheadRow = styled.tr`
  color: #5f6368;
  font-weight: bold;
  text-transform: capitalize;
  &>th {
    padding: ${padding}px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    user-select: none;
    cursor: pointer;
  }
`