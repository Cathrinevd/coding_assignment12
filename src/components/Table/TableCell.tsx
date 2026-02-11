import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const StyledCell = styled.td<{ $bg?: string; $disabled?: boolean }>`
  background: ${(p) => p.$bg ?? "transparent"};

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const TableCell: React.FC<TableCellProps> = ({
  backgroundColor,
  disabled = false,
  children,
  as = "td",
  colSpan,
}) => (
  <StyledCell
    as={as}
    colSpan={colSpan}
    $bg={backgroundColor}
    $disabled={disabled}
  >
    {children}
  </StyledCell>
);
