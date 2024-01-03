import { render, screen } from "@testing-library/react"
import Input from "."

describe('test Input component', () => {
  it('render', () => {
    render(<Input></Input>);

    expect(screen.queryByText(/input anything/)).toBeInTheDocument()
  })
})