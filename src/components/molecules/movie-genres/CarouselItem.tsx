import { renderImage, truncateText } from "@/utils/helpers";
import { Box, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface CarouselItemProps {
  title: string;
  imgSrc: string;
}

function CarouselItem({ title, imgSrc }: CarouselItemProps) {
  return (
    <Box
      padding="16px"
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
          height: "165px",
          boxShadow:
            "0 10px 15px -3px rgba(244, 63, 94, 0.5), 0 4px 6px -2px rgba(244, 63, 94, 0.5)",
          position: "relative",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgba(62,244,210, 0.5), 0 4px 6px -2px rgba(62,244,210, 0.5)",
          },
        }}
      >
        <LazyLoadImage
          src={renderImage(imgSrc)}
          effect="blur"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Typography fontSize={14} color="white">
        {truncateText(title, 52)}
      </Typography>
    </Box>
  );
}

export default React.memo(CarouselItem);
