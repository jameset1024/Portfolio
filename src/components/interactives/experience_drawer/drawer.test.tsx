import { Experience } from "@app/data/experience";
import ExperienceDrawer from "@app/components/interactives/experience_drawer/index";
import { render, screen } from "@testing-library/react";
import React from "react";

test("Experience Drawer", () => {
  render(<ExperienceDrawer data={Experience} />)
  const drawer = screen.getByTestId('experience-drawer');
  expect(drawer).toBeInTheDocument();

  const nav = screen.getAllByText('Nearby Creative');
  expect(nav[0]).toBeInTheDocument();

  const text = screen.getByText(/Lead Software Engineer/i);
  expect(text).toBeInTheDocument();
});
