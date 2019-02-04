import { useState, useEffect } from 'react'

import State from './state'


const states = {
  search: new State(''),
  sorting: new State(['name', true]),
  filters: new State({name: true, phone_number: false, address: true}),
}


export const useSharedState = function (name) {
  if (!states[name]) throw new Error('Can`t find <'+name+'> shared state')
  
  const [ val, setter ] = useState(states[name].getValue())
  useEffect(() => states[name].subscribe(setter), [false])
  
  return val
}

export const setSharedState = function (name, value) {
  if (!states[name]) throw new Error('Can`t find <'+name+'> shared state')
  
  return states[name].setValue(value)
}