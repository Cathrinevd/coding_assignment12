import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const Wrapper = styled.div<{ $bg?: string; $disabled?: boolean }>`
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;

  background: ${(p) => p.$bg ?? "transparent"};

  ${(p) =>
    p.$disabled &&
    `
      background: #bdbdbd;
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

const StyledImg = styled.img<{ $width?: string }>`
  width: ${(p) => p.$width ?? "100%"};
  max-width: 480px;
  display: block;

  @media (min-width: 768px) {
    max-width: 620px;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src = "https://via.placeholder.com/480x220",
  alt = "image",
  backgroundColor,
  disabled = false,
  width,
}) => (
  <Wrapper data-testid="img-wrapper" $bg={backgroundColor} $disabled={disabled}>
    <StyledImg $width={width} src={src} alt={alt} />
  </Wrapper>
);
