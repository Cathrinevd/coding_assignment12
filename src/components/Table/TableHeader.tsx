import React from "react";
import styled from "styled-components";
import { BaseTablePartProps } from "./Table.types";

const StyledThead = styled.thead<{ $bg?: string; $disabled?: boolean }>`
  background: ${(p) => p.$bg ?? "#f3f3f3"};

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const TableHeader: React.FC<BaseTablePartProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => (
  <StyledThead $bg={backgroundColor} $disabled={disabled}>
    {children}
  </StyledThead>
);
