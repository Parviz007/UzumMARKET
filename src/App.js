import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import React, { Component } from "react";
import Navbar from "./UZmarket/Navbar/Navbar";
import {UzumMarket} from "./UzumMarket";
// import ImgSw from "./UZmarket/Slayper/fooo.webp"
import foto1 from "./UZmarket/Slayper/foto .jpg"
import foto2 from "./UZmarket/Slayper/foto2.jpg"
function App() {
  function Swiper(
    Id,
    SwImg
  ){
    return{
      Id,
      SwImg
    }
  }
  
  let SSwipe = [
   
    Swiper(
      2,
      foto1
      
      ),
    Swiper(
      3,
      foto2
      ),

  ]
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <UzumMarket SSwipe={SSwipe}/>
    </Box>
  );
}

export default App;
