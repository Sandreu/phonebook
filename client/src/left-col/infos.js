import React from 'react'
import { Section, Infos } from './styled'

export default () => (
  <div>
    <Section>Infos</Section>
    <Infos>
      <p><b>Filters</b><br />Use the search field and choose which fields you want to look at</p>
      <p><b>Sorting</b><br />Click on columns head</p>
      <p><b>Fetching data</b><br />This uses *fetch* with a *XMLHttpRequest* backup</p>
      <p><b>Dependencies</b><br />Only React, Emotion for CSS and react-highlight-words</p>
    </Infos>
  </div>
)