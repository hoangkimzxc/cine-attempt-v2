import { truncateText } from "@/utils/helpers";
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
        "&:hover": {
          transform: "scale(1.1) translateY(-0.5px)",
        },
      }}
    >
      <Box sx={{}}>
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", backgroundPosition: "center" }}
        />
      </Box>
      <Typography fontSize={14} color="white">
        {truncateText(title, 52)}
      </Typography>
    </Box>
  );
}

export default CarouselItem;
