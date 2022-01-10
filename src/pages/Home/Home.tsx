import React from 'react'

import { Header, SideBar } from 'ui'

import * as S from './Home.styled'

export function Home() {
  return (
    <>
      <SideBar />
      <Header />
      <S.Container></S.Container>
    </>
  )
}
