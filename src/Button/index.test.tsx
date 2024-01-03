import { fireEvent, render, screen } from "@testing-library/react"
import Button from ".";
import "@testing-library/jest-dom";

describe("test count in screen", () => {
  it('render', () => {
    render(<Button contents="hello"></Button>);
    // screen.debug();
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('test click', () => {
    // const clc
    render(<Button contents="hello"></Button>);
    expect(screen.queryByText(/0/)).not.toBeNull();
    fireEvent.click(screen.getByText(/count/));
    expect(screen.queryByText(/0/)).toBeNull();
    expect(screen.queryByText(/1/)).not.toBeNull();


  })
})