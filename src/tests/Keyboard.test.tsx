import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Keyboard from "../Keyboard/Keyboard";

describe('Keyboard', () => {
  it('renders all 26 alphabet buttons', () => {
    // Mock values
    const pressedKeys: string[] = []
    const handleClick = vi.fn()
    const wordArr: string[] = ['z', 'b', 'c']
    const isMatched = false

    render(<Keyboard values={[pressedKeys, handleClick, wordArr, isMatched]} />)


    // Check that all letters from a to z are rendered
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(26)
    expect(buttons[0].textContent).toBe('a')
    expect(buttons[1].textContent).toBe('b')
    expect(buttons[2].textContent).toBe('c')
    expect(buttons[3].textContent).toBe('d')
    expect(buttons[4].textContent).toBe('e')
    expect(buttons[5].textContent).toBe('f')
    expect(buttons[6].textContent).toBe('g')
    expect(buttons[7].textContent).toBe('h')
    expect(buttons[8].textContent).toBe('i')
    expect(buttons[9].textContent).toBe('j')
    expect(buttons[10].textContent).toBe('k')
    expect(buttons[11].textContent).toBe('l')
    expect(buttons[12].textContent).toBe('m')
    expect(buttons[13].textContent).toBe('n')
    expect(buttons[14].textContent).toBe('o')
    expect(buttons[15].textContent).toBe('p')
    expect(buttons[16].textContent).toBe('q')
    expect(buttons[17].textContent).toBe('r')
    expect(buttons[18].textContent).toBe('s')
    expect(buttons[19].textContent).toBe('t')
    expect(buttons[20].textContent).toBe('u')
    expect(buttons[21].textContent).toBe('v')
    expect(buttons[22].textContent).toBe('w')
    expect(buttons[23].textContent).toBe('x')
    expect(buttons[24].textContent).toBe('y')
    expect(buttons[25].textContent).toBe('z')
  })

  it('calls handleClick when a button is clicked', () => {
    const pressedKeys: string[] = []
    const handleClick = vi.fn()
    const wordArr: string[] = ['t', 'b', 'x', 'a']
    const isMatched = false

    render(
      <Keyboard
        values={[pressedKeys, handleClick, wordArr, isMatched]}
      />
    )

    const buttonA = screen.getByText('b')
    buttonA.click()
    expect(handleClick).toHaveBeenCalledWith('b')
  })

})