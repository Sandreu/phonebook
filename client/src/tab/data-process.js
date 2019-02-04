import React from 'react'
import { useSharedState } from '../shared-states'

import View from './view'

let source = null
function initSource(data) {
	source = data.contacts.map((e, i) => {
	  return Object.assign({
	    _index: i,
	    _search_name: e.name.toLowerCase(),
	    _search_address: e.address.toLowerCase(),
	  }, e)
	})
}

const dataSource = 'http://www.mocky.io/v2/581335f71000004204abaf83'
if (window) {
	if (window.fetch) {
		window.fetch(dataSource)
			.then(resp => resp.json())
			.then(initSource)
			.catch(e => {
				alert(`Error while trying to fetch source\n${dataSource}\n\n${e.message}`)
			})
	} else {
		const req = new XMLHttpRequest();
	
		req.onreadystatechange = function(event) {
		    // XMLHttpRequest.DONE === 4
		    if (this.readyState === XMLHttpRequest.DONE) {
		        if (this.status === 200) {
		            initSource(JSON.parse(this.responseText));
		        } else {
							alert(`Error while trying to XMLHttpRequest source\n${dataSource}`)
		        }
		    }
		};
		
		req.open('GET', dataSource, true);
		req.send(null);
	}
}

export default () => {
  let search = useSharedState('search').toLowerCase()
  let sorting = useSharedState('sorting')
  let filters = useSharedState('filters')
  
  if (!source) return 'Loading data'
  
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