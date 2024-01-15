import {act, render, screen} from "@testing-library/react";
import Loading from "./index";
import React from "react";

jest.useFakeTimers()
jest.spyOn(global, "setTimeout");

test("Test Loading screen", () => {
  const setLoading = jest.fn();
  render(<Loading setLoading={setLoading}/>)

  const elem =screen.getByTestId('loading-screen');
  expect(elem).toBeInTheDocument();

  //expect(refSpy).toBeCalledWith({current: });
  act(() => {
    jest.runAllTimers();
  })

  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setLoading).toHaveBeenCalledTimes(1)
  expect(elem).not.toBeInTheDocument();
});
