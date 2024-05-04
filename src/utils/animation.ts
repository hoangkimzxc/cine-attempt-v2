import { keyframes } from "@emotion/react";

export const gradientEffect = keyframes`
 0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
      `;

export const breathingEffect = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px 0 rgba(83, 254, 169, 0.5);
  }
  50% {
    box-shadow: 0 0 12px 5px rgba(83, 254, 169, 0.75);
  }
`;
