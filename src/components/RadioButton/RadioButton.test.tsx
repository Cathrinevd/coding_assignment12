import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  test("is visible", () => {
    render(<RadioButton label="Pick me" />);
    expect(screen.getByText("Pick me")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<RadioButton label="Pick me" disabled />);
    const wrapper = screen.getByTestId("radio");
    expect(wrapper).toHaveStyleRule("background", "#bdbdbd");
  });
});
