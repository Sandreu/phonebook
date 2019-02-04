import React from 'react'
import { useSharedState, setSharedState } from '../shared-states'

import { Section, Filter } from './styled'

const FilterC = ({ field, filters }) => (
  <Filter 
    className={filters[field] ? 'active' : null}
    onClick={() => setSharedState('filters', Object.assign({}, filters, {
      [field] : !filters[field]
    }))}
    >
    {field.replace('_', ' ')}
  </Filter>
)

export default () => {
  let filters = useSharedState('filters')
  
  return <div>
      <Section>Search Filter fields</Section>
      <div><FilterC filters={filters} field="name" /></div>
      <div><FilterC filters={filters} field="phone_number" /></div>
      <div><FilterC filters={filters} field="address" /></div>
  </div>
}