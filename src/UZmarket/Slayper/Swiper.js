import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

import { Navigation } from "swiper";
export const Swipe = ({ SSwipe }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {SSwipe.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              width={"90%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt="20px"
            >
              <Box
                width={"100vw"}
                overflow={"hidden"}
                borderRadius={"20px"}
                bgcolor={"red"}
              >
                {/* {console.log(item.SwImg)} */}
                <img
                  src={item.SwImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
