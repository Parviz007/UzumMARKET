import { Box, Typography } from "@mui/material";
import React from "react";
import foto from "./chumchuk.webp";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        padding: "12% 0",
      }}
    >
      <img width={"180px"} src={foto} alt="" />
      <Typography>Что-то пошло не так</Typography>
      <Typography>
        Попробуйте вернуться назад или перейдите на главную страницу
      </Typography>
      <Link to={"/"}>
        <button
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "5px",
            background: "#6E00FF",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            color: "#FFFFFF",
          }}
        >
          Bosh sahifa
        </button>
      </Link>
    </Box>
  );
};
