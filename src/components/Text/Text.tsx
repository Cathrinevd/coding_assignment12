import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ $bg?: string; $disabled?: boolean }>`
  margin: 0;
  padding: 10px;
  border-radius: 8px;

  background: ${(p) => p.$bg ?? "transparent"};
  color: ${(p) => (p.$disabled ? "#666" : "#111")};

  cursor: ${(p) => (p.$disabled ? "not-allowed" : "text")};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};

  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Text: React.FC<TextProps> = ({
  text = "Text",
  backgroundColor,
  disabled = false,
}) => <StyledText $bg={backgroundColor} $disabled={disabled}>{text}</StyledText>;
