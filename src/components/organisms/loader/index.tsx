import * as React from "react";
import { Box } from "@mui/material";

const Loader: React.FC = () => {
  const spanStyles = (i: number) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: `rotate(${18 * i}deg)`,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: 15,
      height: 15,
      borderRadius: "50%",
      background: "#00ff0a",
      boxShadow:
        "0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a",
      animation: "animateDot 2s linear infinite",
      animationDelay: `${0.1 * i}s`,
    },
  });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, 0.9)", // Fixed black background with opacity
        "@keyframes animateDot": {
          "0%": { transform: "scale(1)" },
          "80%, 100%": { transform: "scale(0)" },
        },
        "@keyframes animateBg": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 120,
          animation: "animateBg 10s linear infinite", // Apply color rotation to dots
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <Box key={i} sx={spanStyles(i + 1)} />
        ))}
      </Box>
    </Box>
  );
};

export default Loader;
