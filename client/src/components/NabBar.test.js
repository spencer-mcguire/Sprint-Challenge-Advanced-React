import React from "react";
import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";

test("Dark mode toggle present", () => {
  const { getByTestId } = render(<NavBar />);
  getByTestId(/darkmode/i);
});

test("Title is correct", () => {
  const { getByText } = render(<NavBar />);
  expect(getByText(/Most Searched Womans Soccer Players/i)).toBeTruthy();
});
