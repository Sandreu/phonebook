import React from 'react'
import { useSharedState } from '../shared-states'

import View from './view'

const data = {
  "contacts": [
  	{
			"name": "Oleta Level",
			"phone_number": "+442032960159",
			"address": "10 London Wall, London EC2M 6SA, UK"
		}, {
			"name": "Maida Harju",
			"phone_number": "+442032960899",
			"address": "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK"
		}, {
			"name": "Lia Pigford",
			"phone_number": "+442032960182",
			"address": "23 Westmorland Cl, Darwen BB3 2TQ, UK"
		}, {
			"name": "Ghislaine Darden",
			"phone_number": "+442032960427",
			"address": "20-24 Knowlesly Rd, Darwen BB3 2NE, UK"
		}, {
			"name": "Jana Spitler",
			"phone_number": "+442032960370",
			"address": "4 St Lucia Cl, Darwen BB3 0SJ, UK"
		}, {
			"name": "Dolly Detweiler",
			"phone_number": "+442032960977",
			"address": "18 Johnson Rd, Darwen BB3, UK"
		}, {
			"name": "Stanley Vanderhoof",
			"phone_number": "+442032960000",
			"address": "17 Anchor Ave, Darwen BB3 0AZ, UK"
		}, {
			"name": "Adan Milian",
			"phone_number": "+442032960011",
			"address": "20 Ellerbeck Rd, Darwen BB3 3EX, UK"
		}, {
			"name": "Marivel Molina",
			"phone_number": "+442032960013",
			"address": "Tockholes Rd, Darwen BB3, UK"
		}, {
			"name": "Kris Everett",
			"phone_number": "+442032960012",
			"address": "Pinewood, Tockholes Rd, Darwen BB3 1JY, UK"
		}
	]
}

const source = data.contacts.map((e, i) => {
  return Object.assign({
    _index: i,
    _search_name: e.name.toLowerCase(),
    _search_address: e.address.toLowerCase(),
  }, e)
})

export default () => {
  let search = useSharedState('search').toLowerCase()
  let sorting = useSharedState('sorting')
  let filters = useSharedState('filters')
  
  let processed = source
  
  if (search) {
    processed = processed.filter(e => {
      if (filters.name && e._search_name.indexOf(search) > -1) return true
      if (filters.phone_number && e.phone_number.indexOf(search) > -1) return true
      if (filters.address && e._search_address.indexOf(search) > -1) return true
      
      return false
    })
  }
  
  processed = processed.sort((a, b) => {
  	return sorting[1] ? a[sorting[0]].localeCompare(b[sorting[0]]) : b[sorting[0]].localeCompare(a[sorting[0]])
  })
  
  return <div>
  	<View data={processed} />
  </div>
}