/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("Button component", () => {
  test("Button rendered to the screen", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();
  });

  test("Button onClick function has been called", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>click</Button>);
    const button = screen.getByText(/click/i);
    expect(button).toHaveRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(button).toHaveFocus();
  });
});
