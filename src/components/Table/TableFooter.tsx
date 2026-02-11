import React from "react";
import styled from "styled-components";
import { BaseTablePartProps } from "./Table.types";

const StyledTfoot = styled.tfoot<{ $bg?: string; $disabled?: boolean }>`
  background: ${(p) => p.$bg ?? "#f3f3f3"};

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const TableFooter: React.FC<BaseTablePartProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => (
  <StyledTfoot $bg={backgroundColor} $disabled={disabled}>
    {children}
  </StyledTfoot>
);
