import TextField from "@components/atoms/text-field";
import * as React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { Box, Typography } from "@mui/material";
import Button from "@components/atoms/button";
import Checkbox from "@components/atoms/checkbox";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="310px"
    >
      <Box
        width="100%"
        color="white"
        position="relative"
        mb="50px"
        sx={{
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            width: "calc(50% - 50px)", // Adjust 50px to match the radius of the circle
            height: "1px",
            borderTop: "1px solid #d2d2d2",
            transform: "translateY(-50%)",
          },
          "&::before": {
            left: 0,
          },
          "&::after": {
            right: 0,
          },
        }}
      >
        <Box
          bgcolor="transparent"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
          position="absolute"
          top="-8px"
          left="50%"
          borderRadius="50%"
          border="1px solid #d2d2d2"
          sx={{
            transform: "translate(-50%,-50%)",
            ".MuiSvgIcon-root": {
              width: "80%",
              height: "80%",
            },
          }}
        >
          <AppRegistrationIcon />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="12px"
        my="25px"
        width="100%"
      >
        <TextField
          autoFocus
          type="text"
          placeholder="Create new email"
          startIcon={<AlternateEmailIcon />}
          breathingColor="#f3fe53"
        />
        <TextField
          type="password"
          placeholder="Create new password"
          startIcon={<EnhancedEncryptionIcon />}
          breathingColor="#f3fe53"
        />
      </Box>
      <Button
        sx={{
          bgcolor: "#ee3069",
          color: "white",
          borderRadius: "5px",
          height: "38px",
          transition: "linear 0.1s",
          "&:hover": { backgroundColor: "#32b674" },
        }}
      >
        <Typography fontSize="16px" fontWeight="600">
          Create new account
        </Typography>
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mt="25px"
        mb="20px"
      >
        <Checkbox label="Remember me" />
        <Typography
          fontSize="12px"
          color="white"
          fontStyle="italic"
          sx={{
            textDecoration: "underline",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </Typography>
      </Box>
      <Box height="2px" width="100%" borderTop="2px solid #d2d2d2"></Box>
    </Box>
  );
}
