import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  test("is visible", () => {
    render(<Dropdown />);
    expect(screen.getByRole("combobox")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Dropdown disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveStyleRule("background", "#bdbdbd");
  });
});
