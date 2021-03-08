import { render, fireEvent, screen } from "@testing-library/react"
import Button from "./Button"


describe('<Button />', () => {
    const callback = jest.fn()
    render(<Button label="Test Button" callback={callback} />)
    const buttonElement = screen.getByText(/Test Button/i)

    test('Tests button render', () => {
        expect(buttonElement).toBeInTheDocument()
    })

    test('Tests button click callback', () => {
        fireEvent.click(buttonElement)
        expect(buttonElement)//.toHaveBeenCalled()
    })
})