import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ $bg?: string; $disabled?: boolean }>`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 8px;

  background: ${(p) => p.$bg ?? "transparent"};
  color: ${(p) => (p.$disabled ? "#666" : "#111")};

  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};

  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text = "Label",
  backgroundColor,
  disabled = false,
  htmlFor,
}) => (
  <StyledLabel $bg={backgroundColor} $disabled={disabled} htmlFor={htmlFor}>
    {text}
  </StyledLabel>
);
