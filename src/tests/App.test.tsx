import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { describe, expect, it, vi } from 'vitest'
import { within } from '@testing-library/react'


vi.mock('../data/data.json', () => ({
  default: ['test']
}))

describe('App', () => {
  it('renders the header text', () => {
    render(<App />)
    expect(screen.getByText(/Guess the Correct Word!/i)).toBeInTheDocument()
  })

  it('correct guess highlights button green and disables it', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 't' })

    const keyboard = screen.getByTestId('keyboard')
    const buttonT = within(keyboard).getByRole('button', { name: 't' })

    expect(buttonT).toBeDisabled()
    expect(buttonT).toHaveClass('bg-green-500')
  })

  it('incorrect guess highlights button red and disables it', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'x' })

    const keyboard = screen.getByTestId('keyboard')
    const buttonX = within(keyboard).getByRole('button', { name: 'x' })

    expect(buttonX).toBeDisabled()
    expect(buttonX).toHaveClass('bg-red-500')
  })

  it('shows the score', () => {
    render(<App />)
    expect(screen.getByText(/Score:/i)).toBeInTheDocument()
  })


  it('adds pressed key to the pressedKeys state', () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'a' })

    // Narrow search to just the keyboard container
    const keyboard = screen.getByTestId('keyboard')
    const buttonA = within(keyboard).getByRole('button', { name: 'a' })

    expect(buttonA).toBeDisabled()
  })

  it('showing the win and testing score increasing', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 't' })
    fireEvent.keyDown(input, { key: 'e' })
    fireEvent.keyDown(input, { key: 's' })

    // Check result box shows "You Won"
    expect(screen.getByText(/You Won/)).toBeInTheDocument()
    expect(screen.getByText(/great job/i)).toBeInTheDocument()
     expect(screen.getByText(/score: 1/i)).toBeInTheDocument()
  })


  it('displays "You Lost" after 10 incorrect guesses', () => {
  render(<App />)

  const input = screen.getByRole('textbox')

  const wrongLetters = ['w', 'z', 'x', 'b', 'g', 'a', 'n', 'v', 'q']
  wrongLetters.forEach(letter => {
    fireEvent.keyDown(input, { key: letter })
  })

  // Check result box shows "You Lost"
  expect(screen.getByText(/You Lost/)).toBeInTheDocument()
  expect(screen.getByText(/ran out of guesses/i)).toBeInTheDocument()
  expect(screen.getByText(/score: 0/i)).toBeInTheDocument()
})

it('increase score by 1 after winning', () =>{
  render(<App/>)

})
})
