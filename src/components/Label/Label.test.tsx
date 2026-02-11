import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Label } from "./Label";

describe("Label", () => {
  test("is visible", () => {
    render(<Label text="My Label" />);
    expect(screen.getByText("My Label")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Label text="My Label" disabled backgroundColor="#bdbdbd" />);
    expect(screen.getByText("My Label")).toHaveStyleRule("background", "#bdbdbd");
  });
});
