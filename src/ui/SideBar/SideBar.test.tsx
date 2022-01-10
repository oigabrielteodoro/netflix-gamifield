import React from 'react'

import { SideBar } from 'ui'
import { render, screen, userEvent, waitFor } from 'lib/Test'

describe('SideBar', () => {
  it('should be able render correctly', () => {
    render(<SideBar />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /Browse/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /Watchlist/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /Settings/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /Log out/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /Popcorn Icon/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /View challenges/i,
      }),
    ).toBeInTheDocument()
  })

  it('should be able navigate when click into link', async () => {
    render(<SideBar />, {
      initialRoute: '/watchlist',
      routePath: '/watchlist',
    })

    expect(
      await screen.findByRole('link', {
        name: /Browse/i,
      }),
    ).toBeInTheDocument()

    userEvent.click(
      screen.getByRole('link', {
        name: /Browse/i,
      }),
    )

    await waitFor(() =>
      expect(
        screen.queryByRole('link', {
          name: /Browse/i,
        }),
      ).not.toBeInTheDocument(),
    )
  })
})
