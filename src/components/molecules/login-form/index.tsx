import TextField from "@components/atoms/text-field";
import * as React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, Typography } from "@mui/material";
import Button from "@components/atoms/button";
import Checkbox from "@components/atoms/checkbox";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="300px"
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
          <PersonIcon />
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
          type="text"
          placeholder="Email"
          icon={<EmailOutlinedIcon />}
        />
        <TextField
          type="password"
          placeholder="Password"
          icon={<LockOutlinedIcon />}
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
          LOGIN
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
          onClick={() => navigate("/register")}
        >
          Don't have an account?
        </Typography>
      </Box>
      <Box height="2px" width="100%" borderTop="2px solid #d2d2d2"></Box>
    </Box>
  );
}
