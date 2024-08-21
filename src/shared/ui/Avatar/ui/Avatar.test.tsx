/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

describe("Avatar component", () => {
  test("To be in document", () => {
    render(<Avatar username={"John Doe"} />);
    const avatar = screen.getByTestId(/avatar/i);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent("JD");
    expect(avatar).toHaveClass("w-6");
    expect(avatar).toHaveClass("h-6");
  });

  test("To have large size", () => {
    const username = "John Doe";
    render(<Avatar username={username} large />);
    const avatar = screen.getByTestId(/avatar/i);
    const profileImage = screen.queryByAltText(username);
    expect(profileImage).not.toBeInTheDocument();
    expect(avatar).toHaveClass("w-12");
    expect(avatar).toHaveClass("h-12");
  });

  test("To have image", () => {
    const username = "John Doe";
    const pfpUrl = "profile-picture.jpg";
    render(<Avatar username={username} picture={pfpUrl} />);
    const profileImage = screen.getByAltText(username);
    expect(profileImage).toBeInTheDocument();
  });
});
