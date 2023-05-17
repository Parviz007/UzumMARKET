import { Box, Typography } from "@mui/material";
import React from "react";

export default function Project({ Product }) {
  return (
    <Box width={"90%"} margin={"0 auto"} sx={{ animation: "5s 0s " }}>
      <Box>
        <Typography
          sx={{
            display: "flex",
            fontSize: "30px",
            fontWeight: "600",
            alignItems: "center",
            padding: "50px 0",
            border: "solid yellow",
          }}
        >
          Скидки <i class="bx bx-chevron-right"></i>
        </Typography>
        <Box sx={{ border: "solid red", display: "flex", gap: "15px" }}>
          {Product.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "300px",
                display: "felx",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box sx={{ display: "flex", animation: "5s  " }}>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={item.defImg}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  padding: "10px",
                }}
              >
                <Typography>{item.Text}</Typography>

                <Typography sx={{ fontSize: "14px" }} color={"#62656A"}>
                  <i class="bx bx-star"></i>
                  {item.baho}
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
                  {item.newPrice}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box>
          <i
            style={{ fontSize: "25px", fontWeight: "100" }}
            class="bx bx-heart"
          ></i>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
