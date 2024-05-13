import Header from "@components/organisms/header";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Box minHeight="1600px" bgcolor="#111111">
      <Header />
      <Outlet />
    </Box>
  );
}

export default MainLayout;
