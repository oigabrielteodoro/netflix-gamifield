import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from 'pages'
import { Header, SideBar } from 'ui'

export function Router() {
  return (
    <BrowserRouter>
      <SideBar />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
