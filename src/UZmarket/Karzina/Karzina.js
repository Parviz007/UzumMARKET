import React from "react";
import { Box, Typography } from "@mui/material";
export default function Karzina() {
  return (
    <div>
      <Box>
        <Box sx={{width:"100%", display: "flex" }}>
          <Typography>Ваша корзина</Typography>
          <Typography>1 товар</Typography>
        </Box>
      </Box>
    </div>
  );
}
