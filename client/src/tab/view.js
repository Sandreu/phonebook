import React from 'react'
import { useSharedState, setSharedState } from '../shared-states'
import Highlighter from "react-highlight-words"

import { Table, TheadRow } from './view-styled'

const Th = ({ field, sorting }) => {
  return <th onClick={(e) => setSharedState('sorting', field===sorting[0] ? [field, !sorting[1]] : [field, true])}>
    {field.replace('_', ' ')} {field!==sorting[0] ? '' : (sorting[1]?'↓':'↑')}
  </th>
}

export default ({ data }) => {
  let sorting = useSharedState('sorting')
  let search = useSharedState('search')
  
  return (
    <Table>
      <thead>
        <TheadRow>
          <Th field="name" sorting={sorting} />
          <Th field="phone_number" sorting={sorting} />
          <Th field="address" sorting={sorting} />
        </TheadRow>
      </thead>
      <tbody>
        { data.map((d, i) => (
          <tr key={d._index}>
            <td>
              <Highlighter
                searchWords={[search]}
                autoEscape={true}
                textToHighlight={d.name}
              />
            </td>
            <td>
              <Highlighter
                searchWords={[search]}
                autoEscape={true}
                textToHighlight={d.phone_number}
              />
            </td>
            <td>
              {d.address.split(',').map((s, i) => (
                <p key={i}>
                  <Highlighter
                    searchWords={[search]}
                    autoEscape={false}
                    textToHighlight={s}
                  />
                </p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}