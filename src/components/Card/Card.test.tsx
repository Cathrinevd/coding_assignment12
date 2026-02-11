import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Card } from "./Card";

describe("Card", () => {
  test("is visible", () => {
    render(<Card title="My Card" />);
    expect(screen.getByText("My Card")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Card title="My Card" disabled />);
    const card = screen.getByTestId("card");
    expect(card).toHaveStyleRule("background", "#bdbdbd");
  });
});
