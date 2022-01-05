import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from 'pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
