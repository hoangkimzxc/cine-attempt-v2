import { removeHTMLArtifacts, truncateText } from "@/utils/helpers";
import { Box, Typography } from "@mui/material";
import React from "react";

export interface BannerProps {
  title: string;
  imgSrc: string;
  description: string;
}

export function Banner({ title, imgSrc, description }: BannerProps) {
  return (
    <>
      <Box position="absolute" color="white" top="35%" left="30px">
        <Typography fontWeight={600} fontSize={64} width="50%">
          {title}
        </Typography>
        <Typography width="60%">
          {truncateText(removeHTMLArtifacts(description), 285)}
        </Typography>
      </Box>
      <Box
        width="100wh"
        height="100vh"
        sx={{ objectFit: "contain", backgroundPosition: "center" }}
      >
        <img
          src={`https://img.ophim.live/uploads/movies/${imgSrc}`}
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        position="absolute"
        height="45%"
        width="100%"
        bottom={0}
        sx={{
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
        }}
      ></Box>
    </>
  );
}
