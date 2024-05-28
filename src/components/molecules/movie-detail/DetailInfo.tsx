import { Chip } from "@components/atoms/chip";
import { Box, Typography } from "@mui/material";
import React from "react";

interface DetailInfoProps {
  title: string;
  genres: any[];
  description: string;
  imdb: number;
}

function DetailInfo({ title, genres, description, imdb }: DetailInfoProps) {
  return (
    <Box color="white">
      <Box>
        <Typography fontSize={60} fontWeight={600} lineHeight={1.2}>
          {title}
        </Typography>
      </Box>
      <Box my="20px" display="flex" alignItems="center" gap="8px">
        {genres?.map((genre) => (
          <Chip label={genre.name} variant="outlined" />
        ))}
      </Box>
      <Box>
        <Typography>{description}</Typography>
      </Box>
      <Box my="25px" display="flex" alignItems="center" gap="4px">
        <Typography fontSize={20} fontWeight={600}>
          IMDB:
        </Typography>
        <Typography fontSize={20} fontWeight={600} color="#dba721">
          {imdb}
        </Typography>
      </Box>
    </Box>
  );
}
export default React.memo(DetailInfo);
