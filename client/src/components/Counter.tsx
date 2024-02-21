import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { socket } from "../sockets";
import { useNavigate } from "react-router-dom";

export const Counter = () => {
  const [currCounter, setCurrCounter] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleNewShippingLabel = () => {
      setCurrCounter((prev) => prev + 1);
    };

    socket.on("newShippingLabel", handleNewShippingLabel);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      socket.off("newShippingLabel", handleNewShippingLabel);
    };
  }, []);

  return (
    <Box
      sx={{
        width: {
          xs: 300,
          md: 500,
        },
        height: {
          xs: 300,
          md: 500,
        },
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <LocalShippingIcon
        sx={{
          color: "#f27345",
          position: "absolute",
          top: {
            xs: -33,
            md: -75,
          },
          width: {
            xs: 75,
            md: 150,
          },
          height: {
            xs: 75,
            md: 150,
          },
          animation: "moveAndFade 10s infinite linear",
          "@keyframes moveAndFade": {
            "0%": {
              transform: "translateX(-100%)",
              opacity: 0,
            },
            "5%": {
              transform: "translateX(-100%)",
              opacity: 1,
            },
            "95%": {
              transform: "translateX(100%)",
              opacity: 1,
            },
            "100%": {
              transform: "translateX(100%)",
              opacity: 0,
            },
          },
        }}
      ></LocalShippingIcon>
      <Typography
        variant="h1"
        color="#f06330"
        sx={{
          animation: "grow 0.5s ease-in-out",
          "@keyframes grow": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.5)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
      >
        {currCounter}
      </Typography>
      {/* <IconButton
        onClick={() => {
          // navigate("/shipping");
        }}
        sx={{
          color: "#F29F81",
          position: "absolute",
          bottom: {
            xs: -33,
            md: -75,
          },
          width: {
            xs: 75,
            md: 150,
          },
          height: {
            xs: 75,
            md: 150,
          },
        }}
      >
        <AddCircleIcon
          sx={{
            width: "100%",
            height: "100%",
          }}
        ></AddCircleIcon>
      </IconButton> */}

      <Typography
        variant="h3"
        sx={{
          whiteSpace: "nowrap",
          color: "#F29F81",
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: {
            xs: -33,
            md: -75,
          },
          width: {
            xs: 75,
            md: 150,
          },
          height: {
            xs: 75,
            md: 150,
          },
          textAlign: "center",
          fontSize: {
            xs: "1.5em",
            md: "3em",
          },
        }}
      >
        Total shipping labels
      </Typography>
    </Box>
  );
};
