import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Table } from "./Table";

describe("Table", () => {
  test("is visible", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText("Cell")).toBeVisible();
  });

  test("background changes when disabled", () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );

    const table = screen.getByTestId("table");
    expect(table).toHaveStyleRule("background", "#bdbdbd");
  });
});
