import { Box, Typography } from "@mui/material";
import { MovieVideo } from "@store/movieDetailStore";
import React from "react";
import ReactPlayer from "react-player";

interface TrailerListProps {
  trailerVideos: MovieVideo[];
}

function TrailerList({ trailerVideos }: TrailerListProps) {
  return (
    <>
      <Box display="flex" flexDirection="column" gap="40px">
        {trailerVideos?.splice(0, 2)?.map((video) => (
          <Box
            key={video.id}
            marginBottom="10px"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            <Box display="flex" alignItems="center" gap="4px">
              <Typography fontWeight={600} fontSize={22} color="white">
                {video?.name}
              </Typography>

              <Typography fontWeight={600} fontSize={22} color="white">
                ({video?.type})
              </Typography>
            </Box>
            <ReactPlayer
              style={{
                boxShadow: "0px 4px 6px rgba(255, 0, 255, 0.5)",
                borderRadius: "0.5rem",
                transition: "all 0.1s ease-in-out",
              }}
              controls
              url={`https://www.youtube.com/watch?v=${video?.key}`}
              muted
              width="100%"
              height="40rem"
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default React.memo(TrailerList);
