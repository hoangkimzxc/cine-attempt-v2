import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ color: "#ccc", padding: "20px 100px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "16px",
        }}
      >
        <Box>
          <Box display="flex" gap="10px" marginBottom="10px">
            <IconButton sx={{ color: "#ccc", p: "0" }}>
              <Facebook sx={{ fontSize: "40px" }} />
            </IconButton>
            <IconButton sx={{ color: "#ccc", p: "0" }}>
              <Instagram sx={{ fontSize: "40px" }} />
            </IconButton>
            <IconButton sx={{ color: "#ccc", p: "0" }}>
              <Twitter sx={{ fontSize: "40px" }} />
            </IconButton>
            <IconButton sx={{ color: "#ccc", p: "0" }}>
              <YouTube sx={{ fontSize: "40px" }} />
            </IconButton>
          </Box>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Audio and Subtitles
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Press
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Privacy
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Contact Us
            </Link>
          </Typography>
          <Typography
            sx={{
              marginBottom: "12px",
              fontSize: "18px",
              border: "1px solid #ccc",
              p: "10px",
              width: "fit-content",
            }}
          >
            <Link href="#" color="inherit" underline="none">
              Service Code
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              1997 - 2021 Cinematics
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Descriptive Audio
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Relationship with Investors
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Legal Notices
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Help Center
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Careers
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Cookies Preferences
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Gift Cards
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Terms of Use
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: "12px", fontSize: "18px" }}>
            <Link href="#" color="inherit" underline="none">
              Corporate Information
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box marginTop="20px">
        <Typography variant="body2" color="textSecondary">
          1997 - 2021 Cinematics
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
