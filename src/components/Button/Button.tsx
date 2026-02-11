import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ $bg?: string; $disabled?: boolean }>`
  padding: 12px 18px;
  border: none;
  border-radius: 10px;

  width: 100%;
  max-width: 320px;

  font-size: 16px;

  background: ${(p) => p.$bg ?? "#2d6cdf"};
  color: white;

  cursor: pointer;
  transition: 0.2s ease;

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 14px 22px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text = "Button",
  backgroundColor,
  disabled = false,
  onClick,
}) => (
  <StyledButton
    type="button"
    $bg={backgroundColor}
    $disabled={disabled}
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
  >
    {text}
  </StyledButton>
);
