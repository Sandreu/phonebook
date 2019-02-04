import React from 'react'
import logo from './logo.svg'
import Search from './search'
import Tab from './tab'

import { App, Head, Logo, AppName, LeftCol, Content } from './App-styled'

export default () => (
  <App>
    <LeftCol>
      <Head>
        <Logo src={logo} alt="logo" />
        <AppName>Phonebook demo</AppName>
      </Head>
    </LeftCol>
    <Content>
      <Head>
        <Search />
      </Head>
      <Tab />
    </Content>
  </App>
);
