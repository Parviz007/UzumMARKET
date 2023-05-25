import { Box, Typography, Button } from "@mui/material";
import React from "react";

export default function Project({ Product }) {
  let itemLocal = (item) => {
    if (localStorage.getItem("korzinaProduct")) {
      let a = JSON.parse(localStorage.getItem("korzinaProduct"));
      a.push(item);
      localStorage.setItem("korzinaProduct", JSON.stringify(a));
    } else {
      localStorage.setItem("korzinaProduct", JSON.stringify([]));
      let b = JSON.parse(localStorage.getItem("korzinaProduct"));
      b.push(item);
      localStorage.setItem("korzinaProduct", JSON.stringify(b));
    }
  };
  return (
    <Box width={"90%"} margin={"0 auto"} sx={{ animation: "5s 0s " }}>
      <Box>
        <Typography
          sx={{
            display: "flex",
            fontSize: "30px",
            fontWeight: "600",
            alignItems: "center",
            padding: "30px 0 20px 0",
          }}
        >
          Скидки <i class="bx bx-chevron-right"></i>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            overflow: "hidden",
        
            flexWrap: "wrap",
          }}
        >
          {Product.map((item, index) => (
            <Box
              key={index}
              sx={[
                {
                  width: "300px",
                  display: "felx",
                  maxWidth: "300px",
                  flexDirection: "column",
                  gap: "20px",
                  position: "relative",
                },
                {
                  "&:hover": {},
                },
              ]}
            >
              <Box
                sx={[
                  { display: "flex", overflow: "hidden" },
                  {
                    "&:hover": {
                      scale: "1.02",
                      transition: "0.65s all",
                      overflow: "hidden",
                      borderRadius: "15px",
                    },
                  },
                ]}
              >
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
                    borderRadius: "15px",
                    fontSize: "14px",
                  }}
                >
                  3 600 сум/мес
                </Typography>
                <Box sx={{ padding: "10px 0" }}>
                  <Typography
                    style={{
                      fontSize: "15px",
                      color: "#A2A2A4",
                      borderBottom: "1px solid #000",
                      height: "10px",
                      width: "70px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.oldPrise}сум
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#000" }}>
                    {item.newPrise}сум
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={[
                      {
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                      },
                    ]}
                  >
                    <i
                      style={{
                        fontSize: "25px",
                        fontWeight: "100",
                        color: "#A2A2A4",
                      }}
                      class="bx bx-heart"
                    ></i>
                  </Box>
                  <Box
                    sx={{ position: "absolute", bottom: "25px", right: "15px" }}
                  >
                    <i
                      onClick={itemLocal(item)}
                      style={{
                        fontSize: "25px",
                        fontWeight: "100",
                        color: "#A2A2A4",
                      }}
                      class="bx bx-shopping-bag"
                    ></i>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box style={{ position: "absolute", button: "50px", left: "25%" }}>
          <button
            style={{
              width: "850px",
              height: "70px",
              border: "solid 0px",
              borderRadius: "10px",
              margin: "50px 0",
              fontSize:"20px",
              fontWeight:"6500"
            }}
          >
            Паказат ещё 20
          </button>
        </Box>
      </Box>
    </Box>
  );
}
