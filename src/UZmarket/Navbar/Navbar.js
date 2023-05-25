import { Box, Typography, Button, Link } from "@mui/material";
import React, { Component } from "react";
import uzumFoto from "./uzum_market.svg";
import uz from "./kisspng-flag-of-uzbekistan-flags-of-asia-national-flag-uzbekistan-state-university-of-world-languages-s-5d240565227364.2389355915626417651411.jpg";
export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ bgcolor: "#F4F5F5" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "0 100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <Typography sx={{ fontSize: "20px", display: "flex" }}>
                {" "}
                <Typography sx={{ fontSize: "25px" }}>
                  <i class="bx bx-location-plus"></i>
                </Typography>
                Город: Ташкент
              </Typography>
              <Typography>Пункты выдачи</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#62656A", fontSize: "20px" }}>
                Доставим ваш заказ бесплатно - всего 1 ден!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                color: "#62656A",
                fontSize: "18px",
                alignItems: "center",
              }}
            >
              <Typography>Пройдите на Uzum</Typography>
              <Typography>Вопрос-ответа</Typography>
              <Typography>Мои заказы </Typography>
              <Typography sx={{ display: "flex", fontSize: "20px" }}>
                {" "}
                <img src={uz} alt="" width={"50px"} /> русский
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            gap: "10px",
            padding: "0 100px",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              gap: "45px",
            }}
          >
            <img width={"250px"} src={uzumFoto} alt="" />
            <Button
              sx={{
                padding: "10px 25px",
                bgcolor: "#EAEAF9",
                border: "0",
                gap: "15px",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              <i
                style={{ fontSize: "27px", fontWeight: "500" }}
                class="bx bx-collection"
              ></i>{" "}
              Каталог
            </Button>
          </Box>
          <Box
            border={"1px solid #ccc"}
            bgcolor={"#fff"}
            gap="250px"
            display={"flex"}
            justifyContent={"space-between"}
            padding={"0px 0px 0 20px"}
            borderRadius={"5px"}
          >
            <input
              type="text"
              placeholder="Искать товары и категории"
              style={{
                border: "solid red",
                outline: "none",
                fontSize: "17px",
                borderRadius: "5px",
                border: "0px",
              }}
            />
            <Box
              sx={{
                borderRadius: "5px",
                bgcolor: "#F8F8F8",
                padding: "10px 35px ",
              }}
            >
              <i style={{ fontSize: "25px" }} class="bx bx-search"></i>
            </Box>
          </Box>
          <Box sx={{ color: "#000", fontSize: "30px" }}>
            <Button
              sx={{ padding: "10px", alignItems: "center" }}
              variant="#000"
            >
              {" "}
              <i
                style={{ padding: "0 10px", fontSize: "25px" }}
                class="bx bx-user"
              ></i>
              <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                {" "}
                Войти
              </Typography>
            </Button>
            <Button sx={{ padding: "10px" }} variant="#000">
              {" "}
              <i
                style={{ padding: "0 10px", fontSize: "25px" }}
                class="bx bx-heart"
              ></i>
              <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                {" "}
                Избранное
              </Typography>
            </Button>
            <Link to="/karzina">
              <Button sx={{ padding: "10px" }} variant="#000">
                {" "}
                <i
                  style={{ padding: "0 10px", fontSize: "25px" }}
                  class="bx bx-shopping-bag"
                ></i>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  {" "}
                  Корзина
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 100px",
          }}
        >
          <Typography
            sx={[
              {
                color: "#8E8E8E",
                fontSize: "18.5px",

              },
              {
                "&:hover": {
                  borderBottom:"solid 3px",
                  color: "#000",
                },
              },
            ]}
          >
            Электроника
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Бытовая техтика
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Одежда
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Обувь
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Аксесуары
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Красота
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Здоровье
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Товары дла дома
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Строитилство и ремонт
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Автотовары{" "}
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                  borderBottom: "solid #000 3px",
                  animation: "3s linear 5s infinite running slidein;",
                },
              },
            ]}
          >
            Детские товары
          </Typography>
          <Typography
            sx={[
              { color: "#8E8E8E", fontSize: "18.5px" },
              {
                "&:hover": {
                  color: "#000",
                },
              },
            ]}
          >
            Ещё
          </Typography>
        </Box>
      </Box>
    );
  }
}
