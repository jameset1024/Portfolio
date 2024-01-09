import MobileButton from "@app/components/elements/mobileButton/index";
import {render, screen} from "@testing-library/react";
import React from "react";
import {userEvent} from "@testing-library/user-event";


test("Mobile Button test", async () => {
  const mockClick = jest.fn();
  render(<MobileButton active={mockClick} isActive={false}/>);

  const elem = screen.getByRole('button');
  expect(elem).toBeInTheDocument();

  await userEvent.click(elem);
  expect(mockClick).toHaveBeenCalled();
  expect(elem.firstChild).not.toHaveClass('open');
});
