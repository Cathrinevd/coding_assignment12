import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ $bg?: string; $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;

  background: ${(p) => p.$bg ?? "#ffffff"};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};

  ${(p) => p.$disabled && `background: #bdbdbd;`};

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    th,
    td {
      font-size: 16px;
      padding: 12px;
    }
  }
`;

export const Table: React.FC<TableProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => (
  <StyledTable data-testid="table" $bg={backgroundColor} $disabled={disabled}>
    {children}
  </StyledTable>
);
