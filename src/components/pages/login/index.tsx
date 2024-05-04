import { gradientAnimation } from "@/utils/gradientAnimation";
import LoginForm from "@components/molecules/login-form";
import { Box } from "@mui/material";
import * as React from "react";

export default function Login() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background:
          "linear-gradient(-125deg, #ee6764, #3d3368, #162855, #101736)",
        backgroundSize: "400% 400% ",
        animation: `${gradientAnimation} 8s ease infinite`,
      }}
    >
      <LoginForm />
    </Box>
  );
}
