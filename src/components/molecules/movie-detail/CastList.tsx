import { renderImage } from "@/utils/helpers";
import { Box, Typography } from "@mui/material";
import { MovieCredit } from "@store/movieDetailStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

interface CastListProps {
  credits: MovieCredit[];
}

interface CastProps {
  name: string;
  imgSrc: string;
}

function CastList({ credits }: CastListProps) {
  return (
    <>
      <Typography fontSize={20} fontWeight={500} color="white">
        Cast:
      </Typography>
      <Swiper slidesPerView={5.5}>
        {credits?.map((credit) => (
          <SwiperSlide key={credit.cast_id}>
            <Link to="">
              <Cast
                name={credit.name || credit.original_name}
                imgSrc={credit.profile_path}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default React.memo(CastList);

function Cast({ name, imgSrc }: CastProps) {
  return (
    <Box
      padding="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8px"
      sx={{
        cursor: "pointer",
        transition: "transform 100ms ease 30ms",
        borderRadius: "10px",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.05) translateY(-0.5px)",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow:
            "0 10px 15px -3px rgba(16, 185, 129, 0.5), 0 4px 6px -2px rgba(16, 185, 129, 0.5)",
          height: "200px",
          width: "100%",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgba(251,191,33, 0.5), 0 4px 6px -2px rgba(251,191,33, 0.5)",
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
            borderRadius: "8px",
          }}
        />
      </Box>
      <Typography color="white" sx={{ textAlign: "center" }}>
        {name}
      </Typography>
    </Box>
  );
}
