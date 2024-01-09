import React from "react";
import { Logo } from "./index"
import {render, screen} from "@testing-library/react";

test("Test Logo rendering", () => {
  render(<Logo  height={25} width={125}/>)
  expect(screen.getByTestId('ejt-logo')).toBeInTheDocument();
});
