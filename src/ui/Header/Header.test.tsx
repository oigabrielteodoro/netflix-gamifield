import React from 'react'
import { render, screen } from 'lib/Test'

import { Header } from 'ui'

describe('Header', () => {
  it('should be render correctly', () => {
    render(<Header />)

    expect(screen.getByLabelText(/Header/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /Previous/,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /Next/,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /Notifications/,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /Messages/,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('textbox', {
        name: /Search/,
      }),
    ).toBeInTheDocument()
  })
})
