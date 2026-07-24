import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders button with correct text", () => {
    render(<Button text="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});