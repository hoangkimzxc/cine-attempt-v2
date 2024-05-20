import Footer from "@components/organisms/footer";
import Header from "@components/organisms/header";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default MainLayout;
