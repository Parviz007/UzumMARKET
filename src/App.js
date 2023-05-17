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
import fotoproduct from "./UZmarket/poject_Item/foto_Tide.jpg"
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
  function project_item(
    id,
    Name,
    Text,
    defImg,
    baho,
    oldPrise,
    newPrise,
    Img,
    Img2,
    Img3,
    Img4,
    Qoldi
  ) {
    return {
      id,
      Name,
      Text,
      defImg,
      baho,
      oldPrise,
      newPrise,
      Img,
      Img2,
      Img3,
      Img4,
      Qoldi,
    };
  }

  let Product = [
    project_item(
      1,
      "Tide",
      "Parashok",
      fotoproduct,
      "6.0(65 baho)",
      99000,
      89000,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      "2 ta qoldi"
    ),
    project_item(
      1,
      "Tide",
      "Parashok",
      fotoproduct,
      "6.0(65 baho)",
      99000,
      89000,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      "2 ta qoldi"
    ),
    project_item(
      1,
      "Tide",
      "Parashok",
      fotoproduct,
      "6.0(65 baho)",
      99000,
      89000,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      "2 ta qoldi"
    ),
    project_item(
      1,
      "Tide",
      "Parashok",
      fotoproduct,
      "6.0(65 baho)",
      99000,
      89000,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      "2 ta qoldi"
    ),
    project_item(
      1,
      "Tide",
      "Parashok",
      fotoproduct,
      "6.0(65 baho)",
      99000,
      89000,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      fotoproduct,
      "2 ta qoldi"
    ),
  ];

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <UzumMarket SSwipe={SSwipe} Product={Product} />
    </Box>
  );
}

export default App;
