import * as React from "react";
import AppBarMaterial from "@mui/material/AppBar"; // Renamed AppBar to AppBarMaterial
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMaterial position="static" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#f18d7a" }}>
            Tendencys App test
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#F3B49E", fontSize: "0.6em", ml: 1 }}>
              Luis Gerardo Camara Salinas
            </Typography>
          </Typography>
        </Toolbar>
      </AppBarMaterial>
    </Box>
  );
}
