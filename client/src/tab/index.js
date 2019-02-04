import React from 'react'

import { useSharedState } from '../shared-states'

import { Table, TheadRow } from './index-styled'

import data from './data'

function sort(a, b) { return a.name.localeCompare(b.name) }
const source = data.contacts.map((e, i) => {
  return Object.assign({
    _index: i,
    _search_name: e.name.toLowerCase(),
    _search_address: e.address.toLowerCase(),
  }, e)
}).sort(sort)

export default () => {
  let search = useSharedState('search').toLowerCase()
  
  let processed = source
  
  if (search) {
    processed = processed.filter(e => {
      if (e._search_name.indexOf(search) > -1) return true
      if (e.phone_number.indexOf(search) > -1) return true
      if (e._search_address.indexOf(search) > -1) return true
      
      return false
    })
  }
  
  return (
    <Table>
      <thead>
        <TheadRow>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
        </TheadRow>
      </thead>
      <tbody>
        { processed.map((d, i) => (
          <tr key={d._index}>
            <td>{d.name}</td>
            <td>{d.phone_number}</td>
            <td>{d.address.split(',').map((s, i) => (<p key={i}>{s}</p>))}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}