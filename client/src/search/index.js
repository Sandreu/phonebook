import React from 'react'
import { Input } from './index-styled'
import { useSharedState, setSharedState } from '../shared-states'

function setSearchValue(evt) {
  setSharedState('search', evt.target.value)
}

export default () => {
  let search = useSharedState('search')
  return (
    <div>
      <Input type='text' placeholder="Search" value={search} onChange={setSearchValue} />
    </div>
  )
}