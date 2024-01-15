import { render, screen } from "@testing-library/react";
import Button, { ButtonExternal, ButtonSubmit } from "./index";
import React from "react";

describe("Button Tests", () => {
  test("Button renders successfully", () => {
    render(<Button to={'/'}>Home</Button>)
    const elem = screen.getByText(/Home/i);
    expect(elem).toBeInTheDocument();
  });

  test("ButtonExternal renders successfully", () => {
    render(<ButtonExternal to={'/'}>Leaving Site</ButtonExternal>)
    const elem = screen.getByText(/Leaving Site/i);
    expect(elem).toBeInTheDocument();
  });

  test("ButtonSubmit renders successfully", () => {
    render(<ButtonSubmit>Submit Form</ButtonSubmit>)
    const elem = screen.getByText(/Submit Form/i);
    expect(elem).toBeInTheDocument();
  });
})
