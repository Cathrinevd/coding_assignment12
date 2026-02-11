import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Img } from "./Img";

describe("Img", () => {
  test("is visible", () => {
    render(<Img alt="pic" />);
    expect(screen.getByAltText("pic")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(<Img alt="pic" disabled />);
    const wrapper = screen.getByTestId("img-wrapper");
    expect(wrapper).toHaveStyleRule("background", "#bdbdbd");
  });
});
