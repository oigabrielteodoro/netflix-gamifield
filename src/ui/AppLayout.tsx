import React, { ReactNode } from 'react'
import { SideBar, Header, Friends } from 'ui'

type Props = {
  children: ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <>
      <SideBar />
      <Header />
      {children}
      <Friends />
    </>
  )
}
