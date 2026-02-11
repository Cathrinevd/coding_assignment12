import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Wrapper = styled.label<{ $bg?: string; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 10px;

  background: ${(p) => p.$bg ?? "transparent"};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};

  ${(p) => p.$disabled && `background: #bdbdbd;`}

  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label = "Radio",
  backgroundColor,
  disabled = false,
  name = "radio",
}) => (
  <Wrapper data-testid="radio" $bg={backgroundColor} $disabled={disabled}>
    <input type="radio" name={name} disabled={disabled} />
    <span>{label}</span>
  </Wrapper>
);
