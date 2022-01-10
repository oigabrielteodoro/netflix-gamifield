import React, {
  useState,
  useLayoutEffect,
  ReactNode,
  ReactElement,
} from 'react'
import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router, Routes, Route, Outlet } from 'react-router'

type RenderProps = {
  initialRoute?: string
  routePath?: string
  history?: MemoryHistory
}

type AppProps = {
  children?: ReactNode
}

function render(
  ui: ReactElement,
  {
    initialRoute = '/',
    routePath = '/',
    history = createMemoryHistory({ initialEntries: [initialRoute] }),
  }: RenderProps = {},
) {
  function App({ children }: AppProps) {
    const [navigate, setNavigate] = useState({
      action: history.action,
      location: history.location,
    })

    useLayoutEffect(() => history.listen(setNavigate), [])

    return (
      <Router
        navigator={history}
        location={navigate.location}
        navigationType={navigate.action}
      >
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route path={routePath} element={children} />
          </Route>
        </Routes>
      </Router>
    )
  }

  return rtlRender(ui, {
    wrapper: App,
  })
}

export * from '@testing-library/react'
export { render, userEvent }
