import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from '../Card'

describe('Test for Card component', () => {
  test('1.- Renders the <Card/> component', () => {
    render(<Card/>)
  })
})