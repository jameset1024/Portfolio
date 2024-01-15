import Pagination from "./index";
import {render, screen} from "@testing-library/react";
import React from "react";
import {userEvent} from "@testing-library/user-event";


test("Pagination 1", async () => {
  render(<Pagination currentPage={1} totalPages={1} />);

  const elem = screen.getByTestId('pagination');
  expect(elem).toBeInTheDocument();

  const newer = screen.getByText('Newer');
  expect(newer.nodeName).toBe('SPAN');

  const previous = screen.getByText('Previous');
  expect(previous.nodeName).toBe('SPAN');
});

test("Pagination 2", async () => {
  render(<Pagination currentPage={2} totalPages={3} />);

  const elem = screen.getByTestId('pagination');
  expect(elem).toBeInTheDocument();

  const newer = screen.getByText('Newer');
  expect(newer.nodeName).toBe('A');

  const previous = screen.getByText('Previous');
  expect(previous.nodeName).toBe('A');
});
