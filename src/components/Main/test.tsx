import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPage from './'

test('LandingPage renders correctly', () => {
  const { asFragment } = render(<LandingPage />)

  const titleElement = screen.getByText('Explore our Stunning 3D Models')
  expect(titleElement).toBeInTheDocument()

  const descriptionElement = screen.getByText('Select a model to view in 3D:')
  expect(descriptionElement).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})
