import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from 'pages'
import { AppLayout } from 'ui'

export function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
