import { removeHTMLArtifacts, truncateText } from "@/utils/helpers";
import Button from "@components/atoms/button";
import { Box, Typography } from "@mui/material";
export interface BannerProps {
  title: string;
  imgSrc: string;
  description: string;
}

export function Banner({ title, imgSrc, description }: BannerProps) {
  return (
    <>
      <Box position="absolute" color="white" top="30%" left="30px" zIndex={3}>
        <Typography fontWeight={600} fontSize={64} width="60%" lineHeight={1.1}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" gap="10px" mt="16px" mb="20px">
          <Button
            sx={{
              color: "white",
              bgcolor: "rgba(51,51,51,0.5)",
              borderRadius: "5px",
              height: "40px",
              padding: "8px 36px",
              width: "fit-content",
              transition: "transform 100ms",
              "&:hover": {
                backgroundColor: "#e11d48",
                transform: "translate(-2px) scale(1.1)",
              },
            }}
          >
            <Typography fontSize={18} fontWeight={500}>
              Play
            </Typography>
          </Button>
          <Button
            sx={{
              color: "white",
              bgcolor: "rgba(51,51,51,0.5)",
              borderRadius: "5px",
              height: "40px",
              width: "fit-content",
              padding: "8px 16px",
              transition: "transform 100ms",
              "&:hover": {
                backgroundColor: "#e6e6e6",
                color: "black",
                transform: "translate(-2px) scale(1.1)",
              },
            }}
          >
            <Typography
              fontSize={18}
              textTransform="capitalize"
              fontWeight={500}
            >
              More Info
            </Typography>
          </Button>
        </Box>
        <Typography width="50%" fontSize={17}>
          {truncateText(removeHTMLArtifacts(description), 300)}
        </Typography>
      </Box>
      <Box width="100wh" height="100vh">
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", backgroundPosition: "center" }}
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
