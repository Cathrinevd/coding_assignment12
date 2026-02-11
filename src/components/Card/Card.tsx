import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const Wrapper = styled.div<{ $bg?: string; $disabled?: boolean }>`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 16px;

  background: ${(p) => p.$bg ?? "#ffffff"};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Body = styled.p`
  margin: 0;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Card: React.FC<CardProps> = ({
  title = "Card Title",
  body = "Card body text",
  backgroundColor,
  disabled = false,
}) => (
  <Wrapper $bg={backgroundColor} $disabled={disabled} data-testid="card">
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Wrapper>
);
