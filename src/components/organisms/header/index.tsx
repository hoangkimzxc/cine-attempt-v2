import { useEffect, useState } from "react";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Box, Typography } from "@mui/material";
import Button from "@components/atoms/button";
import { Chip } from "@components/atoms/chip";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const transitionHeader = () => {
    if (window.scrollY > 180) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      bgcolor={showHeader ? "#080808" : ""}
      height="80px"
      padding="40px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex="4"
      sx={{
        transition:
          "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        borderBottom: showHeader ? 2 : 0, // sets the border bottom width
        borderColor: "#ea580c", // you can use theme palette or specific color
        boxShadow: showHeader
          ? `0px 10px 20px -10px rgba(255, 191, 71, 0.5)`
          : "none",
      }}
    >
      <Link to="/movie">
        <Box display="flex" alignItems="center" color="#e11d48" gap="8px">
          <MovieFilterIcon sx={{ fontSize: "40px" }} />
          <Typography fontSize="36px" fontWeight={600}>
            Cinematics
          </Typography>
        </Box>
      </Link>
      <Box
        display="flex"
        alignItems="center"
        gap="16px"
        sx={{
          a: {
            borderRadius: "8px",
            color: "#a1a0a7",
            "&:hover": {
              color: "white",
            },
          },
          ".active": {
            color: "#fbbf21",
            backgroundColor: "#212122",
            "&:hover": {
              color: "#fcc12b",
              backgroundColor: "#2f2f30",
            },
          },
        }}
      >
        <NavLink to="/movie">
          <Chip label="Movie" />
        </NavLink>
        <NavLink to="/trendings">
          <Chip label="Trendings" />
        </NavLink>
        <NavLink to="">
          <Chip label="Shows" />
        </NavLink>
        <NavLink to="">
          {" "}
          <Chip label="Cartoons" />
        </NavLink>
      </Box>
      <Box display="flex" alignItems="center" gap="4px">
        <Button variant="outlined" onClick={() => navigate("/login")}>
          LOGIN
        </Button>
        <Button variant="outlined" onClick={() => navigate("/register")}>
          REGISTER
        </Button>
      </Box>
    </Box>
  );
}
