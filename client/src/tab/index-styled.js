import styled from '@emotion/styled'

const padding = 20

export const Table = styled.table`
  text-align: left;
  width: 100%;
  & td, & th {
    vertical-align: top;
    padding: ${padding}px 10px;
    & p {
      margin: 0;
    }
  }
`
export const TheadRow = styled.tr`
  color: #5f6368;
  font-weight: bold;
  &>th {
    padding: ${padding}px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
`