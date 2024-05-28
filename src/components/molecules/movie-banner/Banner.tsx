import {
  removeHTMLArtifacts,
  renderImage,
  truncateText,
} from "@/utils/helpers";
import Button from "@components/atoms/button";
import { Box, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link, useNavigate } from "react-router-dom";
import useMovieDetailStore from "@store/movieDetailStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

export interface BannerProps {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
}

function Banner({ title, imgSrc, description, id }: BannerProps) {
  const navigate = useNavigate();
  const { playMovieImmediately } = useMovieDetailStore();

  const handlePlayVideo = () => {
    playMovieImmediately();
    navigate(`/movie/${id}`, { state: { playMovie: true } });
  };
  return (
    <>
      <Box
        position="absolute"
        color="white"
        top="30%"
        left="30px"
        zIndex={3}
        sx={{ textShadow: "1px 1px #333" }}
      >
        <Typography fontWeight={600} fontSize={64} width="60%" lineHeight={1.1}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" gap="10px" mt="16px" mb="20px">
          <Button
            onClick={handlePlayVideo}
            sx={{
              color: "white",
              bgcolor: "rgba(51,51,51,0.5)",
              borderRadius: "5px",
              height: "40px",
              padding: "8px 36px",
              width: "fit-content",
              transition: "transform 100ms",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              "&:hover": {
                backgroundColor: "#e11d48",
                transform: "translate(-2px) scale(1.1)",
              },
            }}
          >
            <PlayCircleOutlineIcon />
            <Typography fontSize={18} fontWeight={500}>
              Play
            </Typography>
          </Button>
          <Link to={`/movie/${id}`}>
            <Button
              sx={{
                color: "white",
                bgcolor: "rgba(51,51,51,0.5)",
                borderRadius: "5px",
                height: "40px",
                width: "fit-content",
                padding: "8px 16px",
                transition: "transform 100ms",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                "&:hover": {
                  backgroundColor: "#e6e6e6",
                  color: "black",
                  transform: "translate(-2px) scale(1.1)",
                },
              }}
            >
              <InfoOutlinedIcon />
              <Typography
                fontSize={18}
                textTransform="capitalize"
                fontWeight={500}
              >
                More Info
              </Typography>
            </Button>
          </Link>
        </Box>
        <Typography width="50%" fontSize={17}>
          {truncateText(removeHTMLArtifacts(description), 300)}
        </Typography>
      </Box>
      <Box width="100wh" height="100vh">
        <LazyLoadImage
          src={renderImage(imgSrc)}
          effect="blur"
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Box
        position="absolute"
        height="70%"
        width="100%"
        bottom={0}
        sx={{
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#000)",
        }}
      ></Box>
    </>
  );
}

export default React.memo(Banner);
