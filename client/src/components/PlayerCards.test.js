import React from "react";
import { render } from "@testing-library/react";
import { PlayerCards } from "./PlayerCards";

test("cards actually show up!", () => {
  const { findAllByTestId } = render(<PlayerCards />);
  findAllByTestId(/card/i);
});
