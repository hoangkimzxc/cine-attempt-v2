import { gradientEffect } from "@/utils/animation";
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
          "linear-gradient(-125deg, #f07762, #87346d, #172a5b, #0c1232)",
        backgroundSize: "400% 400% ",
        animation: `${gradientEffect} 8s ease infinite`,
      }}
    >
      <LoginForm />
    </Box>
  );
}
