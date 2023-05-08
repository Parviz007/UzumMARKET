
import "./App.css";
import { Box } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./UZmarket/Navbar/Navbar";
import { UzumMarket } from "./UzumMarket";
// import ImgSw from "./UZmarket/Slayper/fooo.webp"
import foto1 from "./UZmarket/Slayper/uzumFoto.jpg";
import foto2 from "./UZmarket/Slayper/uzumFoto2.jpg";
import foto3 from "./UZmarket/Slayper/uzumFoto3.jpg";
import foto4 from "./UZmarket/Slayper/foto .jpg";
import foto5 from "./UZmarket/Slayper/foto2.jpg";
function App() {
  function Swiper(Id, SwImg) {
    return {
      Id,
      SwImg,
    };
  }

  let SSwipe = [
    Swiper(1, foto1),
    Swiper(2, foto2),
    Swiper(3, foto3),
    Swiper(4, foto4),
    Swiper(5, foto5),

  ];
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <UzumMarket SSwipe={SSwipe} />
    </Box>
  );
}

export default App;
