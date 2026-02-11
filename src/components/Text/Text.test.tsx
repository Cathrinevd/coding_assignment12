import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Text } from "./Text";

describe("Text", () => {
  test("is visible", () => {
    render(<Text text="Hello text" />);
    expect(screen.getByText("Hello text")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Text text="Hello text" disabled backgroundColor="#bdbdbd" />);
    expect(screen.getByText("Hello text")).toHaveStyleRule("background", "#bdbdbd");
  });
});
