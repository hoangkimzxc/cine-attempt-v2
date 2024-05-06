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

export const breathingEffect = (hex: string) => {
  // Remove the '#' character if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex string into RGB components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Create the RGB color string
  const rgbColor = `${r}, ${g}, ${b}`;

  // Generate and return the keyframes using the RGB color
  return keyframes`
    0%, 100% {
      box-shadow: 0 0 8px 0 rgba(${rgbColor}, 0.5);
    }
    50% {
      box-shadow: 0 0 12px 5px rgba(${rgbColor}, 0.75);
    }
  `;
};
