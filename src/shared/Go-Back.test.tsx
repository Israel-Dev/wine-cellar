import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import GoBack from "./Go-Back"

test('renders Go-Back-Button', () => {
    render(
        <Router>
            <GoBack url="/test" />
        </Router>
    )

    const buttonElem = screen.getByText(/Go back/i)
    expect(buttonElem).toBeInTheDocument()

    fireEvent.click(buttonElem)
    expect(window.location.pathname).toEqual("/test")
})