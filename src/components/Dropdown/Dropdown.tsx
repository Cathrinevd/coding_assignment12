import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ $bg?: string; $disabled?: boolean }>`
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 340px;

  background: ${(p) => p.$bg ?? "#ffffff"};
  border: 1px solid #ccc;

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
    max-width: 420px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledSelect $bg={backgroundColor} $disabled={disabled} disabled={disabled}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </StyledSelect>
  );
};
