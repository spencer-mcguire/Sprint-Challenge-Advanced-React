import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("header resolves on screen", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});

test("card section renders properly", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/card-container/i);
});
