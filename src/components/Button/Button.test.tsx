import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

describe("Button", () => {
  test("is visible", () => {
    render(<Button text="Hello" />);
    expect(screen.getByRole("button", { name: "Hello" })).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Button text="Hello" disabled />);
    const btn = screen.getByRole("button", { name: "Hello" });
    expect(btn).toHaveStyleRule("background", "#bdbdbd");
  });
});
