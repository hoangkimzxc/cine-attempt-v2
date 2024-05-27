import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import useMovieStore from "@store/movieStore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface WatchMovieProps {
  movieName: string;
}

function WatchMovie({ movieName }: WatchMovieProps) {
  const { searchMovie, searchedMovie } = useMovieStore();
  const { state } = useLocation();

  const [open, setOpen] = useState<boolean>(state?.playMovie || false);

  useEffect(() => {
    searchMovie(movieName);
  }, [movieName, searchMovie]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={searchedMovie ? handleClick : undefined}
        sx={{
          position: "relative",
          bgcolor: "#ee3069",
          borderRadius: "5px",
          height: "60px",
          width: "200px",
          transition: "linear 0.1s",
          "&:hover": { backgroundColor: "#32b674" },
          "&.Mui-disabled": {
            bgcolor: "#1f8653",
          },
        }}
      >
        <Typography fontSize="16px" fontWeight="600" color="white">
          Watch Movie
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "#000",
            color: "white",
            boxShadow: "0px 4px 6px rgba(218,6,228, 0.5)",
          },
        }}
      >
        <DialogTitle>{movieName}</DialogTitle>
        <DialogContent>
          <iframe
            src={searchedMovie}
            title={movieName}
            width="100%"
            height="500px"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default WatchMovie;
