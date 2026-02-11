import React from "react";
import styled from "styled-components";
import { BaseTablePartProps } from "./Table.types";

const StyledTr = styled.tr<{ $bg?: string; $disabled?: boolean }>`
  background: ${(p) => p.$bg ?? "transparent"};

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const TableRow: React.FC<BaseTablePartProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => (
  <StyledTr $bg={backgroundColor} $disabled={disabled}>
    {children}
  </StyledTr>
);
