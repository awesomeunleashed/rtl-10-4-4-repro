import React from 'react'
import { render } from '@testing-library/react'
import NoEffectComponent from './NoEffectComponent'

beforeEach(jest.useFakeTimers)
afterEach(jest.useRealTimers)

it('renders NoEffectComponent correctly', () => {
  const { getByTitle } = render(<NoEffectComponent />)

  expect(getByTitle('test')).toBeInTheDocument()
})
