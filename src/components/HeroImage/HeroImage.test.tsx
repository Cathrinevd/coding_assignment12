import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { HeroImage } from "./HeroImage";

describe("HeroImage", () => {
  test("is visible", () => {
    render(<HeroImage title="Hero" />);
    expect(screen.getByText("Hero")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<HeroImage title="Hero" disabled />);
    const hero = screen.getByTestId("hero");
    expect(hero).toHaveStyleRule("background", "#bdbdbd");
  });
});
