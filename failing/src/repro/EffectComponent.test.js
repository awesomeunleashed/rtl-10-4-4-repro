import React from 'react'
import { render } from '@testing-library/react'
import EffectComponent from './EffectComponent'

beforeEach(jest.useFakeTimers)
afterEach(jest.useRealTimers)

it('renders EffectComponent correctly', () => {
  const { getByTitle } = render(<EffectComponent />)

  expect(getByTitle('test')).toBeInTheDocument()
})
