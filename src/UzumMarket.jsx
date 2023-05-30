import { Box } from "@mui/material";
import React from "react";
import { Swipe } from "./UZmarket/Slayper/Swiper";
import Project from "./UZmarket/poject_Item/Project";
import Footer from "./UZmarket/Footer/Footer";

export const UzumMarket = ({ SSwipe,Product }) => {
  return (
    <Box>
      <Swipe SSwipe={SSwipe} />
      <Project Product={Product}/>
      <Footer />
    </Box>
  );  
};
