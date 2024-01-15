import MobileButton from "@app/components/elements/mobileButton/index";
import {render, screen} from "@testing-library/react";
import React from "react";
import {userEvent} from "@testing-library/user-event";


test("Mobile Button test 1", async () => {
  const mockClick = jest.fn();
  render(<MobileButton active={mockClick} isActive={false} />);

  const elem = screen.getByRole('button');
  expect(elem).toBeInTheDocument();

  await userEvent.click(elem);
  expect(mockClick).toHaveBeenCalled();
  expect(elem).not.toHaveClass('open');
});

test("Mobile Button test 2", async () => {
  const mockClick = jest.fn();
  render(<MobileButton active={mockClick} isActive={true} />);

  const elem = screen.getByRole('button');
  expect(elem).toHaveClass('open');
});
