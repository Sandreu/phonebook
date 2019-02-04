import React from 'react'

import { Table, TheadRow } from './index-styled'

import data from './data'

export default () => (
  <Table>
    <thead>
      <TheadRow>
        <th>Name</th>
        <th>Phone</th>
        <th>Address</th>
      </TheadRow>
    </thead>
    <tbody>
      { data.contacts.map((d, i) => (
        <tr key={i}>
          <td>{d.name}</td>
          <td>{d.phone_number}</td>
          <td>{d.address.split(',').map((s, i) => (<p key={i}>{s}</p>))}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)