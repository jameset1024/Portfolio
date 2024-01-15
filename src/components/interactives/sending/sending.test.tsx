import Sending from "./index";
import {render, screen} from "@testing-library/react";
import React from "react";

test("Sending animation", () => {
  render(<Sending />)
  const elem = screen.getByTestId('sending-animation');
  expect(elem).toBeInTheDocument();
})
