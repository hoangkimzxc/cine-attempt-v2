import { renderImage, truncateText } from "@/utils/helpers";
import { Box, Typography } from "@mui/material";
import React from "react";

interface CarouselItemProps {
  title: string;
  imgSrc: string;
}

function CarouselItem({ title, imgSrc }: CarouselItemProps) {
  return (
    <Box
      padding="8px"
      display="flex"
      flexDirection="column"
      gap="8px"
      sx={{
        cursor: "pointer",
        transition: "transform 100ms ease 30ms",
        borderRadius: "10px",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.1) translateY(-0.5px)",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          height: "135px",
          boxShadow:
            "0 10px 15px -3px rgba(244, 63, 94, 0.5), 0 4px 6px -2px rgba(244, 63, 94, 0.5)",
          position: "relative",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgba(62,244,210, 0.5), 0 4px 6px -2px rgba(62,244,210, 0.5)",
          },
        }}
      >
        <img
          src={renderImage(imgSrc)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Typography fontSize={14} color="white">
        {truncateText(title, 52)}
      </Typography>
    </Box>
  );
}

export default CarouselItem;
