import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const Wrapper = styled.section<{ $bg?: string; $disabled?: boolean }>`
  width: 100%;
  padding: 40px 16px;
  border-radius: 16px;

  background: ${(p) => p.$bg ?? "#2d6cdf"};
  color: white;

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}

  @media (min-width: 768px) {
    padding: 60px 24px;
  }
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-size: 26px;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title = "Hero Title",
  subtitle = "Hero subtitle text",
  backgroundColor,
  disabled = false,
}) => (
  <Wrapper data-testid="hero"
 $bg={backgroundColor} $disabled={disabled}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);
