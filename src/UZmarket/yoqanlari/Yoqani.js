import { Box, Typography } from "@mui/material";
import React from "react";
import foto2 from "./hearts.webp";
import { Link } from "react-router-dom";
export default function Yoqani() {
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
      <img width={"180px"} src={foto2} alt="" />
      <Typography>Добавьте то, что понравилось</Typography>
      <Typography>
        Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится
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
}
