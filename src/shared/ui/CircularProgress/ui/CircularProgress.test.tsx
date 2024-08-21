/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CircularProgress } from "./CircularProgress";

describe("CircularProgress", () => {
  afterEach(cleanup);
  test("To be in the document", () => {
    const value = 35;
    render(<CircularProgress value={value} />);
    const circularProgress = screen.getByTestId("circular-progress");
    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toHaveTextContent(`${value} %`);
  });

  test("To have correct svg attributes", () => {
    const value = 30,
      radius = 90,
      strokeWidth = 12;
    const angle = (360 / 100) * value;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = (1 / 4) * circumference;
    const strokeLength = (angle / 360) * circumference;
    const strokeDasharray = [strokeLength, circumference - strokeLength].join(
      " "
    );

    render(
      <CircularProgress
        value={value}
        radius={radius}
        strokeWidth={strokeWidth}
      />
    );
    const circularProgress = screen.getByTestId("circular-progress");
    expect(circularProgress).toHaveTextContent(`${value} %`);
    const progressCircleSvg = screen.getByTestId("circular-progress-value-svg");
    expect(progressCircleSvg).toBeInTheDocument();
    expect(progressCircleSvg).toHaveAttribute(
      "stroke-width",
      strokeWidth.toString()
    );
    expect(progressCircleSvg).toHaveAttribute(
      "stroke-dashoffset",
      strokeDashoffset.toString()
    );
    expect(progressCircleSvg).toHaveAttribute(
      "stroke-dasharray",
      strokeDasharray
    );
    expect(progressCircleSvg).toHaveAttribute("r", radius.toString());
  });
});
