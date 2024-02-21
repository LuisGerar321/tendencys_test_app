import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import MyAppBar from "../navbar";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      <MyAppBar></MyAppBar>
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>{children}</Box>
    </Box>
  );
};
