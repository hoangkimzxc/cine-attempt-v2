import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Box, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <Box>
      <Box>
        <MovieFilterIcon />
        <Typography>Cinematics</Typography>
      </Box>
    </Box>
  );
}
