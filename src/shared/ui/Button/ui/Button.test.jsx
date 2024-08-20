/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

test("Button rendered to the screen", () => {
  render(<Button>Click me</Button>);
  const btn = screen.getByText(/click me/i);
  expect(btn).toBeInTheDocument();
});
