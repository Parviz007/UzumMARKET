import { Box } from "@mui/material";
import React, { Component } from "react";
import { Swipe } from "./UZmarket/Slayper/Swiper";
import Project from "./UZmarket/poject_Item/Project";

export const UzumMarket = ({ SSwipe }) => {
  return (
    <Box>
      <Swipe SSwipe={SSwipe} />
      <Project />
    </Box>
  );
};
