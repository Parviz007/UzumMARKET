import { Box, Typography } from "@mui/material";
import React from "react";
import fotoProduct from "./foto_Tide.jpg";
export default function Project() {
  return (
    <Box width={"90%"} margin={"0 auto"} >
      <Box>
        <Typography
          sx={{
            display: "flex",
            fontSize: "30px",
            fontWeight: "600",
            alignItems: "center",
            padding: "50px 0",
          }}
        >
          Скидки <i class="bx bx-chevron-right"></i>
        </Typography>
        <Box
          sx={{
            width: "300px",
            display: "felx",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={fotoProduct}
              alt=""
            />
          </Box>
          <Box
            sx={{
              
              display: "flex",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            <Typography>
              Стиральный порошок Tide Color, автомат, 3 кг
            </Typography>

            <Typography sx={{ fontSize: "14px" }} color={"#62656A"}>
              <i class="bx bx-star"></i>
              5.0 (3 оценки)
            </Typography>

            <Typography
              sx={{
                bgcolor: "yellow",
                width: "115px",
                textAlign: "center",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              3 600 сум/мес
            </Typography>
            <Typography fontWeight={"700"} padding={"20px 0"}>
              79 000 сум
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box><i style={{fontSize:"25px", fontWeight:'100'}} class='bx bx-heart'></i></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
