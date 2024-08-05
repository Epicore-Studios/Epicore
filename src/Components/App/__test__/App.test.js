import { render, screen, fireEvent } from '@testing-library/react'
import { App } from '../App'

describe('Test for App component', () => {
  test('1.- Renders the <App/> component', () => {
    render(<App/>)
  })
})