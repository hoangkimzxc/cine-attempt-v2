import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface CastListProps {
  credits: any[];
}

interface CastProps {
  name: string;
  imgSrc: string;
}

function CastList({ credits }: CastListProps) {
  return (
    <>
      <Swiper spaceBetween={7} slidesPerView={6}>
        {credits?.map((credit) => (
          <SwiperSlide key={credit.cast_id}>
            <Cast
              name={credit.name || credit.original_name}
              imgSrc={credit.profile_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CastList;

function Cast({ name, imgSrc }: CastProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
      />
      <Typography color="white">{name}</Typography>
    </>
  );
}
