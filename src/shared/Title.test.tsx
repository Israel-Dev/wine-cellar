import { render, screen } from "@testing-library/react"
import React from "react"
import Title from "./Title"

test('renders Title', () => {
    render(<Title label="Test Title"/>)

    const titleElem = screen.getByText(/Test Title/i)
    expect(titleElem).toBeInTheDocument()
})